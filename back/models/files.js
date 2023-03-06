const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/Conexion/connection');
// const User = require('./User');
// const Rol = require('./Roles');

const Files = db.define('files', {
    userNif: {
        type: DataTypes.STRING,
        primaryKey: true,      
    },
    id: {
        type: DataTypes.INTEGER,
        primarykey: true,
    },
    file: {
        type: DataTypes.STRING,
        allowNull: true,        
}

}, {
    tableName: 'files'
});

module.exports = Files;