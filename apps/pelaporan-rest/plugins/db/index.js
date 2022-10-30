const fastifyPlugin = require('fastify-plugin')
const fsequelize = require('fastify-sequelize');

const dbConnector = async (server, options, next) => {

    const sequelizeConfig = {
        instance: 'db',
        autoConnect: true,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT,
        caseModel: 'p',
        caseProp: 'o'
    }

    server.register(fsequelize, sequelizeConfig).ready(async () => {

        require('../../models/init-models')(server.db)

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
