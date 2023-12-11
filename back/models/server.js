const express = require('express');
const cors = require('cors');
const { socketController } = require('../controllers/websocketController');
class Server {

    constructor() {
        this.app = express();
        this.alumnosPath = '/alumnos';
        this.rolesPath = '/api/roles';
        this.rolesAsignados = '/api/rolesasignados';
        this.empresasPath = '/api/empresa';
        this.ofertasPath = '/ofertas';
        this.empresaOFertaPath = '/empresaoferta';
        this.formContactoPath = '/api/formContacto';
        this.adminPath = '/admin';
        this.authPath = '/auth';

        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        //Middlewares
        this.middlewares();

        this.routes();

        //Websockets.
        this.sockets();
        
    }

    middlewares() {
       // this.app.use(body_parser.urlencoded({extended: false}));
        this.app.use(cors());
        this.app.use(express.json());
       
    }

    routes(){
        this.app.use(this.authPath , require('../routes/authRoutes'));
        this.app.use(this.empresasPath , require('../routes/empresaroutes'));
        this.app.use(this.ofertasPath, require('../routes/ofertasRoutes'));
        this.app.use(this.rolesPath , require('../routes/rolesRoutes'));
        this.app.use(this.rolesAsignados, require('../routes/rolesAsignadosRoutes'));
        this.app.use(this.empresaOFertaPath, require('../routes/empresaOfertasRoute'));
        this.app.use(this.alumnosPath , require('../routes/alumnoRoutes'));
        this.app.use(this.adminPath, require('../routes/adminRoutes'));
        this.app.use(this.formContactoPath, require('../routes/formContactoRoutes'));
    }

    sockets(){
        this.io.on('connection', socketController);
    }

    listen() {
        this.server.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en: ${process.env.PORT}`);
        })
    }
}

module.exports = Server;