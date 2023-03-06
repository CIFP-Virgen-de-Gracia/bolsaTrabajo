const User = require("../../models/User");
const RolAsignado = require("../../models/RolesAsignados");
const Roles = require("../../models/Roles");
const concatenate = require('../../helpers/concatenate'); 
const bycript = require("bcryptjs");
const ConexionSequelize = require('./ConexionSequelize');

class ConexionUsuario extends ConexionSequelize {
  
  constructor() {
    super();
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

  //******************++++++++++++++++++++++**** */ --->>> Este método hecho por Manuel
  //Inés: Creo otro getUsuario distinto, que necesito para formularioEmpresa.
  //No quiero tocarte el tuyo que no me sirve, por si te estropeo algo
  getUsuarioEmpresa = async(nif) => {
    let resultado = [];
    this.conectar();
    resultado = await User.findByPk(nif);
    this.desconectar();
    if (!resultado) {
      throw error;
    }
    return resultado;
  };  
  //********************** */

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

}

module.exports = ConexionUsuario;