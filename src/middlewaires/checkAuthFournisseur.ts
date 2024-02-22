import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;
        console.log(req.headers)
        const tokenData = jwt.verify(token, 'AZERTY');
        (req as any).userData = tokenData;
        next();
    } catch (error) {
        res.status(500).json({
            message: 'Erreur de connexion: '+error
        })
        throw new Error("error"+error);
        
    }
}