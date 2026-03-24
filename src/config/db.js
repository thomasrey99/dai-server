const { Sequelize } = require("sequelize");
const injectModels = require("../utils/injectModels");

require('dotenv').config();
const { DATABASE_URL } = process.env;

//!Database instance
const database = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false
});

(async () => {
    try {
        await injectModels(database);
    } catch (error) {
        console.log("Error loading models", error);
    }
})();


module.exports = {
    database,
    ...database.models
};
