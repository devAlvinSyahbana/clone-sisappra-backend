const fastifyPlugin = require('fastify-plugin')
const fsequelize = require('fastify-sequelize');

const dbConnector = async (server, options, next) => {

    const {sequelizeConfig, allModels} = options

    server.register(fsequelize, sequelizeConfig).ready(async () => {

        allModels(server.db)

        const modelDecoration = {}
        server.db.modelManager.models.forEach(model => {
            modelDecoration[model.name] = model
        });

        server.decorate('models', modelDecoration)

        server.decorate("dbfilters", {
            notDeleted: {
                is_deleted: 0
            }
        })

        console.log('DB Ready');
        next();
    })

    server.decorate('entity', {
        markCreated: function (record, user) {
            record.created_at = Date.now()
            record.created_by = user
        }
    })
}

module.exports = fastifyPlugin(dbConnector)
