import mongoose from "mongoose";




const produitSchema = new mongoose.Schema({
    titre: {
        type: String,
        require: true
    },
    prix: {
        type: Number,
        require: true
    },
    quantite: {
        type: Number,
        require: true,
        default: 1
    },
    description: {
        type: String,
    },
    status: {
        type: Boolean,
        default: false
    },
    fournisseur: {
        type: mongoose.Types.ObjectId,
        ref: 'Fournisseur',
        require: true
    },
    createdAt: {
        type: Date,
        require: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        require: true,
        default: Date.now
    }
});

const Produit = mongoose.model('Produit', produitSchema);

export default Produit;