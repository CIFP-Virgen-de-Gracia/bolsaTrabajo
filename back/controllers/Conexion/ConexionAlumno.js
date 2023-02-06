const { Sequelize } = require("sequelize");
const concatenate = require('../../helpers/concatenate');
const ConexionSequelize = require('./ConexionSequelize');
const User = require("../../models/User");
const Alumno = require('../../models/Alumno');
const CicloAlumno = require('../../models/CicloAlumno');
const Ciclo = require('../../models/Ciclo');
const {Op} = require('sequelize');


class ConexionAlumno extends ConexionSequelize {

    constructor() {
        super();
      };

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
        //ciclo.forEach(cicl => new Date (ciclos[cicl.dataValues.sigla].fecha).toLocaleDateString('es'));
        resultado['ciclos'] = ciclos;
        if (!resultado){
            throw error;
        }
        return resultado;
    }

    getCiclosAlumno = async(idCiclo) => {
    let ciclo = {};
    ciclo = await Ciclo.findAll({
            attributes: ['sigla','nombre',
            [
                Sequelize.fn
                (
                'DATE_FORMAT', 
                Sequelize.col('fecha'), 
                '%d %M %Y'
                ),
                'fecha',
            ]],
            where: {
                id: {
                [Op.in]: idCiclo
                },
            },
        });
    return ciclo;
    }

}

module.exports = ConexionAlumno;