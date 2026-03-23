const login = require("../../controllers/auth/login");
const buildResponse = require("../../utils/responseBuilder");

const loginHandler = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    const token = await login(identifier, password);

    return res.status(200).json(
      buildResponse({
        status: 200,
        message: "Login exitoso",
        data: { token },
      })
    );
  } catch (error) {
    return res.status(401).json(
      buildResponse({
        status: 401,
        error: true,
        message: error.message,
      })
    );
  }
};

module.exports = loginHandler;