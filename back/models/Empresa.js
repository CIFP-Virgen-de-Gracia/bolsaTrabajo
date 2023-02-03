const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/Conexion/connection');
const EmpresasOfertas = require('./empresas-ofertas');

const Empresas = db.define('empresas', {
    nif: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    contacto: {
        type: DataTypes.STRING
    },
    cargo: {
        type: DataTypes.INTEGER
    },
    telefono: {
        type: DataTypes.STRING
    }
},
{ 
    timestamps: false,
    freezeTableName: true
},
{
    tableName: 'empresas'
});

Empresas.hasMany(EmpresasOfertas, {as: 'EmpresasOfertas', foreignKey: 'nif_empresa'});

module.exports = Empresas;
