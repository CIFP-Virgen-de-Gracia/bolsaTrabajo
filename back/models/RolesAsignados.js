const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/Conexion/connection');
// const User = require('./User');
// const Rol = require('./Roles');

const RolesAsignados = db.define('rolesasignados', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true      //La establecemos como PK. En lugar de id por defecto.
    },
    DNIRol: {
        type: DataTypes.STRING,
        // references: {
        //     model: User,
        //     key: 'DNI'
        //   }
    },
    idRol: {
        type: DataTypes.INTEGER,
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


// RolesAsignados.belongsTo(Rol);
// RolesAsignados.belongsTo(User);

// RolesAsignados.belongsToMany(Rol, {as: 'Rol', foreignKey: 'id'});

// RolesAsignados.hasMany(Rol, {as: 'RolA', foreignKey: 'idRol'});
// RolesAsignados.hasMany(User, {as: 'UserA', foreignKey: 'DNIRol'});


module.exports = RolesAsignados;