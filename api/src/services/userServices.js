const {User} = require("../db")

const createNewUser = async (username, email, password) => {
   const newUser = await User.create({username,email, password})
   if(newUser){
    return {msg: `El usuario ${username} fue creado exitosamente`, newUser}
}
}

module.exports ={
    createNewUser
}