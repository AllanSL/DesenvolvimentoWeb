const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/moduleRoute'); // Importa as rotas

router(app);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
