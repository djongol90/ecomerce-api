import { Request, Response } from "express";
import Client from "../models/client.model";
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
    
}

export const createClient = async (req: Request, res: Response) => {
    const data = req.body;

    try {
        const client = await Client.findOne({email: data.email});

        if (client) {
            res.status(303).json({
                message: 'Le compte existe déjà!'
            })
        } else {
            const hash = bcrypt.hashSync(data.password, 10);
            data.password = hash;
            const newClient = new Client(data);

            await newClient.save();
            res.status(202).json({
                message: 'Votre compte a été crée avec succés!'
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message: 'Error: '+ error
        })
    }
}


export const getClients = async (req: Request, res: Response) => {
    try {
        const clients = await Client.find();
        res.status(200).json({
            message: 'La liste de clients',
            clients
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Error: '+ error
        })
    }
}