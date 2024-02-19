import express from "express";
import bodyParser from 'body-parser';
const morgan = require('morgan');

const app = express();


app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))







module.exports = app;