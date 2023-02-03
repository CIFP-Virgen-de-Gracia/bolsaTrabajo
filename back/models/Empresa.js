const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/Conexion/connection');
//const RolesAsignados = require('./RolesAsignados');
//const Roles = require('./Roles');

const Empresa = db.define('empresa', {
    nif: {
        type: DataTypes.STRING,
        primaryKey: true      //La establecemos como PK. En lugar de id por defecto.
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
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
},
{ 
    timestamps: false 
},
{
    tableName: 'empresas'
});


//Roles.hasMany(RolesAsignados, {as: 'RolesAsignados', foreignKey: 'idRol'});

// Roles.belongsToMany(Persona, { through: RolesAsignados, foreignKey: 'idRol' });


module.exports =  Empresa;