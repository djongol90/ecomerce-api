
import { Request, Response } from "express";
import Client from "../models/client.model";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {
    const data = req.body;
    console.log(data.password)
    try {
        const client = await Client.findOne({email: data.email});
        if (!client) {
            res.status(404).json({
                message: "L'email ou le mot passe est incorrect!"
            })
        } else {
            const pass = bcrypt.hashSync(data.password, 10);
            console.log(client.password);
            console.log(bcrypt.compareSync(data.password, client.password));
            const isPassword = bcrypt.compareSync(data.password, client.password);
            // console.log(isPassword)
            if (!isPassword) {
                res.status(501).json({
                    message: "Le mot de passe est incorrect!"
                });
            } else {
                const token = jwt.sign(
                    {
                        userId: client._id,
                        email: client.email
                    },
                    'CLIENT12345',
                    {
                        expiresIn: '5h'
                    }
                );
                res.status(200).json({
                    message: "Connecté",
                    token,
                    client
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error '+ error
        })
    }
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