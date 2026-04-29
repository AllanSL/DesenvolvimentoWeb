// Exemplo de rota inicial
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('API de rotas funcionando!');
});

module.exports = router;
