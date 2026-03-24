const { Router } = require("express");
const { getSheetHandler } = require("../../handlers/sheets/sheets.get.handler");
const apiKeyMiddleware=require("../../middlewares/apiKey.middleware")
const router = Router();

router.get("/data", apiKeyMiddleware, getSheetHandler);

module.exports = router;