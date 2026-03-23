const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("../routes");


const server = express();

//!middlewares configuration
server.use(
    cors({
        origin: "*",
        credentials: true,
        allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
        methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    })
);

server.use(morgan("dev"));
server.use(express.json());

server.use(mainRouter)

module.exports = server;