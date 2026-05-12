# Projeto Final - CRUD

## Como rodar
1. Abra a pasta `CRUD`
2. Instale dependências:
   ```bash
   npm install
   ```
3. Crie o banco de dados e tabela (exemplo abaixo)
4. Rode o projeto:
   ```bash
   npm run dev
   ```

## Exemplo SQL para criar banco e tabela
```sql
CREATE DATABASE IF NOT EXISTS crud;
USE crud;

CREATE TABLE IF NOT EXISTS clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);
```

## Estrutura do projeto
```
CRUD/
├── app.js
├── package.json
├── README.md
├── connections/
│   └── connect.js
└── routes/
    ├── clienteRoute.js
    └── moduleRoute.js
```
