const connectToTable = require('../database/connection');
const crypto = require('crypto');
const tableName = 'ong';

const OngController = {
    async get(request, response) {
        const ongs = await connectToTable(tableName).select('*');
        return response.json(ongs);
    },
    async create(request, response) {
        console.log('body', request.body);

        const {
            nome,
            email,
            whatsapp,
            cidade,
            uf
        } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connectToTable(tableName).insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            uf
        });

        return response.json({
            id
        });
    }
};

module.exports = OngController;