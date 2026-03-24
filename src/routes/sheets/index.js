const { Router } = require("express")
const getSheetsRouter=require("./sheets.get.routes")
const sheetsRouter = Router()

sheetsRouter.use("/", getSheetsRouter)

module.exports = sheetsRouter