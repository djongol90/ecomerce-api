import mongoose from "mongoose";



const clientSchema = new mongoose.Schema({
    nom: {
        type: String,
        require: true
    },
    prenom: {
        type: String,
        require: true
    },
    adresse: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    tel: {
        type: String,
        require: false,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
});

const Client = mongoose.model('Client', clientSchema);

export default Client;