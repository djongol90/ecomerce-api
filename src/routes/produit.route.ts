import express from "express";

import *as ProduitCtrl from '../controllers/produit.controller';

const produitRouter = express.Router();

produitRouter.post('/add-product', ProduitCtrl.addProduct);
produitRouter.get('/', ProduitCtrl.getProduit);


module.exports = produitRouter;