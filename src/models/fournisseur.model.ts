import mongoose from "mongoose";



const fournisseurSchema = new mongoose.Schema({
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
    tel: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});





const Fournisseur = mongoose.model('Fournisseur', fournisseurSchema);


export default Fournisseur;

// module.exports = Fournisseur