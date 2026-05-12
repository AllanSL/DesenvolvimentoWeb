const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// GET todos clientes
router.get('/clientes', async (req, res) => {
  const respController = clienteController.buscar();
  res.send(respController);
});

// POST criar cliente
router.post('/clientes', async (req, res) => {
  
});

// PUT atualizar cliente
router.put('/clientes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, telefone, data_de_nascimento } = req.body;
    const result = await clienteController.atualizar(id, { nome, email, telefone, data_de_nascimento });
    if (result.affectedRows === 0) return res.status(404).json({ erro: 'Cliente não encontrado' });
    res.json({ mensagem: 'Cliente atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// DELETE cliente
router.delete('/clientes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await clienteController.remover(id);
    if (result.affectedRows === 0) return res.status(404).json({ erro: 'Cliente não encontrado' });
    res.json({ mensagem: 'Cliente removido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;
