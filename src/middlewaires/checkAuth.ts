import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let tokenData;
        const token = req.headers.authorization;
        const isClient = req.headers.isclient;
        console.log(req.headers)
        if (isClient == "1") {
            tokenData = jwt.verify(token, 'CLIENT12345');
        } else {
            tokenData = jwt.verify(token, 'AZERTY');
        }
        (req as any).userData = tokenData;
        next();
    } catch (error) {
        res.status(500).json({
            message: 'Erreur de connexion: '+error
        })
        throw new Error("error"+error);
        
    }
}