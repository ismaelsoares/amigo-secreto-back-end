import cors from "cors";
import "dotenv/config";
import express from "express";
import https from 'https';
import http from 'http';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const runServer = (port: number, server: http.Server) => {
    server.listen(port, () => {
        console.log(`🚀Server burning on PORT ${port}`);
    })
}


const regularServer = http.createServer(app);

if (process.env.NODE_ENV === 'production') {
    //TODO: configurar SSL
    //TODO: rodar servar na 80 e na 443
} else {
    const serverPort: number = process.env.PORT ? parseInt(process.env.PORT) : 9000;
    runServer(serverPort, regularServer);
}