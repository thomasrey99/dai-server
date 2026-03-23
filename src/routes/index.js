const {Roter}=require("express");
const userRouter = require("./user/user");
const mainRouter=Roter()

mainRouter.use("/user", userRouter )