const { Sequelize } = require('sequelize');
const Alumno = require('../../models/Alumno');
const User = require('../../models/User');
const CicloAlumno = require('../../models/CicloAlumno');
const Ciclo = require('../../models/Ciclo');
const {Op} = require('sequelize');
require('dotenv').config();
const concatenate = require('../../helpers/concatenate'); 

class ConexionSequilze {

    constructor() {
        this.db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect:'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
             },
          });
    }

    conectar = () => {
        this.db.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch((error) => {
            console.error('Unable to connect to the database: ', error);
        });
    }

    desconectar = () => {
        process.on('SIGINT', () => conn.close())
    }

    getAlumno = async(nif) => {
        let resultado = {};
        let ciclos = {};
        let idCiclos = [];
        let u = await User.findByPk(nif);
        let a = await Alumno.findByPk(nif);
        let c = await CicloAlumno.findAll({ 
            attributes: ['id_ciclos'],
            where: { nif_alumno: nif } });
        c.forEach(ciclo => idCiclos.push(ciclo.dataValues.id_ciclos));
        let ciclo = await this.getCiclosAlumno(idCiclos); 
        resultado = concatenate.jsonConcat(resultado, u.dataValues);
        resultado = concatenate.jsonConcat(resultado, a.dataValues);
        ciclo.forEach(cicl => ciclos[cicl.dataValues.sigla] = (cicl.dataValues));
        resultado['ciclos'] = ciclos;
        if (!resultado){
            throw error;
        }
        return resultado;
    }


    getCiclosAlumno = async(idCiclo) => {
        let ciclo = {};
        ciclo = await Ciclo.findAll({
                attributes: ['sigla','nombre','fecha'],
                where: {
                  id: {
                    [Op.in]: idCiclo
                  }
                }
            });
        return ciclo;
    }
}

module.exports = ConexionSequilze;
