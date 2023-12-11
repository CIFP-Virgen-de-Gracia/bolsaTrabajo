const User = require('../../models/User');
const ConexionSequelize = require('./ConexionSequelize');
const Empresa = require('../../models/Empresa');
const Alumno = require('../../models/Alumno');
const Ciclo = require('../../models/Ciclo');

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

    getUserMail = async(email) => {
        let datosUser = [];
        let resultado = [];
        this.conectar();
        datosUser = await User.findOne({where: {email: email}});
        switch (datosUser.rol) {
            case 3:
                let datosEmpresa = [];
                datosEmpresa = await Empresa.findByPk(datosUser.nif);
                resultado = [datosUser, datosEmpresa];
                break;
            case 1:
                resultado = [datosUser];
                break;
            case 2:
                let datosAlumno = [];
                let datosCiclo = [];
                datosAlumno = await Alumno.findByPk(datosUser.nif);
                datosCiclo = await Ciclo.findOne()
                resultado = [datosUser, datosAlumno];
                break;
            default:
                break;
        }
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

        this.conectar();
        resultado = await Empresa.findByPk(nif);
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

        resultado = await Alumno.findByPk(nif);
        console.log(resultado)
        if (!resultado) {
            this.desconectar();
            throw error;
        }
        await resultado.destroy();
        return resultado;
    }

    eliminarEmpresa = async(nif) => {
        this.conectar();
        let resultado = await User.findByPk(nif);
        if (!resultado) {
            this.desconectar();
            throw error;
        }
        await resultado.destroy();

        resultado = await Empresa.findByPk(nif);
        console.log(resultado)
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

    modificarImage = async(nif, image) => {
        this.conectar();
        let resultado = await Alumno.findByPk(nif);
        if (!resultado) {
          this.desconectar();
          throw error;
        }
        await resultado.update({image: image});
        this.desconectar();

        return ;
    }
}

module.exports = ConexionAdmin