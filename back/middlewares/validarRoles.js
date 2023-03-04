//Ines
//Descripción: Este archivo contiene los middlewares que se encargan de validar los roles de los usuarios.
const {validarJWT} = require('../helpers/generate_jwt');

const esEstudiante = (req, res, next) => {
  const nifToken=req.headers.authorization.split(' ').pop();
  const tokenData = validarJWT(nifToken); //Validamos el token y obtenemos el uid del usuario.
  if (!tokenData._id) {
    //Hacemos una comprobación rutinaria de si se ha establecido.
    return res
      .status(500)
      .json({ msg: "No es posible el acceso como estudiante." });
  }else{
    next();
    res.send({msg:"Acceso permitido"})
  }
};

const esEmpresa = (req, res, next) => {
  const nifToken=req.headers.authorization.split(' ').pop();
  const tokenData = validarJWT(nifToken); //Validamos el token y obtenemos el uid del usuario.
  if (!tokenData._id) {
  
    return res
      .status(500)
      .json({ msg: "No es posible el acceso como empresa." });
  }else{
    next();
    res.send({msg:"Acceso permitido"})
  }
};

const esAdmin = (req, res, next) => {
  const nifToken=req.headers.authorization.split(' ').pop();
  const tokenData = validarJWT(nifToken); //Validamos el token y obtenemos el uid del usuario.
  if (!tokenData._id) {

    return res
      .status(500)
      .json({ msg: "No es posible el acceso como administrador." });
  }else{
    next();
    res.send({msg:"Acceso permitido"})
  }
};



module.exports = {
  esAdmin,
  esEstudiante,
  esEmpresa,
};
