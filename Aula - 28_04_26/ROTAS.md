# Rotas do Projeto Node.js - Aula 28/04/26

## Cliente
- `GET    /clientes`           → Lista todos os clientes
- `POST   /clientes`           → Cria um novo cliente
- `PUT    /clientes/:id`       → Atualiza um cliente existente
- `DELETE /clientes/:id`       → Remove um cliente

## Como adicionar novas rotas
- Crie um novo arquivo de rota em `routes/`
- Importe e use no `moduleRoute.js`

## Exemplo de uso no app.js
```js
const moduleRoute = require('./routes/moduleRoute');
moduleRoute(app);
```
