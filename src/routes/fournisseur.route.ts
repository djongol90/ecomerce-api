import express from 'express';

import *as FournisseurCtrl  from '../controllers/fournisseur.controller'
import { checkAuth } from '../middlewaires/checkAuth';


const fournisseurRouter = express.Router();

fournisseurRouter.post('/login', FournisseurCtrl.login);
fournisseurRouter.post('/add-fournisseur', FournisseurCtrl.addFournisseur);
fournisseurRouter.put('/update-password', checkAuth, FournisseurCtrl.updatePassword);
fournisseurRouter.put('/update-fournisseur', checkAuth, FournisseurCtrl.updateFournisseur);
fournisseurRouter.get('/fournisseur/:id', FournisseurCtrl.getFournisseur);
fournisseurRouter.get('/', FournisseurCtrl.getFournisseurs);




module.exports = fournisseurRouter;