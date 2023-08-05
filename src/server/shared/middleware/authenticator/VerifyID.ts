import { Request, Response, NextFunction } from "express";
import person from "../../../database";


const verifyID = async (req:Request, res:Response, next:NextFunction) => {
    const id = req.params.id;
    const user = await person.findById(id, '-senha -email -idade');

    if(!user){
        return res.status(404).json({
            "erro": "usuario não existe"
        })
    }
    next()
}

export default verifyID