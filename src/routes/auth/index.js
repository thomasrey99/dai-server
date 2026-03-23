const {Router}=require('express');
const loginRouter=require("./login");
const registerRouter=require("./register");
const authorizeRouter=require("./authorize");

const authRouter=Router();

authRouter.use("/", loginRouter)
authRouter.use("/", registerRouter)
authRouter.use("/", authorizeRouter)


module.exports=authRouter;