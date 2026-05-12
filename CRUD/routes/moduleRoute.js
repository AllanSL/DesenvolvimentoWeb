const clienteRoute = require('./clienteRoute');
// const produtoRoute = require('./produtoRoute');
// const pedidoRoute = require('./pedidoRoute');

module.exports = (app) => {
    app.use('/api', clienteRoute);
    // app.use('/api', produtoRoute);
    // app.use('/api', pedidoRoute);
};
