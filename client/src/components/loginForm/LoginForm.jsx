import { useState } from "react"
import styles from "./loginForm.module.css";


const LoginForm = () => {

    const [showLoginForm, setShowLoginForm] = useState(false)

    const showLogin = () => {
        setShowLoginForm(true)
    }

    return (
        <>
            {
                showLoginForm ?
                    (<div className={styles.formContainer}>
                        <form>
                            <input type="text" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Ingresar</button>
                        </form>
                    </div>) :
                    (<div>
                        <h2>Bienvenido al nivel Login joven viajero.</h2>
                        <p>Has conseguido registrarte a mi aplicacion. Estas listo para una nueva aventura?</p>
                        <button onClick={showLogin}>Login</button>
                    </div>)
            }
        </>
    )
}

export default LoginForm