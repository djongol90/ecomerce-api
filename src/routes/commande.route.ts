import express from 'express';
import *as CommandeCtrl from '../controllers/commande.controller';

import { checkAuth } from "../middlewaires/checkAuth";

const commandeRouter = express.Router();

commandeRouter.post('/new-commande', checkAuth, CommandeCtrl.createCommande);

commandeRouter.get('/',CommandeCtrl.getCommandes);


module.exports = commandeRouter;