const Router = require('express');Router(); // Importa o Router do Express

// const { Router } = require('express'); // Importa o Router do Express
const router = Router(); // Cria uma instância do Router

// CRUD

// GET para consultar clientes
router.get('/clientes', (req, res) => {
    res.send('Clientes consultados com sucesso!');
});

// POST para criar um novo cliente
router.post('/clientes', (req, res) => {
    res.send('Cliente cadastrado com sucesso!');
});

// PUT para atualizar um cliente existente
router.put('/clientes/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Cliente com ID ${id} atualizado com sucesso!`);
});

// DELETE para remover um cliente
router.delete('/clientes/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Cliente com ID ${id} removido com sucesso!`);
});

module.exports = router;