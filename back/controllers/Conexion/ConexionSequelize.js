const { Sequelize } = require('sequelize');
const Persona = require('../../models/modeloPrueba');
require('dotenv').config();

class ConexionSequilze {

    constructor() {
        this.db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect:'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
             },
          });
    }

    conectar = () => {
        this.db.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch((error) => {
            console.error('Unable to connect to the database: ', error);
        });
    }

    desconectar = () => {
        process.on('SIGINT', () => conn.close())
    }

    getlistado = async() => {
        let resultado = [];
        this.conectar();
        resultado = await Persona.findAll();
        this.desconectar();
        return resultado;
    }
}

module.exports = ConexionSequilze;