import { Request, Response } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const app = require('./app');

const PORT = 3000;
const MONGO_URL = 'mongodb://localhost:27017';


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

app.post('/add-fournisseur', async(req: Request, res: Response) => {
    const data = req.body;

    try {
        const fournisseur = await Fournisseur.findOne({email: data.email});
        if (fournisseur) {
            res.status(301).json({
                message: 'Le founisseur existe déjà'
            })
        }else{
            const hash = bcrypt.hashSync(data.password, 10);
            data.password = hash;
            const newFournisseur = new Fournisseur(data);
            await newFournisseur.save();
            res.status(201).json({
                message: 'Le fournisseur a été bien enregistré'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Erreur : '+error
        })
    }
});





mongoose.connect(`${MONGO_URL}/ecomerceDB`).then(() => {
    console.log('Connected to database '+ MONGO_URL)
    app.listen(PORT, () => {
        console.log('le serveur est lancé sur le port '+ PORT)
    })
}).catch(error => {
    console.log(error);
    throw new Error("Erreur de connexion à la base de donnée!");
    
})



















