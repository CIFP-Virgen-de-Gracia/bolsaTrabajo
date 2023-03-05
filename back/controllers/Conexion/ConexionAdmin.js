//Realizado por Khattari
//Estructura por herencia realizada por Khattari
const User = require('../../models/User');
const ConexionSequelize = require('./ConexionSequelize');
const Empresa = require('../../models/Empresa');
const Alumno = require('../../models/Alumno');

class ConexionAdmin extends ConexionSequelize {

    constructor() {
        super()
    }

    getListadoUsers = async() => {
        let resultado = [];
        this.conectar();
        resultado = await User.findAll();
        this.desconectar();
        return resultado;
    }

    getUser = async(nif) => {
        let resultado = [];
        this.conectar();
        resultado = await User.findByPk(nif);
        this.desconectar();
        return resultado;
    }

    //CRUD Empresas
    getEmpresas = async() => {
        let resultado = [];
        this.conectar();
        resultado = await User.findAll({where: {rol: 3}, include: ['EmpresaUser']});
        this.desconectar();
        return resultado;
    }

    getEmpresa = async(nif) => {
        let resultado = [];
        this.conectar();
        resultado = await User.findAll({where: {nif: nif}, include: ['EmpresaUser'] });
        this.desconectar();
        return resultado;
    }

    crearEmpresa = async(body) => {
        let resultado = 0;
        this.conectar();
        const nuevoUser = new User(body);
        const nuevaEmpresa = new Empresa(body);
        await nuevoUser.save();
        await nuevaEmpresa.save();
        return resultado;
    }

    modificarEmpresa = async(nif, body) => {
        this.conectar();
        let resultado = await User.findByPk(nif);
        if (!resultado) {
          this.desconectar();
          throw error;
        }
        await resultado.update(body);
        this.desconectar();
        return ;
    }

    eliminarEmpresa = async(nif) => {
        this.conectar();
        let resultado = await User.findByPk(nif);
        if (!resultado) {
            this.desconectar();
            throw error;
        }
        await resultado.destroy();
        return resultado;
    }

    //CRUD Alumnos
    getAlumnos = async() => {
        let resultado = [];
        this.conectar();
        resultado = await User.findAll({where: {rol: 2}, include: ['AlumnoUser']});
        this.desconectar();
        return resultado;
    }

    getAlumno = async(nif) => {
        let resultado = [];
        this.conectar();
        resultado = await User.findOne({where: {nif: nif}, include: ['AlumnoUser'] });
        this.desconectar();
        return resultado;
    }

    crearAlumno = async(body) => {
        let resultado = 0;
        this.conectar();
        const nuevoUser = new User(body);
        const nuevoAlumno = new Alumno(body);
        await nuevoUser.save();
        await nuevoAlumno.save();
        return resultado;
    }

    modificarAlumno = async(nif, body) => {
        this.conectar();
        let resultado = await User.findByPk(nif);
        if (!resultado) {
          this.desconectar();
          throw error;
        }
        await resultado.update(body);
        this.desconectar();

        this.conectar();
        resultado = await Alumno.findByPk(nif);
        if (!resultado) {
          this.desconectar();
          throw error;
        }
        await resultado.update(body);
        this.desconectar();

        return ;
    }

    //Funciones generales
    eliminarAlumno = async(nif) => {
        this.conectar();
        let resultado = await User.findByPk(nif);
        if (!resultado) {
            this.desconectar();
            throw error;
        }
        await resultado.destroy();
        return resultado;
    }

    activarUser = async(nif) =>  {
        this.conectar();
        let resultado = await User.findByPk(nif);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.update({status: '1'});
        this.desconectar();
        return;
    }

    getDatosEmpresa = async(nif) => {
        this.conectar();
        let resultado = await Empresa.findByPk(nif);
        this.desconectar();
        return resultado;
    }

    getDatosAlumno = async(nif) => {
        this.conectar();
        let resultado = await Alumno.findByPk(nif);
        this.desconectar();
        return resultado;
    }

    eliminarUser = async(nif) => {
        this.conectar();
        let resultado = await User.findByPk(nif);
        if (!resultado) {
            this.desconectar();
            throw error;
        }
        await resultado.destroy();
        return resultado;
    }

    //CRUD Admin
    getAdmins = async() => {
        let resultado = [];
        this.conectar();
        resultado = await User.findAll({where: {rol: 1}});
        this.desconectar();
        return resultado;
    }

    crearAdmin = async(body) => {
        let resultado = 0;
        this.conectar();
        const nuevoUser = new User(body);
        await nuevoUser.save();
        return resultado;
    }

    modificarAdmin = async(nif, body) => {
        this.conectar();
        let resultado = await User.findByPk(nif);
        if (!resultado) {
          this.desconectar();
          throw error;
        }
        await resultado.update(body);
        this.desconectar();
        return ;
    }
}

module.exports = ConexionAdmin