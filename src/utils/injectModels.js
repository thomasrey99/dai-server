const fs = require('fs');
const path = require('path');

//!that function inject all models into the database
const injectModels = async (database) => {
    const modelsPath = path.join(__dirname, "..", "models");
    fs.readdirSync(modelsPath).forEach((file) => {
        require(path.join(modelsPath, file))(database);
    });
};

module.exports = injectModels;