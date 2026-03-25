const convertToCSV = (data) => {
  if (!data || data.length === 0) return "";

  const headers = Object.keys(data[0]);

  const escapeValue = (value) => {
    if (value === null || value === undefined) return "";
    
    const stringValue = value.toString().replace(/"/g, '""');
    return `"${stringValue}"`;
  };

  const rows = data.map((row) =>
    headers.map((field) => escapeValue(row[field])).join(",")
  );

  return [headers.join(","), ...rows].join("\n");
};

module.exports = { convertToCSV };