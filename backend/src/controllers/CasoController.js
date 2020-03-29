const connectToTable = require('../database/connection');
const tableName = 'caso';

const CasoController = {
    async get(request, response) {

        const {
            page = 1
        } = request.query;

        const count = await connectToTable(tableName)
            .count()
            .first();

        const casos = await connectToTable(tableName)
            .join('ong', 'ong.id', '=', 'caso.ong_id')
            .limit(10)
            .offset((page - 1) * 10)
            .select(
                [
                    'caso.*',
                    'ong.nome',
                    'ong.email',
                    'ong.whatsapp',
                    'ong.cidade',
                    'ong.uf'
                ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(casos);
    },
    async getByOngId(request, response) {
        const ong_id = request.params.id;

        return response.json(await connectToTable(tableName)
            .where('ong_id', ong_id)
            .select('*'));
    },
    async create(request, response) {
        console.log('body', request.body);

        const {
            titulo,
            descricao,
            valor
        } = request.body;

        const ong_id = request.headers.authorization;
        const [id] = await connectToTable(tableName).insert({
            titulo,
            descricao,
            valor,
            ong_id,
        });

        return response.json({
            id
        });
    },
    async delete(request, response) {
        const {
            id
        } = request.params;
        const ong_id = request.headers.authorization;

        const caso = await connectToTable(tableName)
            .where('id', id)
            .select('ong_id')
            .first();

        if (caso.ong_id !== ong_id) {
            return response.status(403).json({
                error: 'Operação não permitida'
            });
        }

        await connectToTable(tableName).where('id', id).delete();

        return response.status(204).send();
    }
};

module.exports = CasoController;