const { userServices } = require("../services");

const createUserDemo = async (req, res) => {
  const { email } = req.body;
  try {
    const response = await userServices.createUserInDB(email);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const response = await userServices.createUser(name, email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await userServices.login(email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUsers = (req, res) => {
  try {
    const response = null;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSpecificUser = (req, res) => {
  const { userId } = req.params;
  try {
    const response = null;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUserDemo,
  userLogin,
  postUser,
  getAllUsers,
  getSpecificUser,
};
