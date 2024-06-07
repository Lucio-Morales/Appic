import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createNewUser } from "../../utils/api";
import { useState } from "react";
import { Toaster, toast } from "sonner"
import { VscError } from "react-icons/vsc"
import styles from "./registrationForm.module.css";

const RegistrationForm = () => {

    //Estado para gestionar el estado de la solicitud POST
    const [postLoading, setPostLoading] = useState(false)

    //Hook para gestionar el formulario
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()

    //Configuracion para gestionar la solicitud POST
    const registerNewUser = useMutation({
        mutationFn: createNewUser,
        onSuccess: (data) => {
            console.log("Usuario creado con exito", data);
            reset()
        },
        onError: (error) => {
            console.log(error);
            toast(error, {
                description: "El correo electronico ya esta en uso.",
                icon: <VscError style={{ color: "red", fontSize: "1.5rem" }} />
            })
        },
        onMutate: () => {
            setPostLoading(true)
        },
        onSettled: () => {
            setPostLoading(false)
        }
    })

    const onSubmit = (formData) => {
        registerNewUser.mutate(formData)
    }


    return (
        <div className={styles.formContainer}>
            {!postLoading && (<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

                {/* DATE
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
                {errors.date && <span>{errors.date.message}</span>} */}

                {/* EMAIL */}
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


            </form>)}
            {postLoading && <p>Loading...</p>}
            <Toaster />
        </div>

    )
}

export default RegistrationForm