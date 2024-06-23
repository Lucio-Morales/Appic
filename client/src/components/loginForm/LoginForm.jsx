import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../../utils/api';
import styles from './loginForm.module.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
	const navigate = useNavigate();

	//Hook para gestionar el formulario
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	//Configuracion para gestionar la solicitud POST
	const loginUserMutation = useMutation({
		mutationFn: loginUser,
		onSuccess: data => {
			// if (data.access && data.user.id) {
			console.log('LoginForm:', data);
			reset();
			navigate('/profile');
			// }
		},
		onError: error => {
			console.log(error);
		},
	});

	//Funcion que recibe loginData y ejecuta la mutacion
	const onSubmit = loginData => {
		loginUserMutation.mutate(loginData);
	};

	//Cada vez que se realice una solicitud del login se renderizara un componente "Loading.."
	if (loginUserMutation.isPending) {
		return <p>Loading...</p>;
	}

	return (
		//Formulario de login
		<div className={styles.formContainer}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type='text'
					placeholder='Email'
					{...register('email', {
						required: {
							value: true,
							message: 'Ingrese su email.',
						},
					})}
				/>
				{errors.email && <span>{errors.email.message}</span>}

				<input
					type='password'
					placeholder='Password'
					{...register('password', {
						required: {
							value: true,
							message: 'Ingrese su contraseña.',
						},
					})}
				/>
				{errors.password && <span>{errors.password.message}</span>}
				<button>Ingresar</button>
			</form>
		</div>
	);
};

export default LoginForm;
