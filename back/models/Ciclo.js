const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/Conexion/connection');
const CicloAlumno = require('./CicloAlumno');


const Ciclo = db.define('ciclos', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true      
    },
    sigla: {
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    fecha: {
        type: DataTypes.DATE,
    },
},
{ 
    timestamps: false 
},
{
    tableName: 'ciclos'
});


module.exports = Ciclo;