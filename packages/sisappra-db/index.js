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
        track: (record) => {
            return {
                markCreated: function (user) {
                    record = {
                        ...record,
                        is_deleted: false,
                        deleted_by: null,
                        deleted_at: null,
                        created_by: null,
                        created_at: null,
                        updated_by: null,
                        updated_at: null
                    }

                    record.created_at = Date.now()
                    record.created_by = user

                    return record
                },
                markDeleted: (user) => {
                    record.is_deleted = true
                    record.deleted_at = Date.now()
                    record.deleted_by = user

                    return record
                },
                markModified: (user) => {
                    record.updated_at = Date.now()
                    record.updated_by = user

                    return record
                }
            }
        },

    })
}

module.exports = fastifyPlugin(dbConnector)
