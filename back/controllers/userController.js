const { response, request } = require("express");
const Conexion = require("./Conexion/ConexionSequelize");

const usuariosGet = (req, res = response) => {
  const conx = new Conexion();

  conx
    .getlistado()
    .then((msg) => {
      console.log("Listado correcto!");
      res.status(200).json(msg);
    })
    .catch((err) => {
      console.log("No hay registros");
      res.status(203).json({ msg: "No se han encontrado registros" });
    });
};

const usuarioGet = (req, res = response) => {
  const conx = new Conexion();

  conx
    .getUsuario(req.params.nif)
    .then((msg) => {
      console.log("Listado correcto!");
      res.status(200).json(msg);
    })
    .catch((err) => {
      console.log("No hay registro!");
      res.status(203).json({ msg: "No se ha encontrado el registro" });
    });
};

const usuariosPost = (req = request, res = response) => {
  const conx = new Conexion();

  conx
    .registrarUsuario(req.body)
    .then((msg) => {
      console.log("Insertado correctamente!");
      res.status(201).json(msg);
    })
    .catch((err) => {
      console.log("Fallo en el registro!");
      res.status(203).json(err);
    });
};

const usuariosDelete = (req, res = response) => {
  const conx = new Conexion();

  conx
    .borrarUsuario(req.params.nif)
    .then((msg) => {
      console.log("Borrado correctamente!");
      res.status(202).json(msg);
    })
    .catch((err) => {
      console.log("Fallo en el borrado!");
      res.status(203).json(err);
    });
};

const usuariosPut = (req, res = response) => {
  const conx = new Conexion();

  conx
    .modificarUsuario(req.params.nif, req.body)
    .then((msg) => {
      console.log("Modificado correctamente!");
      res.status(202).json(msg);
    })
    .catch((err) => {
      console.log("Fallo en la modificación!");
      res.status(203).json(err);
    });
};

const rolesAsignadosGet = (req, res = response) => {
  const conx = new Conexion();

  conx
    .getRolesAsignados()
    .then((msg) => {
      console.log("Listado correcto!");
      res.status(200).json(msg);
    })
    .catch((err) => {
      console.log("No hay registros");
      res.status(203).json({ msg: "No se han encontrado registros" });
    });
};

const rolesAsignadosNifGet = (req, res = response) => {
  const conx = new Conexion();

  conx
    .getRolesAsignadosNif(req.params.nif)
    .then((msg) => {
      console.log("Listado correcto!");
      res.status(200).json(msg);
    })
    .catch((err) => {
      console.log("No hay registros");
      res.status(203).json({ msg: "No se han encontrado registros" });
    });
};

const rolesGet = (req, res = response) => {
  console.log("Llego aquí.....*");
  const conx = new Conexion();

  conx
    .getRoles()
    .then((msg) => {
      console.log("Listado correcto!");
      res.status(200).json(msg);
    })
    .catch((err) => {
      console.log("No hay registros");
      res.status(203).json({ msg: "No se han encontrado registros" });
    });
};

module.exports = {
  usuariosGet,
  usuariosDelete,
  usuariosPost,
  usuariosPut,
  usuarioGet,
  rolesGet,
  rolesAsignadosGet,
  rolesAsignadosNifGet,
};
