const { sheets } = require("../../config/google");

const getSheetData = async () => {
  const spreadsheetId = process.env.SPREADSHEET_ID;

  try {
    // 1. Obtener metadata del spreadsheet
    const meta = await sheets.spreadsheets.get({ spreadsheetId });

    const sheetNames = meta.data.sheets.map(
      (sheet) => sheet.properties.title
    );

    // 2. Traer datos de todas las hojas
    const promises = sheetNames.map(async (name) => {
      try {
        // 👉 Manejo seguro del nombre de hoja
        const safeName = `'${name.replace(/'/g, "\\'")}'`;

        const response = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range: `${safeName}!A1:Z1000`,
        });

        const rows = response.data.values;

        if (!rows || rows.length === 0) return [];

        const headers = rows[0].map((h) => h.trim());

        return rows.slice(1).map((row) => {
          const obj = { HOJA: name };

          headers.forEach((header, i) => {
            obj[header] = row[i] ?? null;
          });

          return obj;
        });

      } catch (error) {
        console.error(`❌ Error en hoja: ${name}`);
        console.error(error.message);
        return []; // 👈 evita romper todo el proceso
      }
    });

    const results = await Promise.all(promises);

    // 3. Unificar todo
    return results.flat();

  } catch (error) {
    console.error("❌ Error general al obtener sheets");
    console.error(error.message);
    throw error;
  }
};

module.exports = { getSheetData };