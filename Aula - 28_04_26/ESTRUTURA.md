# Estrutura do Projeto - Aula 28/04/26

```
Aula - 28_04_26/
├── app.js
├── package.json
├── .gitignore
├── README.md
├── ROTAS.md
├── CONEXAO.md
├── ESTRUTURA.md
├── connections/
│   └── connect.js
└── routes/
    ├── index.js
    ├── clienteRoute.js
    └── moduleRoute.js
```

- Separe as rotas em arquivos dentro de `routes/`
- Centralize o uso das rotas em `moduleRoute.js`
- Use `connections/connect.js` para conectar ao MySQL
