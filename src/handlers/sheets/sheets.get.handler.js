const { getSheetData } = require("../../controllers/sheet/sheet.get.controller");
const buildResponse = require("../../utils/responseBuilder");

const getSheetHandler = async (req, res) => {
  try {
    const data = await getSheetData();

    return res.status(200).json(
      data
    );
  } catch (error) {
    console.error(error);

    return res.status(500).json(
      []
    );
  }
};

module.exports = { getSheetHandler };