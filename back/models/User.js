const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../controllers/Conexion/connection');
const RolesAsignados = require('./RolesAsignados');
const Roles = require('./Roles');
const Avatar = require('./Files');
const Empresa = require('./Empresa');
const Alumno = require('./Alumno');

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
    telefono: {
        type: DataTypes.STRING,
        allowNull: true,
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
            notEmpty: false,
            isInt: true,
            min: 1,
            max: 3
        }

    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
Avatar.belongsTo(User, { as: 'User', foreignKey: 'userNif' });

//Parte realizada por Khattari
User.hasMany(Empresa, {as: 'EmpresaUser', foreignKey: 'nif'});
User.hasMany(Alumno, {as: 'AlumnoUser', foreignKey: 'nif'});

module.exports = User;
