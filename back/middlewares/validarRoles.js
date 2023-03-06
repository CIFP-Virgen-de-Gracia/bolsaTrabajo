//Ines**************
// Path: back\middlewares\validarRoles.js
const {verifyToken} = require('../helpers/generate_jwt');

const esAdmin = (req, res, next) => {
  const token = req.header('x-token');
  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la petición',
    });
  }
  try {
    const {uid, rol} = verifyToken(token);
    if (rol !== 1) {
      return res.status(401).json({
        msg: 'No tiene privilegios para realizar esta acción',
      });
    }
    req.uid = uid;
    req.rol = rol;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: 'Token no válido',
    });
  }

};

const esEstudiante = (req, res, next) => {
  const token = req.header('x-token');
  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la petición',
    });
  }
  try {
    const {uid, rol} = verifyToken(token);
    if (rol !== 2) {
      return res.status(401).json({
        msg: 'No tiene privilegios para realizar esta acción',
      });
    }
    req.uid = uid;
    req.rol = rol;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: 'Token no válido',
    });
  }
};

const esEmpresa = (req, res, next) => {
  const token = req.header('x-token');
  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la petición',
    });
  }
  try {
    const {uid, rol} = verifyToken(token);
    if (rol !== 3) {
      return res.status(401).json({
        msg: 'No tiene privilegios para realizar esta acción',
      });
    }
    req.uid = uid;
    req.rol = rol;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: 'Token no válido',
    });
  }
};

module.exports = {
  esAdmin,
  esEstudiante,
  esEmpresa,
};
