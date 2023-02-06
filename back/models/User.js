const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/Conexion/connection');
const RolesAsignados = require('./RolesAsignados');
const Roles = require('./Roles');


const User= db.define('users', {
    nif: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull:false,
        unique: true,
        validate: {
            notEmpty: true,
            is: /^[0-9]{8}[A-Z]$/i
        }
    },
    nick: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
        validate: {
            notEmpty: true,
        }
    },
    
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty: true,
            len: [4, 20]
        }

    },
    validatedAt: {
        type: DataTypes.DATETIME,
        allowNull:true,
        validate: {
            notEmpty: false
    }
},
 avatar: {
    type: DataTypes.STRING,
    allowNull:true,
    validate: {
        notEmpty: true,
    }
},

rol: {
    type: DataTypes.INTEGER,
    allowNull:false,
    validate: {
        notEmpty: true,
        isInt: true,
        min: 1,
        max: 3
    }

} 
},
  
{ 
    timestamps: false, 
    freezeTableName: true
},
{
    tableName: 'users'
});


User.hasOne(RolesAsignados, {as: 'RolesAsignados', foreignKey: 'userNif'});
Roles.belongsTo(RolesAsignados, {as: 'RolesAsignados', foreignKey: 'rolId'});

module.exports = User;
