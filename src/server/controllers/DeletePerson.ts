import { Request, Response } from "express";
import person from "../database";
//import { sign } from 'jsonwebtoken';


const deletePerson = async (req:Request, res:Response) => {
    const { id } = req.params

    const user = person.findById(id);

    if(user[0]){
        return res.status(200).json(user);
    } else{
        return res.status(404).json({
            "erro": "id invalido"
        })
    }
}

export default deletePerson

function sing(arg0: { id: import("mongoose").Types.ObjectId; }, secret: string | undefined) {
    throw new Error("Function not implemented.");
}
