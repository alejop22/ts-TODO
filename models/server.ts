import express, {Application} from 'express';
import cors from 'cors';

import Tarea from '../routes/tarea';

class Server {

    private app: Application;
    private port: number;
    private tareasPath: string;

    constructor() {
        this.app = express();
        this.port = 3000;
        this.tareasPath = '/api/todo';

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`API TODO corriendo en el puerto ${this.port}`);
        });
    }

    middlewares() {
        // Habilitar cors
        this.app.use(cors());

        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.tareasPath, Tarea);
    }
}

export default Server;