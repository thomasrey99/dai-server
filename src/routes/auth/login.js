const { Router } = require("express");
const loginHandler = require("../../handlers/auth/login");

const router = Router();

router.post("/login", loginHandler);


module.exports = router;