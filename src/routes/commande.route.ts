import express from 'express';
import *as CommandeCtrl from '../controllers/commande.controller';

const commandeRouter = express.Router();

commandeRouter.post('/new-commande',CommandeCtrl.createCommande);

commandeRouter.get('/',CommandeCtrl.getCommandes);


module.exports = commandeRouter;