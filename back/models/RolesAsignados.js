//descripción: roles asignados, tabla intermedia entre roles y usuarios
const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/Conexion/connection');
// const User = require('./User');
// const Rol = require('./Roles');

const RolesAsignados = db.define('rolesasignados', {
    userNif: {
        type: DataTypes.STRING,
        primaryKey: true,
        
    },
    roleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        defaultValue: 2,
    },
},
{ 
    timestamps: false 
},
{
    tableName: 'rolesasignados'
});

module.exports = RolesAsignados;