const path = require ('path');
const express = require('express');
const app = express(); // creation de l'application express
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); // on dit a express d'utiliser le dossier public pour charger les pages statiques

app.get('*',(req, res)=>{
    res.sendFile(path.join(publicPath, 'index.html')); // on rerouter les requetes differentes du publicFolder vers index.html
});

app.listen(port,() => { // démarre le server sur le port 3000
    console.log('Server is up!')
});