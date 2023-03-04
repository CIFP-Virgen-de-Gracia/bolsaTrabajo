const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../controllers/Conexion/connection');
const RolesAsignados = require('./RolesAsignados');
const Roles = require('./Roles');


const User = db.define('users', {
    nif: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            is: /^[0-9]{8}[A-Z]$/i
        }
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
        }
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [4, 20]
        }

    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true,
            isInt: true,
            min: 0,
            max: 1
        }
    },
    rol: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true,
            isInt: true,
            min: 1,
            max: 3
        }

    },
    telefono: {//----->>>> Inés, añado teléfono, que lo necesito para formularioEmpresa y no lo tenias añadido.
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
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


User.hasOne(RolesAsignados, { as: 'RolesAsignados', foreignKey: 'userNif' });

module.exports = User;
