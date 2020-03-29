const express = require('express');
// desacopla o módulo Router para essa variável, sem usar o app.
const routes = express.Router();

const OngController = require('./controllers/OngController');
const CasoController = require('./controllers/CasoController');
const AuthController = require('./controllers/AuthController');


routes.post('/api/auth/login', AuthController.login);

routes.get('/api/ongs', OngController.get);
routes.post('/api/ongs', OngController.create);
routes.get('/api/ongs/:id/casos', CasoController.getByOngId);

routes.get('/api/casos', CasoController.get);
routes.post('/api/casos', CasoController.create);
routes.delete('/api/casos/:id', CasoController.delete);

module.exports = routes;