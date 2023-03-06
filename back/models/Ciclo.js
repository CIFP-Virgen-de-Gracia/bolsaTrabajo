const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/Conexion/connection');
const CicloAlumno = require('./CicloAlumno');


const Ciclo = db.define('ciclos', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true      
    },
    sigla: {
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    fecha: {
        type: DataTypes.DATE,
        
/*         get() {
            return this.getDataValue('fecha').toLocaleString('es-ES');
        } */
        /* get() {
            const rawValue = this.getDataValue('fecha');
            return rawValue.toLocaleString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
          } */
    },
},
{ 
    timestamps: false 
},
{
    tableName: 'ciclos'
});


module.exports = Ciclo;