const server = require('./src/config/app');
const { database } = require('./src/config/db');
const dotenv = require('dotenv');

dotenv.config();
const { PORT } = process.env;

//!Server instance
const startServer = async () => {
    try {
        await database.authenticate();
        await database.sync({ alter: true });
        const tryListening = (port) => {
            server.listen(port, () => {
                console.log(`Server listening on port ${port}`);
            }).on("error", (error) => {
                if (error.code === "EADDRINUSE" && port === 3000) {
                    console.warn(`Port ${port} is in use, trying port ${port + 1}...`);
                    tryListening(port + 1);
                } else {
                    console.error("Error starting the server:", error.message);
                }
            });
        };
        tryListening(PORT);
    } catch (error) {
        console.error("Error initializing the database:", error.message);
    }
};

//!Starting server
startServer();