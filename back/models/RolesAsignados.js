const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/Conexion/connection');
// const User = require('./User');
// const Rol = require('./Roles');

const RolesAsignados = db.define('rolesasignados', {
    userNif: {
        type: DataTypes.STRING,
        primaryKey: true,
        // references: {
        //     model: User,
        //     key: 'nif'
        //   }
    },
    roleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        // references: {
        //     model: Rol,
        //     key: 'id'
        //   }
    },
},
{ 
    timestamps: false 
},
{
    tableName: 'rolesasignados'
});

// RolesAsignados.belongsTo(User, {foreignKey: 'userNif'});
// RolesAsignados.belongsTo(Rol, {foreignKey: 'roleId'});
module.exports = RolesAsignados;