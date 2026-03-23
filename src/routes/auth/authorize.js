const { Router } = require("express");
const authMiddleware = require("../../middlewares/authMiddleware");
const authorize = require("../../middlewares/authorize");


const router=Router()

router.get("/admin", authMiddleware, authorize("admin"), (req, res) => {
  return res.json(
    buildResponse({
      message: "Admin zone",
    })
  );
});

module.exports = router;