const express = require('express');
const cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.authPath = '/';
        this.alumnosPath = '/alumnos';
        this.authPath= '/api/auth';
        this.rolesPath = '/api/roles';
        this.rolesAsignados = '/api/rolesasignados';
        this.empresasPath = '/api/empresa';
        this.ofertasPath = '/ofertas';
        this.empresaOFertaPath = '/empresaoferta';
        this.formContactoPath = '/api/formContacto';

        //Middlewares
        this.middlewares();

        this.routes();
        
    }

    middlewares() {
       // this.app.use(body_parser.urlencoded({extended: false}));
        this.app.use(cors());
        this.app.use(express.json());
       
    }

    routes(){
        this.app.use(this.authPath , require('../routes/auth'));
        this.app.use(this.authPath , require('../routes/routes'));
        this.app.use(this.empresasPath , require('../routes/empresaroutes'));
        this.app.use(this.ofertasPath, require('../routes/ofertasRoutes'));
        this.app.use(this.rolesPath , require('../routes/rolesRoutes'));
        this.app.use(this.rolesAsignados, require('../routes/rolesAsignadosRoutes'));
        this.app.use(this.empresaOFertaPath, require('../routes/empresaOfertasRoute'));
        this.app.use(this.alumnosPath , require('../routes/alumnoRoutes'));
        this.app.use(this.formContactoPath, require('../routes/formContactoRoutes'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en: ${process.env.PORT}`);
        })
    }
}

module.exports = Server;