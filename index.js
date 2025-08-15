const express = require('express');
const app = express();
const port = 3000;

// Middleware pour servir les fichiers statiques
app.use(express.static('public'));

// Route principale
app.get('/', (req, res) => {
    res.send('Bienvenue dans l outil de synchronisation de fichiers cloud !');
});

app.listen(port, () => {
    console.log(`Serveur à l écoute sur http://localhost:${port}`);
});
