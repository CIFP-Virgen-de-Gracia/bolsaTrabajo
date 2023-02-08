const Empresa = require('../../models/Empresa');
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