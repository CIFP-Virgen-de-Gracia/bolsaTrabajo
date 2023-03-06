const User = require("../../models/User");
const Empresa = require("../../models/Empresa");
const Alumno = require("../../models/Alumno");
const RolAsignado = require("../../models/RolesAsignados");
const Roles = require("../../models/Roles");
const bycript = require("bcryptjs");
const ConexionSequelize = require('./ConexionSequelize');
const File = require('../../models/Files');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

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

  //********************** */
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

  registrarUsuario = async (body) => {
    let resultado = 0;
    let avatar = '';
    this.conectar();
    const empresaNueva = new Empresa(body);
    const estudianteNuevo=new Alumno(body);
    const usuarioNuevo = new User(body); //Con esto añade los timeStamps.
    const roleId = usuarioNuevo.rol;
    // resultado =
    await usuarioNuevo.save();
    resultado = await usuarioNuevo.save();
    this.AsignarRol({      //Asigna el rol de usuario por defecto o el que se le pase por el body
      userNif: body.nif,
      roleId: body.rol,
    });
    if(body.rol==2){
      await estudianteNuevo.save();
      resultado = await estudianteNuevo.save();
    }else if(body.rol==3){
      await empresaNueva.save();
      resultado = await empresaNueva.save();
      }
    if (body.file !=="") {
      this.AsignarAvatar({
        userNif: usuarioNuevo.nif,
        file: body.file,
      });
      this.desconectar();
      return resultado;
    }else{
      this.desconectar();
      return resultado;
    }
    }
    
  modificarAvatar = async (nif, avatar) => {
    this.conectar();
    let user = await User.findByPk(nif);
    if (!user) {
      this.desconectar();
      throw error;
    }
    await user.update(avatar);
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

  getRolesAsignadosNif = async (nif) => {
    let resultado = [];
    this.conectar();
    resultado = await RolAsignado.findOne({
      where: { userNif: nif },
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

  AsignarAvatar = async (body) => {
    let resultado = 0;
    let nombreArchivo = uuidv4() + '.jpg';
    this.conectar();
    const file = {
      userNif: body.userNif,
      file: nombreArchivo,
    }
    const avatarNuevo = new File(file);
    await avatarNuevo.save();
    resultado = await avatarNuevo.save();
    this.desconectar();
    return resultado;
  }

  getAvatar = async (nif) => {
    let resultado = [];
    this.conectar();
    resultado = await File.findOne({ where: { userNif: nif } });
    this.desconectar();
    if (!resultado) {
      throw error;
    }
    return resultado;
  };

  registrarEmpresa = async (body) => {
    let resultado = 0;
    this.conectar();
    const usuarioNuevo = new User(body); //Con esto añade los timeStamps.
    // resultado =
    await usuarioNuevo.save();
    resultado = await usuarioNuevo.save();
    this.AsignarRol({      //Asigna el rol de usuario por defecto o el que se le pase por el body
      userNif: body.nif,
      roleId: 3,
    });
    this.desconectar();
    return resultado;
  }
 
}


module.exports = ConexionUsuario;