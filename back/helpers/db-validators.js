//Realizado por Khattari
const Empresa = require('../models/Empresa');

const empresaExiste = async(nif = '') => {
    const existeEmpresa = await Empresa.findByPk({nif});
    if (!existeEmpresa) {
        throw new Error(`La empresa con id ${nif} no existe`);
    }
}

module.exports = {
    empresaExiste
}