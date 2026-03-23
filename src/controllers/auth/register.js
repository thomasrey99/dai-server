const { User } = require("../../config/db");

const register = async (data) => {
  const { email, dni } = data;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) throw new Error("Email ya registrado");

  const existingDni = await User.findOne({ where: { dni } });
  if (existingDni) throw new Error("DNI ya registrado");

  const user = await User.create(data);

  return user;
};

module.exports = register;