const { userServices } = require("../services");


const postUser = async (req, res) => {
    const { name, email, password } = req.body;
   try {
    const serviceResponse = await userServices.createNewUser(name,email, password)
    res.status(200).json(serviceResponse)
   } catch (error) {
     res.status(400).json({error: error.message})
   }
}

const loginUser = async (req, res) => {
  const {email, password} = req.body;

  try {
      const serviceResponse = await userServices.validateLogin(email, password)
      res.status(200).json(serviceResponse)
  } catch (error) {
      res.status(400).json({error: error.message})
  }
}

module.exports = {
    postUser,
    loginUser
}