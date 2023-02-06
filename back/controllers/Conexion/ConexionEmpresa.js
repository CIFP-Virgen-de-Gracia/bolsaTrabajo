const Empresa = require('../../models/Empresa');
const CicloAlumno = require('../../models/CicloAlumno');
const Ciclo = require('../../models/Ciclo');
const Alumno = require('../../models/Alumno');
const User = require("../../models/User");
const ConexionSequelize = require('./ConexionSequelize');

class ConexionEmpresa extends ConexionSequelize {
  
  constructor() {
    super();
  };

  //Métodos CRUD Empresas -------------------------------------------------------------
  getEmpresaListado = async() => {
    let resultado = [];
    this.conectar();
    resultado = await Empresa.findAll();
    this.desconectar();
    return resultado;
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
  
    getEmpresa = async(id) => {
        let resultado = [];
        this.conectar();
        resultado = await Empresa.findByPk(id);
        this.desconectar();
        if (!resultado){
            throw error;
        }
        return resultado;
    }

    registrarEmpresa = async(body) => {
        let resultado = 0;
        this.conectar();
        const empresaNueva = new Empresa(body); //Con esto añade los timeStamps.
        await empresaNueva.save();
        this.desconectar();
        return resultado;
    }

    modificarEmpresa = async(id, body) => {
        this.conectar();
        let resultado = await Empresa.findByPk(id);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.update(body);
        this.desconectar();
        return resultado;
    }

    borrarEmpresa = async(id) => {
        this.conectar();
        let resultado = await Empresa.findByPk(id);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.destroy();
        this.desconectar();
        return resultado;
    }

}

module.exports = ConexionEmpresa;