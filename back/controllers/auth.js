const { response, request } = require("express");
const Conexion = require("./Conexion/ConexionUsuario");
const { generarJWT } = require("../helpers/generate_jwt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const RolesAsignados = require("../models/RolesAsignados");

const login = (req, res = response) => {
  const { email, password } = req.body;
  try {
    //Verificar si existe el usuario.
    const conx = new Conexion();
    console.log(email);
    u = conx
      .getUsuarioRegistrado(email, password)
      .then((usu) => {
        console.log("Usuario existente!" + password);

        //Verificar si el password es correcto.
        if (usu.password != password) {
          res.status(500).json({ msg: "Password incorrecto." });
        } else {
          //Generar el JWT.
          const token = generarJWT(
            usu.nif,
            usu.nombre,
            usu.email,
            usu.password,
            usu.telefono,
            usu.status,
            usu.rol
          );
          console.log(token);
          res.status(200).json({token});
        }
        // res.status(200).json({'msg':'Login correcto.'});
      })
      .catch((err) => {
        console.log("Usuario no existente!");
        res
          .status(500)
          .json({ msg: "Este usuario no existe en nuestra base." });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};


const register = (req, res = response) => {
  const { nif, nombre, email, password, telefono,status, rol } = req.body;
  try {
    //Verificar si existe el usuario.
    const conx = new Conexion();
    u = conx
      .getUsuario(email)
      .then((usu) => {
        // console.log("Usuario existente!" + usu);
        res
          .status(500)
          .json({ msg: "Este usuario ya existe en nuestra base." });
      })
      .catch((err) => {
        // console.log("Usuario nuevo, correcto!");
        //Registrar usuario.
        const conx = new Conexion();
        u = conx.registrarUsuario(req.body).then((usu) => {
          // console.log("Usuario registrado!");
          res.status(200).json({ msg: "Usuario registrado." });
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};

const loginGoogleCallback = async (req, res = response) => {
  const { id_token } = req.body;
  try {
    const { correo, nombre, img } = await googleVerify(id_token);

  } catch (error) {
    res.status(400).json({ msg: "Token de Google no es válido." });
  }
};

const logout = (req, res = response) => {
  const conx = new Conexion();
  conx.desconectar();
  res.status(200).json({ msg: "Logout correcto." });
};

const renewToken = async (req, res = response) => {
  const { nif, nombre, email, password, status, rol } = req.body;
  const token = await generarJWT(
    nif,
    nombre,
    email,
    password,
    status,
    rol
  );
  res.json({ token });
};

const loginGoogle = async(req, res) => {
  const { id_token } = req.body;
  try {
    const { correo, nombre, img } = await googleVerify(id_token);
    let usuario = await User.findOne({ correo });
    if (!usuario) {
      //Tengo que crearlo
      const data = {
        nombre,
        correo,
        password: ':P',
        img,
        google: true
      };
      usuario = new User(data);
      await usuario.save();
    }
    //Si el usuario en DB
    if (!usuario.estado) {
      return res.status(401).json({
        msg: 'Hable con el administrador, usuario bloqueado'
      });
    }
    //Generar el JWT
    const token = await generarJWT(usuario.id);
    res.json({
      usuario,
      token
    });

  } catch (error) {
    res.status(400).json({
      msg: 'Token de Google no es válido'
    });
  }
 
  
};


module.exports = {
  login,
  register,
  logout,
  renewToken,
  loginGoogle,
  loginGoogleCallback,

};
