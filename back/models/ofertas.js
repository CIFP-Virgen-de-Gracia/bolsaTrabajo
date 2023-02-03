const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/Conexion/connection');
const EmpresasOfertas = require('./empresas-ofertas');

const Ofertas = db.define('ofertas', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
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
    }
},
{ 
    timestamps: false,
    freezeTableName: true
},
{
    tableName: 'ofertas'
});

Ofertas.hasMany(EmpresasOfertas, {as: 'EmpresasOfertas', foreignKey: 'id_oferta'});

module.exports = Ofertas;