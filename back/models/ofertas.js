const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/Conexion/connection');

const Ofertas = db.define('ofertas', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    lugar: {
        type: DataTypes.STRING
    },
    presencial: {
        type: DataTypes.INTEGER
    },
    jornada: {
        type: DataTypes.STRING
    },
    id_empresa: {
        type: DataTypes.BIGINT
    }
},
{ 
    timestamps: false,
    freezeTableName: true
},
{
    tableName: 'ofertas'
});

module.exports = Ofertas;