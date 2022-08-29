const express = require('express');
const cors = require('cors');


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //MIDDLEWARES
        this.middlewares();


        //RUTAS DE APLICACIÓN
        this.routes();
    }

    middlewares(){
        // CORS
        this.app.use(cors());

        // lectura 
        this.app.use(express.json());

        // DIRECTORIO PUBLICO
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath,require('../routes/user.routes'));


    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo enpuerto', this.port);
        });
    }
}

module.exports = Server