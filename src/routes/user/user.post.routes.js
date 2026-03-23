const { Router } = require("express");
const registerHandler = require("../../handlers/auth/register");
const loginHandler = require("../../handlers/auth/login");

const router = Router();

router.post("/register", registerHandler);
router.post("/login", loginHandler);


module.exports = router;