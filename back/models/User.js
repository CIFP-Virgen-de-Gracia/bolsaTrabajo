const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/Conexion/connection');
const RolesAsignados = require('./RolesAsignados');
const Roles = require('./Roles');


const User= db.define('users', {
    dni: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull:false,
        unique: true,
        validate: {
            notEmpty: true,
            is: /^[0-9]{8}[A-Z]$/i
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
    status: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            notEmpty: true,
            isInt: true,
            min: 0,
            max: 1
    }
},
    rol:{
        type: DataTypes.BIGINT,
        allowNull:false,
        validate: {
            notEmpty: true,
            isInt: true,
            min: 1,
            max: 3
        }
    },

},
{ 
    timestamps: false, 
    freezeTableName: true
},
{
    tableName: 'users'
});


User.hasMany(RolesAsignados, {as: 'RolesAsignados', foreignKey: 'userDni'});

module.exports = User;
