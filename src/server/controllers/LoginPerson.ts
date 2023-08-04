
import { Request, Response } from "express";
import { z } from 'zod';
import person from "../database";
import { compare } from "bcrypt";
import { sign } from 'jsonwebtoken';

type Person =z.infer<typeof personSchema>

const personSchema = z.object({
    email: z.string().email('O email deve ser valido').min(20, 'Deve haver no minimo 20 caracteris').max(200, 'Deve haver no maximo 200 caracteris'),
    senha: z.string()
})


const loginPerson = async (req:Request, res:Response) => {
    const { email, senha } = req.body

    const result = personSchema.safeParse({
        email,
        senha
    })

    if(result.success){
        const data:Person = result.data

        const user = await person.findOne({ email: email })

        if(!user){
            return res.status(404).json({
                "erro": "usuario não encontrado"
            })
        }
        
        const checkPassword = await compare(data.senha, user.senha);

        if(!checkPassword){
            return res.status(422).json({
                "erro": "senha invalida"
            })
        }

        try{
            const Secret = process.env.SECRET;

            const token = sign({
                id: user._id
            }, Secret);
            return res.status(200).json({
                "token": token
            })

        } catch(error){
            return res.status(500).json({
                "erro": "erro desconheido"
            })
        }
    } else{
        res.status(400).json(result.error)
    }

}

export default loginPerson

function sing(arg0: { id: import("mongoose").Types.ObjectId; }, secret: string | undefined) {
    throw new Error("Function not implemented.");
}
