'use strict'

const {getSchema, postSchema, deleteSchema, putSchema} = require("./schema");

module.exports = async function (server, opts) {
    const DbSet = () => server.models.LaporanKegiatan

    const GetJenisKegiatanById = (id) => {

    }

    const ValidateJenisKegiatan = (request, jenisKegiatan) => {
        switch (jenisKegiatan.nama) {
            case "SIDANG TIPIRING":
                return true;
            case "PENERTIBAN BANGUNAN":
                return true;
            case "PENERTIBAN MINOL":
                return true;
            case "PENERTIBAN PPKM":
                return true;
            case "LAPORAN MASYARAKAT":
                return true;
            case "PENGAMANAN":
                return true;
            default:
                return true;
        }
    }

    // server.get('/jk', async function(request, reply) {
    //     const d = await server.rest.masterdata().get('jenis-kegiatan').json()
    //     return reply.send({d})
    // })

    server.get('/', { schema: getSchema }, async function (request, reply) {
        return await server.odata.replyPaging(request, reply, DbSet())
    })

    server.post('/', {schema: postSchema, attachValidation: true}, async function (request, reply) {
        if(!request.isMultipart()) {
            return reply.code(403).send({code: 403, success: false, message: "have to support multipart/form-data"})
        }

        if (request.validationError) {
            return reply.code(400).send({success: false, ...request.validationError})
        }

        const jenisKegiatan = GetJenisKegiatanById(request.body.kegiatan_id_jenis_kegiatan)
        if(!jenisKegiatan) {
            return reply.code(400).send({code: 400, success: false, })
        }

        if (!ValidateJenisKegiatan(request, )) {

            return;
        }

        let record = {

        }

        server.entity.markCreated(record, "unknown")

        const actCreated = await DbSet().create(record)

        const data = actCreated.dataValues

        return reply.send({success: true, data: [data]})
    })

    server.delete('/:id', {schema: deleteSchema}, async function (request, reply) {
        const record = await DbSet().findOne({
            where: {
                id: request.params.id,
                ...server.dbfilters.notDeleted
            }
        })

        if (!record)
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
            record.is_deleted = 1
            await record.save()
        }

        return reply.send({success: true})
    })

    server.put('/:id', {schema: putSchema, attachValidation: true}, async function (request, reply) {
        const existCount = await DbSet().count({
            where: {
                id: request.params.id,
                ...server.dbfilters.notDeleted
            }
        })

        if(existCount === 0)
            return reply.status(400).send({success: false, message: `ID (${request.params.id}) not found`, statusCode: 400})

        if (request.validationError) {
            return reply.code(400).send({success: false, ...request.validationError})
        }

        return reply.send({success: true, data: []})
    })
}
