const {User} = require("../db")

const createNewUser = async (username, email, password) => {
    const searchUserByEmail = await User.findOne({where: {email : email}}) 
    if(searchUserByEmail) throw new Error(`El correo electrónico ${email} ya está en uso.`);
    
    const newUser = await User.create({ username, email, password });
    if (newUser) {
            return { msg: `El usuario ${username} fue creado exitosamente`, newUser };
        }
}


module.exports ={
    createNewUser
}