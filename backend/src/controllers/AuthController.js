const connectToTable = require('../database/connection');

const AuthController = {
    async login(request, response) {

        const ong_id = request.body.id;
        const ong = await connectToTable('ong')
            .where('id', ong_id)
            .select('nome')
            .first();

        if (!ong) {
            response.status(404).json({
                error: 'Nenhuma Ong foi encontrada com esse Id'
            });
        }

        return response.json(ong);
    }
};

module.exports = AuthController;