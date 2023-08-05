import { Request, Response } from "express";
import person from "../database";
//import { sign } from 'jsonwebtoken';


const searchPerson = async (req:Request, res:Response) => {
    const { id } = req.params

    const user = await person.findById(id, '-senha');

    res.status(200).json(user);
    
}

export default searchPerson

