const { sheets } = require("../../config/google");

const getSheetData = async ({name}) => {
  const spreadsheetId = process.env.SPREADSHEET_ID;

  // 1. Obtener nombres de hojas
  const meta = await sheets.spreadsheets.get({ spreadsheetId });

  const sheetNames = meta.data.sheets.map(
    (sheet) => sheet.properties.title
  );

  // 2. Traer todas en paralelo
  const promises = sheetNames.map(async (name) => {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${name}!A1:Z1000`,
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) return [];

    const headers = rows[0];

    return rows.slice(1).map((row) => {
      const obj = { HOJA: name }; // 👈 clave

      headers.forEach((header, i) => {
        obj[header.trim()] = row[i] || null;
      });

      return obj;
    });
  });

  const results = await Promise.all(promises);

  // 3. Unificar todo
  return results.flat();
};

module.exports = { getSheetData };