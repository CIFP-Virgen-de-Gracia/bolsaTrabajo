const { Sequelize } = require('sequelize');
const Oferta = require('../../models/ofertas');
const EmpresasOfertas = require('../../models/empresas-ofertas');
const Empresa = require('../../models/Empresa');
require('dotenv').config();

class ConexionSequelize {

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

    //Para prueba con persona --------------------------------------------------------
    getListadoOfertas = async() => {
        let resultado = [];
        this.conectar();
        resultado = await Oferta.findAll();
        this.desconectar();
        return resultado;
    }

    getOferta = async(id) => {
        let resultado = [];
        this.conectar();
        resultado = await Oferta.findByPk(id);
        this.desconectar();
        if (!resultado) {
            throw error;
        }
        return resultado;
    }

    crearOferta = async(body) => {
        let resultado = 0;
        this.conectar();
        const nuevaOferta = new Oferta(body);
        await nuevaOferta.save();
        const dataAsigacion = {
            'id_oferta' : nuevaOferta.id,
            'nif_empresa': body.nif_empresa
        };
        const nuevaAsignacion = new EmpresasOfertas(dataAsigacion);
        await nuevaAsignacion.save();
        return resultado;
    }

    eliminarOferta = async(id) => {
        this.conectar();
        let resultado = await Oferta.findByPk(id);
        if (!resultado) {
            this.desconectar();
            throw error;
        }
        await resultado.destroy();
        return resultado;
    }

    getEmpresaAsignada = async(id) => {
        let resultado = [];
        this.conectar();
        resultado = await Oferta.findOne({where: { id: id }, include: ["EmpresasOfertas"] });
        this.desconectar();
        return resultado;
    }

    getDatosEmpresaAsignada = async(nif) => {
        let resultado = []
        this.conectar();
        resultado = await Empresa.findByPk(nif);
        this.desconectar();
        return resultado;
    }

    getOfertasEmpresa = async(nif) => {
        let resultado = []
        this.conectar();
        resultado = await Empresa.findOne({where: {nif: nif}, include: ["EmpresasOfertas"] });
        this.desconectar();
        return resultado;
    }

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

module.exports = ConexionSequelize;