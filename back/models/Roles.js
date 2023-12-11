//descripcion:Roles de los usuarios
const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../controllers/Conexion/connection");
const RolesAsignados = require("./RolesAsignados");
const User = require("./User");

const Roles = db.define(
  "roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, //La establecemos como PK. En lugar de id por defecto.
    },
    nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  },
  {
    tableName: "roles",
  }
);

Roles.hasMany(RolesAsignados, { as: "RolesAsignados", foreignKey: "idRol" });

module.exports = Roles;
