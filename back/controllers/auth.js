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
            usu.nick,
            usu.email,
            usu.password,
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
  const { nif, nick, email, password, status, rol } = req.body;
  try {
    //Verificar si existe el usuario.
    const conx = new Conexion();
    u = conx
      .getUsuario(email)
      .then((usu) => {
        console.log("Usuario existente!" + usu);
        res
          .status(500)
          .json({ msg: "Este usuario ya existe en nuestra base." });
      })
      .catch((err) => {
        // console.log("Usuario nuevo, correcto!");
        //Registrar usuario.
        const conx = new Conexion();
        u = conx.registrarUsuario(req.body).then((usu) => {
          console.log("Usuario registrado!");
          res.status(200).json({ msg: "Usuario registrado." });
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};
const registerAdmin = (req, res = response) => {
  const { nif, nick, email, password, status, rol } = req.body;
  try {
    //Verificar si existe el usuario.
    const conx = new Conexion();
    u = conx
      .getUsuario(email)

      .then((usu) => {
        console.log("Usuario existente!" + usu);
        res
          .status(500)
          .json({ msg: "Este usuario ya existe en nuestra base." });
      })
      .catch((err) => {
        console.log("Usuario nuevo, correcto!");
        //Registrar usuario.
        const conx = new Conexion();
        u = conx
          .registrarUsuario(req.body)

          .then((usu) => {
            console.log("Usuario registrado!");
            res.status(200).json({ msg: "Usuario registrado." });
          });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};
const registerEmpresa = (req, res = response) => {
  const { nif, nick, email, password, status, rol } = req.body;
  try {
    //Verificar si existe el usuario.
    const conx = new Conexion();
    u = conx
      .getUsuario(email)

      .then((usu) => {
        console.log("Usuario existente!" + usu);
        res
          .status(500)
          .json({ msg: "Este usuario ya existe en nuestra base." });
      })
      .catch((err) => {
        console.log("Usuario nuevo, correcto!");
        //Registrar usuario.
        const conx = new Conexion();
        u = conx
          .registrarUsuario(req.body)

          .then((usu) => {
            console.log("Usuario registrado!");
            res.status(200).json({ msg: "Usuario registrado." });
          });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};
const logout = (req, res = response) => {
  const conx = new Conexion();
  conx.desconectar();
  res.status(200).json({ msg: "Logout correcto." });
};

const renewToken = async (req, res = response) => {
  const { nif, nick, email, password, status, rol } = req.body;
  const token = await generarJWT(
    nif,
    nick,
    email,
    password,
    status,
    rol
  );
  res.json({ token });
};

const googleSignin = async(req, res = response) => {

  const { id_token } = req.body;

  //Para probar inicialmente que recibimos el token del front:
  // res.status(200).json({msg:"Token recibido",id_token});
  
  //Una vez comprobado que el token se recibe desde el front, instalamos: npm install google-auth-library --save 
  //Y ya podemos usar el código siguiente para verificar el token.
  try {
      const { nif, nick, email, password, avatar } = await googleVerify( id_token );
      //Si seguimos y no salta la excepción estarmos verificados por Google.

      let usuario = await User.findOne({ email });
      console.log(`Comprobaríamos el usuario: ${email}, ${nick}`);
      //Verificar si existe el usuario. Además de la verificación del token de Google, vemos si existe en nuestra BD, caso de no existir lo creamos.
      const conx = new Conexion();
      u = conx.getUsuarioRegistrado(nif, password)    
          .then( usu => {
              console.log('Usuario correcto!  ' + usu[0].nif);
              const token = generarJWT(usu[0].nif)
              console.log(usu)
              console.log(token);
              res.status(200).json({usu, token});
          })
          .catch( err => {
              console.log('Usuario incorrecto!  ' + err);
              res.status(500).json({msg: 'Usuario incorrecto!'});
          });

      if ( !u ) {
          // Tengo que crearlo
          const data = {
              nif,
              nick,
              email,
              password: ':P',
              avatar: img,
              google: true
          };
          //Crearíamos el usario con Mongoose o con MySQL, según lo que usemos.
          usuario = new User( data );
          console.log(`Creando el usuario ${data}`)
          await usuario.save();        
      }


      const token = generarJWT(email); //Si entramos, podemos generar nuestro propio token de seguridad con el correo del usuario. Ese token será el que usemos para el uso de la API.
      res.status(200).json({email, token});
      
  } catch (error) {

      res.status(400).json({
          msg: 'Token de Google no es válido'
      })

  }



}



module.exports = {
  login,
  register,
  logout,
  registerAdmin,
  registerEmpresa,
  renewToken,
  googleSignin

};
