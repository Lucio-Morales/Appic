import { useForm } from "react-hook-form"

const RegistrationForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    console.log(errors);
    const onSubmit = handleSubmit((formData) => {
        console.log(formData);
    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                {/* Name */}
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Name" {...register("name", {
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
                    pattern: {
                        value: /[!@#$%^&*(),.?":{}|<>]/,
                        message: "La contraseña debe tener un caracter especial.",
                    }
                })} />
                {errors.password && <span>{errors.password.message}</span>}


                <button>Submit</button>
            </form>
        </div>

    )
}

export default RegistrationForm