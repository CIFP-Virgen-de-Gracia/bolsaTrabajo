const esAdmin = (req, res, next) => {
  if (!req.nifToken) {
    //Hacemos una comprobación rutinaria de si se ha establecido.
    return res
      .status(500)
      .json({ msg: "No es posible el acceso como administrador." });
  }

  //Aquí iría la consulta a la bd para ver los roles del usuario. O si se sacó toda la información en el middleware anterior, podríamos hacer algo como esto:
  getUsuario = async (nif) => {
    let resultado = [];
    try {
      resultado = await this.query(
        'SELECT * FROM personas WHERE nif=nif AND rol = "admin"',
        [nif]
      );
    } catch (error) {
      throw error;
    }
    return resultado;
  };

  if (req.rol == 1) {
    console.log(req.nifToken + " accediendo como administrador.");
    next();
  } else {
    return res
      .status(500)
      .json({ msg: "No es posible el acceso como administrador." });
  }
};

const esEstudiante = (req, res, next) => {
  if (!req.nifToken) {
    //Hacemos una comprobación rutinaria de si se ha establecido.
    return res
      .status(500)
      .json({ msg: "No es posible el acceso como usuario." });
  }
  getUsuario = async (nif) => {
    let resultado = [];
    try {
      resultado = await this.query(
        'SELECT * FROM personas WHERE nif=nif AND rol = "usuario"',
        [nif]
      );
    } catch (error) {
      throw error;
    }
    return resultado;
  };
  if (req.rol == 1) {
    console.log(req.nifToken + " accediendo como usuario.");
    next();
  } else {
    return res.status(500).json({ msg: "No estás en la base de datos." });
  }
};

const esEmpresa = (req, res, next) => {
  if (!req.nifToken) {
    //Hacemos una comprobación rutinaria de si se ha establecido.
    return res
      .status(500)
      .json({ msg: "No es posible el acceso como empresa." });
  }
  getUsuario = async (nif) => {
    let resultado = [];
    try {
      resultado = await this.query(
        'SELECT * FROM personas WHERE nif=nif AND rol = "empresa"',
        [nif]
      );
    } catch (error) {
      throw error;
    }
    return resultado;
  };
  if (req.rol == 1) {
    console.log(req.nifToken + " accediendo como empresa.");
    next();
  } else {
    return res.status(500).json({ msg: "No estás en la base de datos." });
  }
};

module.exports = {
  esAdmin,
  esEstudiante,
  esEmpresa,
};
