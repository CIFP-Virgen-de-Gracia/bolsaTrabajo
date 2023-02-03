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
    await resultado.destroy();
    this.desconectar();
    return resultado;
  };

  //----------------------------------------
  getRoles = async () => {
    let resultado = [];
    this.conectar();
    //console.log('Accediendo a los datos...')
    resultado = await Roles.findAll();
    this.desconectar();
    return resultado;
  };

  getRolesAsignados = async () => {
    let resultado = [];
    this.conectar();
    //console.log('Accediendo a los datos...')
    resultado = await RolAsignado.findAll();
    this.desconectar();
    return resultado;
  };

  getRolesAsignadosNif = async (nf) => {
    let resultado = [];
    this.conectar();
    resultado = await User.findOne({
      where: { nif: nf },
      include: ["RolesAsignados"],
    });
    this.desconectar();
    return resultado;
  };
  
  getUsuarioRegistrado = async (email, password) => {
    let Npassword = bycript.hashSync(password, 10);
    let resultado = [];
    this.conectar();
    console.log(email);
    resultado = await User.findOne({ where: { email: email } });
    // console.log(resultado);
    if (!resultado) {
      this.desconectar();
      throw error;
    }
    const passCorrecto = await bycript.compare(password, Npassword);
    console.log(passCorrecto);
    if (!passCorrecto) {
      this.desconectar();
      throw error;
    }
    this.conectar();
    // console.log(resultado.dataValues)funciona!!!!;
    return resultado;
  };
  AsignarRol = async (body) => {
    let resultado = 0;
    this.conectar();
    const rolNuevo = new RolAsignado(body); 
    await rolNuevo.save();
    resultado = await rolNuevo.save();
    this.desconectar();
    return resultado;
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