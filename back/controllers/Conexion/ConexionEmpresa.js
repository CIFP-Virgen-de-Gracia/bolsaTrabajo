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
  
    getEmpresa = async(nif) => {
        let resultado = [];
        this.conectar();
        resultado = await Empresa.findByPk(nif);
        this.desconectar();
        if (!resultado){
            throw error;
        }
        return resultado;
    }

    registrarEmpresa = async(body) => {
        let resultado = 0;
        this.conectar();
        const empresaNueva = new Empresa(body);
        await empresaNueva.save();
        this.desconectar();
        return resultado;
    }

    modificarEmpresa = async(nif, body) => {
        this.conectar();
        let resultado = await Empresa.findByPk(nif);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.update(body);
        this.desconectar();
        return resultado;
    }

    borrarEmpresa = async(nif) => {
        this.conectar();
        let resultado = await Empresa.findByPk(nif);
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