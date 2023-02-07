const Oferta = require('../../models/ofertas');
const EmpresasOfertas = require('../../models/empresas-ofertas');
const Empresa = require('../../models/Empresa');
const ConexionSequelize = require('./ConexionSequelize');

class ConexionOferta extends ConexionSequelize {
  
  constructor() {
    super();
  };

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

  getDatosEmpresaAsignada = async(id) => {
      this.getEmpresaAsignada(id)
      .then( async resul => {
        const empresa = resul.EmpresasOfertas[0];
        let resultado = []
        this.conectar();
        resultado = await Empresa.findByPk(empresa.nif_empresa);
        this.desconectar();
        return resultado;
      });
  }

  getOfertasEmpresa = async(nif) => {
      let resultado = []
      this.conectar();
      resultado = await Empresa.findOne({where: {nif: nif}, include: ["EmpresasOfertas"] });
      this.desconectar();
      return resultado;
  }

}

module.exports = ConexionOferta;