const { userServices } = require("../services");


const postUser = async (req, res) => {
    const { username, email, password } = req.body;
    
   try {
    const serviceResponse = await userServices.createNewUser(username,email, password)
    res.status(200).json(serviceResponse)
   } catch (error) {
    res.status(400).json({error: error.message})
   }
}

module.exports = {
    postUser
}