const express = require('express');
const routes = require('./routes'); // Usar ./ para não reconhecer como um pacote externo.
const cors = require('cors');

const app = express();

app.use(cors());

// Add a pipeline de middlewares a conversão de objetos from/to json.
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('servidor Node.js iniciado em: http://localhost:3333');
});