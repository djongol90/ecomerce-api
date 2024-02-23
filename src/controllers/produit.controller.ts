import { Request, Response } from "express";
import Produit from "../models/produit.model";
const runChatGPT = require('../utils/chatGPT.utils');


export const addProduct = async (req: Request, res: Response) => {
    const data = req.body;
    const userData = (req as any).userData;
    const isDescription = req.query.isDescription;
    try {
        data.fournisseur = userData.userId;
        console.log(isDescription)
        if(isDescription === '0'){
            data.description = await runChatGPT(data.description);
        }
        const newProduit = new Produit(data);
        await newProduit.save();
        res.status(202).json({
            message: 'Le produit a ete enregistre!',
            userData,
            newProduit
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error: '+error
        })
    }
}

// 
export const getProducts = async (req: Request, res: Response) => {
    
    try {
        const produits: any = await Produit
        .find()
        .populate('fournisseur', 'nom _id prenom tel email');

        res.status(201).json({
            message: 'La liste de produit',
            produits
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error: '+error
        })
    }
}

// 
export const getProduct = async (req: Request, res: Response) => {
    
}


export const updateProduct = async (req: Request, res: Response) => {
    
}

export const deleteProduct = async (req: Request, res: Response) => {
    
}