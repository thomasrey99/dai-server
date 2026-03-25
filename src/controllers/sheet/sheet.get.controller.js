const { sheets } = require("../../config/google");

const getSheetData = async () => {
  const spreadsheetId = process.env.SPREADSHEET_ID;

  const meta = await sheets.spreadsheets.get({ spreadsheetId });

  const sheetNames = meta.data.sheets.map(
    (sheet) => sheet.properties.title
  );

  const promises = sheetNames.map(async (name) => {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${name}!A1:Z1000`,
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) return [];

    const headers = rows[0];

    return rows.slice(1).map((row) => {
      const obj = { HOJA: name };

      headers.forEach((header, i) => {
        obj[header.trim()] = row[i] || null;
      });

      return obj;
    });
  });

  const results = await Promise.all(promises);

  return results.flat();
};

module.exports = { getSheetData };