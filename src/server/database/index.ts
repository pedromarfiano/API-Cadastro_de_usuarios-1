import mongoose, { Schema } from "mongoose";

mongoose.connect('mongodb+srv://pedromarfiano:7XaN4NTQYNZ8qKa6@cluster0.vyhxphv.mongodb.net/?retryWrites=true&w=majority').then(() => {
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