const express = require('express');
const OngController = require('./controllers/OngController');
const CasoController = require('./controllers/CasoController');
const AuthController = require('./controllers/AuthController');

// desacopla o módulo Router para essa variável, sem usar o app.
const routes = express.Router();

routes.post('/auth/login', AuthController.login);

routes.get('/ongs', OngController.get);
routes.post('/ongs', OngController.create);
routes.get('/ongs/:id/casos', CasoController.getByOngId);

routes.get('/casos', CasoController.get);
routes.post('/casos', CasoController.create);
routes.delete('/casos/:id', CasoController.delete);

module.exports = routes;