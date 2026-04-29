# Conexão com MySQL

O arquivo de conexão está em:

```
/connections/connect.js
```

## Exemplo de uso
```js
const connection = require('./connections/connect');

connection.query('SELECT * FROM clientes', (err, results) => {
    if (err) throw err;
    console.log(results);
});
```

- Edite o usuário, senha e banco conforme sua configuração local.
- O arquivo já está pronto para ser importado em qualquer rota ou controller.
