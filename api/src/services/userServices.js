const { User } = require("../database");

const createUser = async (name, email, password) => {
  const newUser = await User.create({ name, email, password });
  if (newUser) {
    return { msg: "User creado con exito", newUser };
  } else {
    throw new Error("No se pudo crear el usuario");
  }
};

const login = async (email, password) => {
  const user = await User.findOne({
    where: { email: email, password: password },
  });

  if (!user) {
    return { msg: "No existe el usuario." };
  } else {
    return { userId: user.id, name: user.name };
  }
};

module.exports = {
  createUser,
  login,
};
