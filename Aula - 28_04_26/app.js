const express = require('express'); // Importa o Express
const app = express(); // Cria uma instância do Express
const port = 3000; // Define a porta do servidor
const router = require('./routes/moduleRoute'); // Importa as rotas

app.use(express.json()); // Middleware para parsear JSON

// Importa e usa as rotas
app.use('/', router); // Usa as rotas definidas em moduleRoute.js

// Inicia o servidor
app.listen(port, (error) => {
    if (error) {
        console.error('Erro ao iniciar o servidor:', error);
    } else {
        console.log(`Servidor rodando na porta ${port}`);
    }
});
