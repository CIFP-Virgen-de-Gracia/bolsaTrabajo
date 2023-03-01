const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../controllers/Conexion/connection');

const Avatar = db.define('avatars', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isInt: true
        }
    },
    avatar: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
            notEmpty: true,
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            notEmpty: true,
            isDate: true
        }
    },
    updatedAt: {    
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            notEmpty: true,
            isDate: true
        }
    }
});
User.hasOne(Avatar, {foreignKey: 'id'});
Avatar.belongsTo(User, {foreignKey: 'id'});
module.exports = Avatar;
