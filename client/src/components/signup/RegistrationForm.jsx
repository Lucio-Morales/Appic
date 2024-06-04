import { useForm } from "react-hook-form"
import { postNewUser } from "../../utils/api";

const RegistrationForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = handleSubmit(async (formData) => {

        try {
            const result = await postNewUser(formData);
            console.log('Usuario registrado exitosamente:', result);

        } catch (error) {
            console.error('Error registrando al usuario:', error);

        }
    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                {/* Name */}
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Name" {...register("username", {
                    required: {
                        value: true,
                        message: "El nombre es requerido."
                    },
                    minLength: {
                        value: 2,
                        message: "El nombre debe tener al menos 2 caracteres."
                    },
                    maxLength: {
                        value: 16,
                        message: "El nombre debe tener un maximo de 16 caracteres."
                    }
                })} />
                {errors.name && <span>{errors.name.message}</span>}

                {/* Fecha de nacimiento */}
                <label htmlFor="date">Fecha de nacimiento</label>
                <input type="date" {...register("date", {
                    required: {
                        value: true,
                        message: "La fecha de nacimiento es requerida."
                    },
                    validate: (value) => {
                        const fechaDeNacimiento = new Date(value);
                        const fechaActual = new Date();
                        const edad = fechaActual.getFullYear() - fechaDeNacimiento.getFullYear()
                        return edad >= 18 || "Debes ser mayor de 18 años"
                    },
                })} />
                {errors.date && <span>{errors.date.message}</span>}
                {/* Email */}
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Email" {...register("email", {
                    required: {
                        value: true,
                        message: "El correo es requerido."
                    },
                    pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,4}$/,
                        message: "Correo invalido"
                    }
                })} />
                {errors.email && <span>{errors.email.message}</span>}

                {/* Password */}
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" {...register("password", {
                    required: {
                        value: true,
                        message: "La contraseña es requerida."
                    },
                    minLength: {
                        value: 5,
                        message: "La contraseña es demasiado corta."
                    },
                    pattern: {
                        value: /[!@#$%^&*(),.?":{}|<>]/,
                        message: "La contraseña debe tener un caracter especial.",
                    }
                })} />
                {errors.password && <span>{errors.password.message}</span>}
                <label htmlFor="confirmPassword">Confirm password</label>
                <input type="password" placeholder="Confirm password" {...register("confirmPassword", {
                    required: {
                        value: true,
                        message: "Confirme su contraseña por favor."
                    },
                    validate: value => value === watch("password") || "Las contraseñas no coinciden."
                })} />
                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                <button>Submit</button>


            </form>
        </div>

    )
}

export default RegistrationForm