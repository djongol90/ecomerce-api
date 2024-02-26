import { Request, Response } from "express";
import Commande from "../models/commande.model";

export const createCommande = async (req: Request, res: Response) => {
    const data = req.body;
    const userData = (req as any).userData
    try {
        data.client = userData.userId;
        const newCommande = new Commande(data)
        await newCommande.save();
        res.status(201).json({
            message: 'Votre commande a été enregistrée avec succés!',
            commande: newCommande
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error: '+ error
        })
    }
}

export const getCommandes = async (req: Request, res: Response) => {
    try {
        const clientId = req.query.clientId;
        Commande
        .find({client: clientId})
        .populate({
            path: 'produit',
            populate: {
                path: 'fournisseur',
                select: '-password'
            }
        })
        .populate('client', '-password')
        .then((data: any) => {
            res.status(200).json({
                message: 'La liste de vos commandes',
                commandes: data
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error: '+ error
        })
    }
}