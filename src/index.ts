import server from "./server/server";
import dotenv from 'dotenv';

dotenv.config();

server.listen(process.env.PORT || 8081, () => {
    console.log("rodando");
})