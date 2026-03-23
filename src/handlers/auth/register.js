const register = require("../../controllers/auth/register");
const buildResponse = require("../../utils/buildResponse");

const registerHandler = async (req, res) => {
  try {
    const user = await register(req.body);

    return res.status(201).json(
      buildResponse({
        status: 201,
        message: "Usuario creado correctamente",
        data: user,
      })
    );
  } catch (error) {
    return res.status(400).json(
      buildResponse({
        status: 400,
        error: true,
        message: error.message,
      })
    );
  }
};

module.exports = registerHandler;