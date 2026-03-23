const { Router } = require("express");
const registerHandler = require("../../handlers/auth/register");


const router = Router();

router.post("/register", registerHandler);


module.exports = router;