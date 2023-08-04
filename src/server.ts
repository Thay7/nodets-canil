import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from 'path';

//Import Rotas
import mainRoutes  from './routes';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('viwes', path.join(__dirname, 'views'));
server.set('mustache', mustache);

server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRoutes);

server.use((req, res) => {
    
})

server.listen(process.env.PORT);