# API-Cadastro_de_usuarios
API REST simples de usuários.
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

<h4 align="center"> 
	✅ concluido ✅ 
</h4>

# Descrição do projéto
Esse projeto foi criado com o intuito de mostrar minhas abilidades no backend com o Typescript, por conta disso é um projeto pequeno e apenas uma API. Ela possui um sístema de autenticação com zod que foi colocado diretamente nas controllers e um sístema de autorização usando jwt que foi usado como middleware. Nessa API também é utilizado o bcrypt, para esconder a senha dos usuarios.

# rotas:
get - http://localhost:3030/
get - http://localhost:3030/*
post - http://localhost:3030/auth/register
post - http://localhost:3030/auth/login
get - http://localhost:3030/auth/user/:id
put - http://localhost:3030/auth/user/:id
delete - http://localhost:3030/auth/user/:id

# Schema Pessoas:
nome: string
email: string
idade: number
senha: string

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [MongoDB Atlas](https://www.cloud.mongobd.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [Zod](https://www.zod.dev)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [JsonWebToken](https://www.jwt.io)

OBS: Estou sem pc por isso fiz algumas partes do codigo no notebook de um amigo. Os comites foram feitos da conta dele para esse repositorio. 
