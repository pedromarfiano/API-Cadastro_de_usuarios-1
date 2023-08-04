import { Router } from "express";
import registerPerson from "../controllers/RegisterPerson";
import loginPerson from "../controllers/LoginPerson";

const routers = Router()

routers.get("/", (req, res) => {
    res.json({
        "message": "bem vindo"
    })
})
routers.post("/auth/register", registerPerson)
routers.post("/auth/login", loginPerson)
routers.get("/*", (req, res) =>{
    res.status(404).json({
        "error": "Pagina invalida"
    })
})

export default routers