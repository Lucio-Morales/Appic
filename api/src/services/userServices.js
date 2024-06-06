const {User} = require("../db");
const bcrypt = require("bcrypt");

const createNewUser = async (name, email, password) => {
    //Reviso que el email no este ocupado.
    const emailInUse = await User.findOne({where: {email : email}}) 
    //Si el email esta en uso:
    if(emailInUse) {
       //Retorno un error.
        throw new Error(`El correo electrónico ${email} ya está en uso.`);
        }
    //Si el email no estaba en uso: 
    //1.Hasheo la contraseña
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword);
    //2.Creo el nuevo usuario en la DB con la contraseña hasheada.
    const newUser = await User.create({ name, email, password: hashedPassword });
    //Si la creacion fue exitosa, retorno un mensaje de exito con el usuario creado.
    if (newUser) {
            return { msg: `El usuario ${name} fue creado exitosamente`, newUser };
        }
}


module.exports ={
    createNewUser
}