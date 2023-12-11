const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/Conexion/connection');
const CicloAlumno = require('./CicloAlumno');
const User = require('./User');


const Alumno = db.define('alumnos', {
    nif: {
        type: DataTypes.STRING,
            primaryKey: true,
            references: {
                model: User,
                key: 'nif'
            }    
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido1: {
        type: DataTypes.STRING
    },
    apellido2: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
},
{ 
    timestamps: false 
},
{
    tableName: 'alumnos'
});

// Alumno.hasMany(CicloAlumno, {as: 'CicloAlumno', foreignKey: 'nif_alumno'});

module.exports = Alumno;