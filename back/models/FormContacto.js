const { DataTypes }= require('sequelize');
const db = require('../controllers/Conexion/connection');

const FormContacto = db.define('form_contacto', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    nif: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    observaciones: {
        type: DataTypes.STRING
    }
},
{ 
    timestamps: false,
    freezeTableName: true
},
{
    tableName: 'form_contacto'
});

//Empresas.hasMany(EmpresasOfertas, {as: 'EmpresasOfertas', foreignKey: 'nif_empresa'});

module.exports = FormContacto;
