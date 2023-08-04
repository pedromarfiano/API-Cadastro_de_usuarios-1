import { Request, Response } from "express";
import person from "../database";
import { z } from 'zod';
//import { sign } from 'jsonwebtoken';

type Person =z.infer<typeof personSchema>

const personSchema = z.object({
    nome: z.string().min(20, 'Deve haver no minimo 20 caracteris').max(180, 'Deve haver no maximo 180 caracteris'),
    email: z.string().email('O email deve ser valido').min(20, 'Deve haver no minimo 20 caracteris').max(200, 'Deve haver no maximo 200 caracteris'),
    idade: z.number(),
    senha: z.string().min(8, 'Deve haver no minimo 8 caracteris').max(30, 'Deve haver no maximo 30 caracteris')
})


const alterPerson = async (req:Request, res:Response) => {
    const { id } = req.params
    const { nome, email, idade, senha } = req.body
    
    const result = personSchema.safeParse({
        nome,
        email,
        idade,
        senha
    })

    if(result.success){
        const data:Person = result.data

        if(user[0]){
            return res.status(200).json(user);
        } else{
            return res.status(404).json({
                "erro": "id invalido"
            })
        }
    }

    
}

export default alterPerson

function sing(arg0: { id: import("mongoose").Types.ObjectId; }, secret: string | undefined) {
    throw new Error("Function not implemented.");
}
