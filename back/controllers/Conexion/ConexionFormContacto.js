const FormContacto = require('../../models/FormContacto');
const ConexionSequelize = require('./ConexionSequelize');

class ConexionFormContacto extends ConexionSequelize {
  
    constructor() {
        super();
    };

  //Métodos CRUD Formulario de contacto -------------------------------------------------------------
    getFormContactoListado = async() => {
        let resultado = [];
        this.conectar();
        resultado = await FormContacto.findAll();
        this.desconectar();
        return resultado;
    }
  
    getFormContacto = async(id) => {
        let resultado = [];
        this.conectar();
        resultado = await FormContacto.findByPk(id);
        this.desconectar();
        if (!resultado){
            throw error;
        }
        return resultado;
    }

    registrarFormContacto = async(body) => {
        let resultado = 0;
        this.conectar();
        const formContactoNuevo = new FormContacto(body);
        await formContactoNuevo.save();
        this.desconectar();
        return resultado;
    }

    modificarFormContacto = async(id, body) => {
        this.conectar();
        let resultado = await FormContacto.findByPk(id);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.update(body);
        this.desconectar();
        return resultado;
    }

    borrarFormContacto = async(id) => {
        this.conectar();
        let resultado = await FormContacto.findByPk(id);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.destroy();
        this.desconectar();
        return resultado;
    }

}

module.exports = ConexionFormContacto;