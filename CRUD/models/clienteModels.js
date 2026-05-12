// models/clienteModels.js
// Model simples para CLIENTES usando Promise para queries
const connection = require('../connections/connect'); // Importa a conexão MySQL

const ClienteModel = {
  // retorna todos os clientes
  listar() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM CLIENTES', (err, results) => { // Consulta SQL para selecionar todos os clientes
        if (err) return reject(err); // Se ocorrer um erro na consulta, rejeita a Promise com o erro
        resolve(results);
      });
    });
  },

  // retorna um cliente pelo id
  selecionar(id) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM CLIENTES WHERE ID = ?', [id], (err, results) => { // Consulta SQL para selecionar um cliente pelo ID
        if (err) return reject(err);
        resolve(results[0] || null); // Retorna o primeiro resultado ou null se não encontrado
      });
    });
  },

  // cria um novo cliente (retorna id inserido)
  criar({ nome, email, telefone, data_de_nascimento }) { // Recebe um objeto com os campos do cliente a ser criado
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO CLIENTES (NOME, EMAIL, TELEFONE, DATA_DE_NASCIMENTO) VALUES (?, ?, ?, ?)`;
      connection.query(sql, [nome, email, telefone || null, data_de_nascimento || null], (err, result) => { // Consulta SQL para inserir um novo cliente
        if (err) return reject(err);
        resolve({ insertId: result.insertId }); // Retorna o ID do cliente inserido
      });
    });
  },

  // atualiza cliente por id
  atualizar(id, fields) { // Recebe o ID do cliente a ser atualizado e um objeto com os campos a serem atualizados
    return new Promise((resolve, reject) => { // Monta a query de atualização dinamicamente com base nos campos fornecidos
      const cols = [];
      const values = [];
      for (const key in fields) { // Itera sobre os campos a serem atualizados e monta a parte SET da query
        cols.push(`${key} = ?`);
        values.push(fields[key]);
      }
      if (cols.length === 0) return resolve({ affectedRows: 0 }); // Se não houver campos para atualizar, retorna sem fazer query
      const sql = `UPDATE CLIENTES SET ${cols.join(', ')} WHERE ID = ?`; // Monta a query de atualização com os campos a serem atualizados
      values.push(id);
      connection.query(sql, values, (err, result) => { // Executa a query de atualização
        if (err) return reject(err);
        resolve(result);
      });
    });
  },

  // remove cliente por id
  remover(id) {
    return new Promise((resolve, reject) => { // Consulta SQL para remover um cliente pelo ID
      connection.query('DELETE FROM CLIENTES WHERE ID = ?', [id], (err, result) => { // Executa a query de remoção
        if (err) return reject(err);
        resolve(result);
      });
    });
  }
};

module.exports = ClienteModel; // Exporta o modelo para ser usado em outros arquivos (como controllers)