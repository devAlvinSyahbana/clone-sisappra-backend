'use strict'

const {getSchema, postSchema, deleteSchema, putSchema} = require("./schema");

module.exports = async function (server, opts) {
    const DbSet = () => server.models.LaporanKegiatan

    const GetJenisKegiatanById = async (id) => {
        const res = await server.rest.masterdata().get(`jenis-kegiatan/?$filter=id eq ${id}`).json()
        if(res.data != null && res.data.length > 0) return res.data[0]
    }

    server.get('/', { schema: getSchema }, async function (request, reply) {
        return await server.odata.replyPaging(request, reply, DbSet())
    })

    server.post('/', {schema: postSchema, attachValidation: true}, async function (request, reply) {
        if (request.validationError) {
            return reply.code(400).send({success: false, ...request.validationError})
        }

        let record = server.entity.track(request.body).markCreated("unknown")

        const result = await DbSet().create(record)

        return reply.send({success: true, data: [result.dataValues]})
    })

    server.delete('/:id', {schema: deleteSchema}, async function (request, reply) {
        const record = await DbSet().findOne({
            where: {
                id: request.params.id,
                ...server.dbfilters.notDeleted
            }
        })

        if (record == null)
            return reply.status(400).send({
                success: false,
                message: `ID (${request.params.id}) not found`,
                statusCode: 400
            })

        if(request.headers['x-mode'] && request.headers['x-mode'] === 'TEST') {
            await DbSet().destroy({
                where: {
                    id: request.params.id,
                    ...server.dbfilters.notDeleted
                }
            })
        }
        else {
            server.entity.track(record).markDeleted('unknown')
            await record.save()
        }

        return reply.send({success: true})
    })

    server.put('/:id', {schema: putSchema, attachValidation: true}, async function (request, reply) {
        const record = await DbSet().findOne({
            where: {
                id: request.params.id,
                ...server.dbfilters.notDeleted
            }
        })

        if(record == null)
            return reply.status(400).send({success: false, message: `ID (${request.params.id}) not found`, statusCode: 400})

        if (request.validationError) {
            return reply.code(400).send({success: false, ...request.validationError})
        }

        record.set(request.body);

        server.entity.track(record).markModified("unknown");

        await record.save();

        return reply.send({ success: true, data: [record] });
    })
}
