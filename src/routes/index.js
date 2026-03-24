const {Router}=require('express');
const authRouter=require("./auth/index");
const sheetsRouter=require("./sheets/index")
const mainRouter=Router()

mainRouter.use("/auth", authRouter )
mainRouter.use("/sheet", sheetsRouter)
module.exports=mainRouter