import express from 'express';

import *as FournisseurCtrl  from '../controllers/fournisseur.controller'


const fournisseurRouter = express.Router();

fournisseurRouter.post('/login', FournisseurCtrl.login);
fournisseurRouter.post('/add-fournisseur', FournisseurCtrl.addFournisseur);

fournisseurRouter.get('/', FournisseurCtrl.getFournisseurs);




module.exports = fournisseurRouter;