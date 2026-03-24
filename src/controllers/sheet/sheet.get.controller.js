const { sheets } = require("../../config/google");

const getSheetData = async () => {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "Ventas!A1:Z1000",
  });

  const rows = response.data.values;

  if (!rows || rows.length === 0) return [];

  const headers = rows[0];

  const data = rows.slice(1).map((row) => {
    const obj = {};
    headers.forEach((header, i) => {
      obj[header] = row[i] || null;
    });
    return obj;
  });

  return data;
};

module.exports = { getSheetData };