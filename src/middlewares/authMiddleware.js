const jwt = require("jsonwebtoken");
const buildResponse = require("../utils/responseBuilder");

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) throw new Error("Token requerido");

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json(
      buildResponse({
        status: 401,
        error: true,
        message: "No autorizado",
      })
    );
  }
};

module.exports = authMiddleware;