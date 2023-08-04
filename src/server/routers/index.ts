import { Router } from "express";
import registerPerson from "../controllers/RegisterPerson";
import loginPerson from "../controllers/LoginPerson";
import searchPerson from "../controllers/SearchPerson";
import deletePerson from "../controllers/DeletePerson";
//import alterPerson from "../controllers/AlterPerson";

const routers = Router()

routers.get("/", (req, res) => {
    res.json({
        "message": "bem vindo"
    })
})
routers.post("/auth/register", registerPerson)
routers.post("/auth/login", loginPerson)
routers.get("/auth/users:id", searchPerson)
routers.delete("/auth/user:id", deletePerson)
//routers.put("/auth/user:id", alterPerson)
routers.get("/*", (req, res) =>{
    res.status(404).json({
        "error": "Pagina invalida"
    })
})

export default routers