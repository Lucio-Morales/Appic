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
    res.cookie("access_token", userToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 1000 * 60 * 60,
    });
    res.status(200).json({ user, userToken });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userProfile = async (req, res) => {
  const cookieToken = req.cookies.access_token;
  // console.log(cookieToken);
  try {
    const userProfileData = await userServices.validateUserToken(cookieToken);
    res.status(200).json(userProfileData);
  } catch (error) {
    console.log(`Error catch: ${error}`);
    res.status(400).json({ erorr: error.message });
  }
};

module.exports = {
  postUser,
  loginUser,
  userProfile,
};
