import { Request, Response } from "express";
import Fournisseur from "../models/fournisseur.model";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


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



// la authentification 
export const login = async (req:Request, res: Response) => {
    const userData = req.body;
    try {
        const user = await Fournisseur
        .findOne({email: userData.email});
        if (!user) {
            res.status(404).json({
                message: "L'email ou le mot de passe est incorrect!"
            })
        } else {
            const isTrue = bcrypt.compareSync(userData.password, user.password);
            if (!isTrue) {
                res.status(404).json({
                    message: "Le mot de passe est incorrect!"
                })
            } else {
                const token = jwt.sign(
                    {
                        userId: user._id,
                        email: user.email
                    },
                    'AZERTY',
                    {
                        expiresIn: '1h'
                    }
                )
                res.status(200).json({
                    message: 'Connecté',
                    token,
                    user
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Erreur: "+error
        });
    }
}


// La fonction qui retourne la liste de tous le fournisseur
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


// LA fonction qui retourne un seul fournisseur 
export const getFournisseur = async (req: Request, res: Response) => {
    
}


// La fonction qui nous permet de modifier un fournisseur
export const updateFournisseur = async (req: Request, res: Response) => {
    
}

// La fonction pour recuperation de mot de passe
export const forgetPassword = async (req: Request, res: Response) => {
    
}


// la fonction qui nous permet de modifier le mot de passe

export const updatePassword = async (req: Request, res: Response) => {
    
}