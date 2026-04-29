const Router = require('express');Router(); // Importa o Router do Express

// const { Router } = require('express'); // Importa o Router do Express
const router = Router(); // Cria uma instância do Router

// CRUD

// GET para consultar produtos
router.get('/produtos', (req, res) => {
    res.send('Produtos consultados com sucesso!');
});

// POST para criar um novo produto
router.post('/produtos', (req, res) => {
    res.send('Produto cadastrado com sucesso!');
});

// PUT para atualizar um produto existente
router.put('/produtos/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Produto com ID ${id} atualizado com sucesso!`);
});

// DELETE para remover um produto
router.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Produto com ID ${id} removido com sucesso!`);
});

module.exports = router;