const { getSheetData } = require("../../controllers/sheet/sheet.get.controller");
const { convertToCSV } = require("../../utils/csvConvert");


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

const getSheetCSVHandler = async (req, res) => {
  try {
    const data = await getSheetData();

    const csv = convertToCSV(data);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=data.csv");

    return res.status(200).send(csv);

  } catch (error) {
    console.error(error);
    return res.status(500).send("Error generating CSV");
  }
};

module.exports = { getSheetHandler, getSheetCSVHandler };