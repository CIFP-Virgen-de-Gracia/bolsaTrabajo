require('dotenv').config()

const Conexion = require('./controllers/Conexion/ConexionSequelize');
const Server = require('./models/server');
const server = new Server();

server.listen();

