import mongoose from 'mongoose';


const app = require('./app');

const PORT = 3000;
const MONGO_URL = 'mongodb://localhost:27017';




mongoose.connect(`${MONGO_URL}/ecomerceDB`).then(() => {
    console.log('Connected to database '+ MONGO_URL)
    app.listen(PORT, () => {
        console.log('le serveur est lancé sur le port '+ PORT)
    })
}).catch(error => {
    console.log(error);
    throw new Error("Erreur de connexion à la base de donnée!");
    
})



















