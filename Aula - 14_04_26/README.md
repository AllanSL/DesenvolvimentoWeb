# Aula 14/04/26 - CRUD com Node.js

## Conteúdo
- Conceitos de CRUD (Create, Read, Update, Delete)
- Servidor Node.js com Express
- Manipulação de dados em memória
- Rotas HTTP (GET, POST, PUT, DELETE)

## Estrutura do Projeto
```
.
├── index.js          # Servidor principal
├── package.json      # Dependências do projeto
└── README.md        # Este arquivo
```

## Como executar
1. Instale as dependências: `npm install`
2. Execute o servidor: `npm start` ou `node index.js`
3. O servidor rodará em `http://localhost:3000`

## Endpoints
- `GET /` - Retorna todos os dados
- `GET /:id` - Retorna um dado específico
- `POST /` - Cria um novo dado
- `PUT /:id` - Atualiza um dado
- `DELETE /:id` - Deleta um dado
