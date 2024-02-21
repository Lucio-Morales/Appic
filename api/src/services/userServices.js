const { User } = require("../database");

const createUser = async (name, email, password) => {
  if (!name || !email || !password) {
    return { msg: "Datos de registro incompletos." };
  }

  const existingUser = await User.findOne({
    where: { name: name, email: email },
  });
  if (existingUser) {
    return { msg: `El usuario ${name} ya ha sido registrado.` };
  }

  const newUser = await User.create({ name, email, password });
  if (newUser) {
    return { msg: `El usuario ${name} ha sido creado con exito.` };
  }
};

const getAllUsers = () => {};

const getOneUser = () => {};

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
};
