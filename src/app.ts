import express from "express";
import bodyParser from 'body-parser';
const morgan = require('morgan');

const app = express();

const fournisseurRouter = require('./routes/fournisseur.route');
const produitRouter = require('./routes/produit.route');
const clientRouter = require('./routes/client.route');
const commandeRouter = require('./routes/commande.route')




app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))




app.use('/api/fournisseur', fournisseurRouter);
app.use('/api/produit', produitRouter);
app.use('/api/client', clientRouter);
app.use('/api/commande', commandeRouter);

module.exports = app;