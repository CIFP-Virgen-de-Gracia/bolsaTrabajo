const express = require('express');
const cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.usuariosPath = '/';
        this.authPath= '/api/auth';
        this.rolesPath = '/api/roles';
        this.rolesAsignados = '/api/rolesasignados';

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
        this.app.use(this.usuariosPath , require('../routes/Routes'));
        this.app.use(this.rolesPath , require('../routes/rolesRoutes'));
        this.app.use(this.rolesAsignados, require('../routes/rolesAsignadosRoutes'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en: ${process.env.PORT}`);
        })
    }
}

module.exports = Server;