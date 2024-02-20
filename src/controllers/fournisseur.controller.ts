import { Request, Response } from "express";
import Fournisseur from "../models/fournisseur.model";
import bcrypt from 'bcrypt';


export const addFournisseur = async (req: Request, res: Response) => {
    
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
}



export const getFournisseurs = async (req: Request, res: Response) => {
    
    try {
        const fournisseurs = await Fournisseur.find();
        res.status(201).json({
            message: 'La liste des fournisseurs',
            fournisseurs
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Erreur: "+error
        })
    }
}