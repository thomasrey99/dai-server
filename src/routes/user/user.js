const {Router}=require('express');
const userGetRoutes=require("./user.get.routes");
const userPostRoutes=require("./user.post.routes");
const userRouter=Router();

userRouter.use("/", userGetRoutes)
userRouter.use("/", userPostRoutes)


module.exports=userRouter;