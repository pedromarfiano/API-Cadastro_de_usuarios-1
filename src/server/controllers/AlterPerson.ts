import { Request, Response } from "express";
import person from "../database";
import { z } from 'zod';
import { hash } from "bcrypt";

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

        const passwordHash = await hash(senha, 8)

        person.findByIdAndUpdate(id, {
                nome: data.nome,
                email: data.email,
                idade: data.idade,
                senha: passwordHash
            }
        ).then(() => {
            res.status(200).json({
                "message":"usuario cadastrado"
            });
        }).catch((erro) => {
            return res.status(400).json({"erro":erro})
        })

    }else{
        res.status(400).json(result.error)
    }

    
}

export default alterPerson
