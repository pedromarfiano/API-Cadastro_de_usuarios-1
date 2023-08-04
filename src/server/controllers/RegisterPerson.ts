import { Request, Response } from "express";
import { z } from 'zod';
import person from "../database";
import { hash } from "bcrypt";

type Person =z.infer<typeof personSchema>

const personSchema = z.object({
    nome: z.string().min(20, 'Deve haver no minimo 20 caracteris').max(180, 'Deve haver no maximo 180 caracteris'),
    email: z.string().email('O email deve ser valido').min(20, 'Deve haver no minimo 20 caracteris').max(200, 'Deve haver no maximo 200 caracteris'),
    idade: z.number(),
    senha: z.string().min(8, 'Deve haver no minimo 8 caracteris').max(30, 'Deve haver no maximo 30 caracteris')
})


const registerPerson = async (req:Request, res:Response) => {
    const { nome, email, idade, senha } = req.body

    const result = personSchema.safeParse({
        nome,
        email,
        idade,
        senha
    })

    if(result.success){
        const data:Person = result.data
        const user = await person.find({email: data.email});

        if(user[0]){
            return res.json({
                "erro": "email já cadastrado"
            })
        } else{
            const passwordHash = await hash(data.senha, 8)
        
            new person({
            nome: data.nome,
            email: data.email,
            idade: data.idade,
            senha: passwordHash
            }).save().then(()=>{
                res.status(200).json({
                    "message":"usuario cadastrado"
                });
            }).catch(() => {
                res.status(400).json({
                    "erro": "usuario invalido "
                })
            })
        }

    } else{
        res.status(400).json(result.error)
    }

}

export default registerPerson