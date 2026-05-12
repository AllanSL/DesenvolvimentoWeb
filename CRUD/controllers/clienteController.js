// controllers/clienteController.js
const clienteModel = require('../models/clienteModels');

class clienteController { // Controller para gerenciar clientes
  buscar() {
    return clienteModel.listar(); // Retorna a lista de clientes do modelo
  }

  buscarPorId(id) {
    return clienteModel.selecionar(id); // Retorna um cliente específico do modelo
  }

  criar() {
    return "criação realizada com sucesso"; // Retorna uma mensagem de sucesso para criação
  }

  atualizar(id) {
    return "atualizado o cliente com código " + id + " com sucesso"; // Retorna uma mensagem de sucesso para atualização
  }

  remover(id) {
    return "remoção do cliente com código " + id + " realizada com sucesso"; // Retorna uma mensagem de sucesso para remoção
  }
};

module.exports = clienteController;
