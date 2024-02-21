import express from 'express';
import *as ClientCtrl  from '../controllers/client.controller';

const clientRouter = express.Router();

clientRouter.post('/login', ClientCtrl.login);

clientRouter.post('/add-client', ClientCtrl.createClient);

clientRouter.get('/', ClientCtrl.getClients);


module.exports = clientRouter;