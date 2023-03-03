//Realizado por Khattari
//Estructura por herencia realizada por Khattari
const User = require('../../models/User');
const ConexionSequelize = require('./ConexionSequelize');
const Empresa = require('../../models/Empresa');

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
        resultado = await User.findAll({where: {nif: nif}, include: ['AlumnoUser'] });
        this.desconectar();
        return resultado;
    }
}

module.exports = ConexionAdmin