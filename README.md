# API-Cadastro_de_usuarios
API de cadastro de usuários feita com Node.js e MongoDB. Possui sistema de autenticação com zod e sistema de autorização com jwt.

rotas:
get - http://localhost:3030/
post - http://localhost:3030/auth/register
  "nome": 
	"email": 
	"idade": 
	"senha": 
post - http://localhost:3030/auth/login
  "email": 
	"senha": 
