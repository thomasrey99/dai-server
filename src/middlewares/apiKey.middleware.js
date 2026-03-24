const buildResponse = require("../utils/responseBuilder");

const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(403).json(
      buildResponse({
        status: 403,
        error: true,
        message: "Unauthorized",
        data: null,
      })
    );
  }

  next();
};

module.exports = apiKeyMiddleware;