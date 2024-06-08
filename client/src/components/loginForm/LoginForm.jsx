import { useForm } from "react-hook-form";
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { loginUser } from "../../utils/api";
import styles from "./loginForm.module.css";


const LoginForm = () => {

    //Hook para gestionar el formulario
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    //Estado para gestionar el paso del cartel de bienvenida al loginForm.
    const [showLoginForm, setShowLoginForm] = useState(false)

    //Configuracion para gestionar la solicitud POST
    const loginUserMutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            console.log(data);
            reset()
        },
        onError: (error) => {
            console.log(error);
        }
    })

    //Funcion para setear estado local en true
    const showLogin = () => {
        setShowLoginForm(true)
    }

    //Funcion que recibe loginData y ejecuta la mutacion
    const onSubmit = (loginData) => {
        loginUserMutation.mutate(loginData)
    }

    return (
        <>
            {
                showLoginForm ?
                    //Formulario de login
                    (<div className={styles.formContainer}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="Email" {...register("email", {
                                required: {
                                    value: true,
                                    message: "Ingrese su email."
                                }
                            })} />
                            {errors.email && <span>{errors.email.message}</span>}

                            <input type="password" placeholder="Password" {...register("password", {
                                required: {
                                    value: true,
                                    message: "Ingrese su contraseña."
                                }
                            })} />
                            {errors.password && <span>{errors.password.message}</span>}
                            <button>Ingresar</button>
                        </form>
                    </div>) :
                    //Cartel de bienvenida
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