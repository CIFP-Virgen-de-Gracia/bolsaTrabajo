//Realizado por Khattari
const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../controllers/Conexion/connection');

const EmpresasOfertas = db.define('empresasofertas', {
    ideo: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    id_oferta: {
        type: DataTypes.BIGINT
    },
    nif_empresa: {
        type: DataTypes.STRING
    }
},
{ 
    timestamps: false,
    freezeTableName: true
},
{
    tableName: 'empresasofertas'
});

module.exports = EmpresasOfertas;