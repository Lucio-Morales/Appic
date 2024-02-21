const { userServices } = require("../services");

const postUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const serviceResponse = await userServices.createUser(
      name,
      email,
      password
    );
    res.status(200).json(serviceResponse);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};
const loginUser = (req, res) => {};
const getUsers = (req, res) => {};
const getUser = (req, res) => {};

module.exports = {
  postUser,
  loginUser,
  getUsers,
  getUser,
};
