// table.js - cria banco e tabelas para o projeto CRUD usando uma classe
const mysql = require('mysql');

// Ajuste as credenciais se necessário
const config = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456'
};

const dbName = 'crud';

class Tables {
  constructor(connectionConfig) {
    this.config = connectionConfig || config;
    this.connect = mysql.createConnection(this.config);
  }

  createDatabaseAndUse(callback) {
    this.connect.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`` , (err) => {
      if (err) return callback(err);
      this.connect.changeUser({ database: dbName }, callback);
    });
  }

  createTableCliente(cb) {
    const sql = `
      CREATE TABLE IF NOT EXISTS CLIENTES (
        ID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        NOME VARCHAR(100) NOT NULL,
        EMAIL VARCHAR(100) NOT NULL UNIQUE,
        TELEFONE VARCHAR(15),
        DATA_DE_NASCIMENTO DATE,
        DATA_CADASTRO DATE DEFAULT (CURRENT_DATE)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `;

    this.connect.query(sql, (error) => {
      if (error) {
        console.log('Erro ao criar tabela CLIENTES:');
        console.log(error.message);
        return;
      }
      console.log('Tabela CLIENTES criada ou já existe.');
    });
  }

  close() {
    this.conn.end();
  }
}

module.exports = Tables;

// Se executado diretamente, cria o banco e a tabela
if (require.main === module) {
  const tables = new Tables();
  tables.conn.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao MySQL:', err.message);
      process.exit(1);
    }

    console.log('Conectado ao MySQL. Criando banco e tabela CLIENTES...');

    tables.createDatabaseAndUse((err) => {
      if (err) {
        console.error('Erro ao criar/selecionar banco:', err.message);
        tables.close();
        process.exit(1);
      }

      tables.createTableCliente((err) => {
        if (err) {
          console.error('Erro ao criar tabela CLIENTES:', err.message);
          tables.close();
          process.exit(1);
        }

        console.log('Tabela CLIENTES criada com sucesso.');
        tables.close();
      });
    });
  });
}

module.exports = new Tables();
