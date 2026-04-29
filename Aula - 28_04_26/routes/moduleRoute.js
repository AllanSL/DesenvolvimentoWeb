// Este arquivo é responsável por importar e usar as rotas do projeto

const clienteRoute = require('./clienteRoute');
const produtoRoute = require('./produtoRoute');

// Exporta as rotas para serem usadas no app.js
module.exports = (app) => {
    app.use(clienteRoute);
    app.use(produtoRoute);
};
