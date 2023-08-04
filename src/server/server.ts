import express from 'express';
import routers from './routers';

const server = express();

server.use(express.json())
server.use(routers)

export default server