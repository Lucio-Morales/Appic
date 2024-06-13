const { userServices } = require("../services");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET_JWT_KEY } = process.env;

const postUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const serviceResponse = await userServices.createNewUser(
      name,
      email,
      password
    );
    res.status(200).json(serviceResponse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userServices.validateLogin(email, password);

    const userToken = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      SECRET_JWT_KEY,
      {
        expiresIn: "1h",
      }
    );
    // console.log("userToken:", userToken);
    res.cookie("access_token", userToken, {
      httpOnly: true,
      sameSite: "strict", // Cambia a 'none' si necesario
      maxAge: 1000 * 60 * 60, // 1 hora
    });

    res.status(200).json({ user, userToken });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userProfile = async (req, res) => {
  try {
    const serviceResponse = await userServices.getUserProfile();
    res.status(200).json(serviceResponse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postUser,
  loginUser,
  userProfile,
};
