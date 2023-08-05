import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const checkToken = (req:Request, res:Response, next:NextFunction) =>{

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1]

    if(!token){
        return res.status(404).json({
            "erro": "acesso negado!"
        });
    }

    try{
        const secret = process.env.SECRET || 'sfslfnslfuhdiysfdsid3u6kt326gi3d2tyyfsd'
        jwt.verify(token, secret);

        next();

    } catch(error){
        res.status(400).json({"erro": "Token invalido"})
    }

}
export default checkToken