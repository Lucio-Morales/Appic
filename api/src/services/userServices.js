const { User } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { SECRET_JWT_KEY } = process.env;

//REGISTRO DE USUARIO
const createNewUser = async (name, email, password) => {
	//Reviso que el email no este ocupado.
	const emailInUse = await User.findOne({ where: { email: email } });

	//Si el email esta en uso:
	if (emailInUse) {
		//Retorno un error.
		throw new Error(`Correo electronico invalido.`);
	}

	//Si el email no estaba en uso:
	//1.Hasheo la contraseña
	const hashedPassword = await bcrypt.hash(password, 10);
	//2.Creo el nuevo usuario en la DB con la contraseña hasheada.
	const newUser = await User.create({ name, email, password: hashedPassword });
	//Si la creacion fue exitosa, retorno un mensaje de exito con el usuario creado.
	if (newUser) {
		return { msg: `El usuario ${name} fue creado exitosamente`, newUser };
	}
};

//REGISTRO DE USUARIO
const validateLogin = async (email, password) => {
	//Validar si las credenciales del usuario que intenta loguear coinciden con el registro en la DB

	//1-Valido que el usuario exista mediante su email:
	const searchUser = await User.findOne({ where: { email: email } });

	//Si el usuario existe:
	if (searchUser) {
		//Comparo las contraseñas:
		const correctPassword = await bcrypt.compare(password, searchUser.password);

		//Si la contraseña es correcta retorno un objeto con info:
		if (correctPassword) {
			return {
				message: 'El usuario esta autorizado a ingresar.',
				id: searchUser.id,
				name: searchUser.name,
				email: searchUser.email,
			};
		}
		throw new Error('Credenciales invalidas.');
	}
	throw new Error('Credenciales invalidas.');
};

//FUNCION QUE RECIBE EL TOKEN DEL USUARIO QUE INTENTA LOGUEAR Y REALIZA LAS VALIDACIONES PERTINENTES PARA AUTORIZAR SU INGRESO.
async function validateUserToken(cookieToken) {
	if (!cookieToken) {
		throw new Error('Unauthorized user.');
	}
	const decodedToken = jwt.verify(cookieToken, SECRET_JWT_KEY);

	const user = await User.findOne({ where: { id: decodedToken.id } });
	if (user) {
		return {
			access: true,
			user: { id: user.id, email: user.email, name: user.name },
		};
	}
	throw new Error('El usuario no existe bro');
}

module.exports = {
	createNewUser,
	validateLogin,
	validateUserToken,
};
