import { Request, Response } from "express";
import person from "../database";
//import { sign } from 'jsonwebtoken';


const deletePerson = async (req:Request, res:Response) => {
    const { id } = req.params

    person.deleteOne({_id: id}).then(() =>{
        return res.status(200).json({
            "message": "Usuario deletado"
        })
    }).catch(() =>{
        return res.status(404).json({
            "erro": "id invalido"
        })
    })
}

export default deletePerson

