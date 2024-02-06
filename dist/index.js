"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./models/server"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = __importDefault(require("./routes/router"));
dotenv_1.default.config();
const port = Number(process.env.PORT) || 3000;
const server = server_1.default.init(port);
server.app.use(router_1.default);
server.start(() => {
    console.log(`CORRIENDO en el puerto ${port}`);
});
