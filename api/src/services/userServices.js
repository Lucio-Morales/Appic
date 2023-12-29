const { User } = require("../database");

const createUser = async (name, email, password) => {
  const newUser = await User.create({ name, email, password });
  if (newUser) return { msg: "User creado con exito", newUser };
};

const login = () => {};

module.exports = {
  createUser,
  login,
};
