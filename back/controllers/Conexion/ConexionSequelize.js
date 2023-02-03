const { Sequelize } = require("sequelize");
const User = require("../../models/User");
const RolAsignado = require("../../models/RolesAsignados");
const Roles = require("../../models/Roles");
const bycript = require("bcryptjs");
const RolesAsignados = require("../../models/RolesAsignados");
require("dotenv").config();

const Oferta = require('../../models/ofertas');
const EmpresasOfertas = require('../../models/empresas-ofertas');
const Empresa = require('../../models/Empresa');


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
    this.db
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((error) => {
        console.error("Unable to connect to the database: ", error);
      });
  };

  desconectar = () => {
    process.on("SIGINT", () => conn.close());
  };

  getlistado = async () => {
    let resultado = [];
    this.conectar();
    resultado = await User.findAll();
    this.desconectar();
    return resultado;
  };
  getUsuario = async (email) => {
    let resultado = [];
    this.conectar();
    resultado = await User.findOne({ where: { email: email } });
    this.desconectar();
    if (!resultado) {
      throw error;
    }
    return resultado;
  };

  //TODO:hecho...falta frontend
  registrarUsuario = async (body) => {
    let resultado = 0;
    this.conectar();
    const usuarioNuevo = new User(body); //Con esto añade los timeStamps.
    await usuarioNuevo.save();
    resultado = await usuarioNuevo.save();
    this.AsignarRol({      //Asigna el rol de usuario por defecto o el que se le pase por el body
      userNif: body.nif,
      roleId: body.rol,
    });
    this.desconectar();
    return resultado;
  };

  modificarUsuario = async (nif, body) => {
    this.conectar();
    let resultado = await User.findByPk(nif);
    if (!resultado) {
      this.desconectar();
      throw error;
    }
    await resultado.update(body);
    this.desconectar();
    return resultado;
  };

  borrarUsuario = async (nif) => {
    this.conectar();
    let resultado = await User.findByPk(nif);
    if (!resultado) {
      this.desconectar();
      throw error;
    }

    getlistado = async() => {
        let resultado = [];
        this.conectar();
        resultado = await Persona.findAll();
        this.desconectar();
        return resultado;
    }
}

module.exports = ConexionSequelize;