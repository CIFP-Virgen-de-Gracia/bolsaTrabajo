const { Sequelize } = require('sequelize');
require('dotenv').config();

const db =  new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
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

module.exports =  db;