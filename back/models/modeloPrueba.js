const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/Conexion/connection');

const Persona = db.define('persona', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    rol: {
        type: DataTypes.STRING
    }
},
{ 
    timestamps: false,
    freezeTableName: true
},
{
    tableName: 'persona'
});

module.exports = Persona;