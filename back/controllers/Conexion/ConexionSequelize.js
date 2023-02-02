const { Sequelize } = require('sequelize');
const Oferta = require('../../models/ofertas');
const EmpresasOfertas = require('../../models/empresas-ofertas');
const Empresa = require('../../models/empresa');
require('dotenv').config();

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

}

module.exports = ConexionSequilze;