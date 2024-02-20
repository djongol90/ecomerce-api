import { Request, Response } from "express";
import Produit from "../models/produit.model";



export const addProduct = async (req: Request, res: Response) => {
    const data = req.body;

    try {
        const newProduit = new Produit(data);
        await newProduit.save();
        res.status(202).json({
            message: 'Le produit a ete enregistre!'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error: '+error
        })
    }
}

export const getProduit = async (req: Request, res: Response) => {
    
    try {
        const produits: any = await Produit
        .find()
        .populate('fournisseur', 'nom _id prenom tel email');

        res.status(201).json({
            message: 'La liste de produit',
            produits
            // produits: {
            //     fournisseur: {
            //         nom: produits.fournisseur.nom,
            //         prenom: produits.fournisseur.prenom,
            //         adress: produits.fournisseur.adresse,
            //         tel: produits.fourni
            //     }
            // }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error: '+error
        })
    }
}