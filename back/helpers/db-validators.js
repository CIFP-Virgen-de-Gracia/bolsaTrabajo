const Empresa = require('../models/Empresa');

const empresaExiste = async(nif = '') => {
    const existeEmpresa = await Empresa.findOne({nif});
    if (!existeEmpresa) {
        throw new Error(`La empresa con nif ${nif} no existe`);
    }
}

module.exports = {
    empresaExiste
}