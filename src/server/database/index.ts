import mongoose, { Schema } from "mongoose";

const pass = process.env.DB_PASS || '7XaN4NTQYNZ8qKa6'
const user = process.env.DB_USER || 'pedromarfiano'

mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.vyhxphv.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log('db connected');
}).catch((error) =>{
    console.log(error);
});

const schemaPerson = new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    idade: {type: Number, required: true},
    senha: {type: String, required: true}
});

const person = mongoose.model("People", schemaPerson);

export default person