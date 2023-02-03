const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/Conexion/connection');
const Alumno = require('./Alumno');


const User = db.define('users', {
    nif: {
        type: DataTypes.STRING,
        primaryKey: true      
    },
    nick: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.INTEGER
    }
},
{ 
    timestamps: false 
},
{
    tableName: 'users'
});

//User.belongsTo(Alumno);
/* User.hasOne(Alumno, {as: 'Alumno', foreignKey: 'nif'}); */

module.exports = User;