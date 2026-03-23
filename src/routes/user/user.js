const {Router}=require('express');
const userGetRoutes=require("./user/user.get.routes");
const userPostRoutes=require("./user/user.post.routes");
const userRouter=Router();

userRouter.use("/", userGetRoutes)
userRouter.use("/", userPostRoutes)


module.exports=userRouter;