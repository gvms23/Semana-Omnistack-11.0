const knex = require('knex');
const knexConfiguration = require('../../knexfile');

const connection = knex(knexConfiguration.development);

module.exports = connection;