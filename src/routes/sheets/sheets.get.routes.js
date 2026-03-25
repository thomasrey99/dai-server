const { Router } = require("express");
const { getSheetHandler, getSheetCSVHandler } = require("../../handlers/sheets/sheets.get.handler");
const apiKeyMiddleware=require("../../middlewares/apiKey.middleware")
const router = Router();

router.get("/data", apiKeyMiddleware, getSheetHandler);
router.get("/csv", apiKeyMiddleware, getSheetCSVHandler)

module.exports = router;