import Server from "./models/server";
import dotenv from 'dotenv';
import router from "./routes/router";

dotenv.config(); 

const port = Number(process.env.PORT) || 3000; 

const server = Server.init(port);



server.app.use(router);

server.start(()=>{
    console.log(`CORRIENDO en el puerto ${port}`);
});