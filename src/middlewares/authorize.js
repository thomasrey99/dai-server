const buildResponse = require("../utils/responseBuilder");

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json(
        buildResponse({
          status: 403,
          error: true,
          message: "Sin permisos",
        })
      );
    }
    next();
  };
};

module.exports = authorize;