const {Router}=require('express');
const authRouter=require("./auth/index");
const mainRouter=Router()

mainRouter.use("/auth", authRouter )

module.exports=mainRouter