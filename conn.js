"use strict";

const { createConnection } = require("@sap/hana-client");
const cliente = createConnection();

const { HOST:host, PORT:port, USUARIO:uid, PASSWORD:pwd, DB:databaseName } = require('./config/db');

cliente.connect({ host, port, uid, pwd, databaseName });

module.exports = cliente;