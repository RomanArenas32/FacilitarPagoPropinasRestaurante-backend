import express, { Application } from 'express';
import path = require('path');
import { dbConnecion } from '../database/config';

export default class Server {
    public app: Application;
    public port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.app.use(express.json());

        this.dbConnecion();
    }

    async dbConnecion() {
        await dbConnecion();
    }

    static init(port: number): Server {
        return new Server(port);
    }

    private publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');

        this.app.use(express.static(publicPath));
    }

    start(callback: () => void): void {
        this.app.listen(this.port, callback);
        this.publicFolder;
    }
}
