import express from "express";

import *as ProduitCtrl from '../controllers/produit.controller';
import { checkAuth } from "../middlewaires/checkAuth";

const produitRouter = express.Router();

produitRouter.post('/add-product',checkAuth, ProduitCtrl.addProduct);
produitRouter.get('/', ProduitCtrl.getProducts);


module.exports = produitRouter;