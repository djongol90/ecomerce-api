import express from "express";
import bodyParser from 'body-parser';
const morgan = require('morgan');

const app = express();

const fournisseurRouter = require('./routes/fournisseur.route');
const produitRouter = require('./routes/produit.route');



app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))




app.use('/api/fournisseur', fournisseurRouter);
app.use('/api/produit', produitRouter);

module.exports = app;