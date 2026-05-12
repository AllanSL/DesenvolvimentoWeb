const express = require('express');
const app = express();
const port = 3000;

// middleware para permitir req.body
app.use(express.json());

// Rotas
const moduleRoute = require('./routes/moduleRoute');
moduleRoute(app);

app.listen(port, (error) => {
    if (error) {
        console.error('Erro ao iniciar o servidor:', error);
    } else {
        console.log(`Projeto CRUD rodando em http://localhost:${port}`);
    }
});
