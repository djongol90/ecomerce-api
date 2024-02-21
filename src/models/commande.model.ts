import mongoose from 'mongoose';



const commandeSchema = new mongoose.Schema({
    quantite: {
        type: Number,
        default: 1
    },
    produit: {
        type: mongoose.Types.ObjectId,
        ref: 'Produit',
        require: true
    },
    client: {
        type: mongoose.Types.ObjectId,
        ref: 'Client',
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

const Commande = mongoose.model('Commande', commandeSchema);

export default Commande;