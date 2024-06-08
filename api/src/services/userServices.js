const {User} = require("../db");
const bcrypt = require("bcrypt");

const createNewUser = async (name, email, password) => {

    //Reviso que el email no este ocupado.
    const emailInUse = await User.findOne({where: {email : email}}) 
    
    //Si el email esta en uso:
    if(emailInUse) {
       //Retorno un error.
        throw new Error(`Correo electronico invalido.`);
        }

    //Si el email no estaba en uso:  
    //1.Hasheo la contraseña
    const hashedPassword = await bcrypt.hash(password, 10)
    //2.Creo el nuevo usuario en la DB con la contraseña hasheada.
    const newUser = await User.create({ name, email, password: hashedPassword });
    //Si la creacion fue exitosa, retorno un mensaje de exito con el usuario creado.
    if (newUser) {
            return { msg: `El usuario ${name} fue creado exitosamente`, newUser };
        }
}

const validateLogin = async (email, password) => {
    //Validar si las credenciales del usuario que intenta loguear coinciden con el registro en la DB

    //1-Valido que el usuario exista mediante su email:
    const searchUser = await User.findOne({where: {email:email}});

    //Si el usuario existe:
    if(searchUser){
        //Comparo las contraseñas:
        const correctPassword = await bcrypt.compare(password, searchUser.password)

        //Si la contraseña es correcta retorno un objeto con info:
        if(correctPassword) {
            return {
                userEmail: true,
                userPassword: true,
                access: true
            }
        } 
        throw new Error("Contraseña incorrecta.")
    }
    throw new Error("Email invalido. El usuario no esta registrado.")
}


module.exports = {
    createNewUser,
    validateLogin
}