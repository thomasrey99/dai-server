const { getSheetData } = require("../../controllers/sheet/sheet.get.controller");
const buildResponse = require("../../utils/responseBuilder");

const getSheetHandler = async (req, res) => {
  try {
    const data = await getSheetData();

    return res.status(200).json(
      buildResponse({
        status: 200,
        error: false,
        message: "Datos obtenidos correctamente",
        data,
      })
    );
  } catch (error) {
    console.error(error);

    return res.status(500).json(
      buildResponse({
        status: 500,
        error: true,
        message: "Error al obtener datos del sheet",
        data: null,
      })
    );
  }
};

module.exports = { getSheetHandler };