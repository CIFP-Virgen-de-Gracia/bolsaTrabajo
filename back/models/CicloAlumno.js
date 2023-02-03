const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/Conexion/connection');
const Alumno = require('./Alumno');
const Ciclo = require('./Ciclo');


const CicloAlumno = db.define('alumno_ciclos', {
    nif_alumno: {
        type: DataTypes.STRING,
            primaryKey: true,
            references: {
                model: Alumno,
                key: 'nif'
            }
    },
    id_ciclos: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        references: {
            model: Ciclo,
            key: 'id'
        }
    },
},
{ 
    timestamps: false 
},
{
    tableName: 'alumno_ciclos'
});

//CicloAlumno.belongsTo(Ciclo);

module.exports = CicloAlumno;