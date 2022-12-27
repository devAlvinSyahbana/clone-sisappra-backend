'use strict'

const { reply200, reply400, defaultPageQueryString } = require("../std.schema");
const shared = {
    definitions: {
        jenisPelanggaranBangunanDto: {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "nama": {
                    "type": "string"
                },
                "is_deleted": {
                    "type": "number"
                },
                "deleted_at": {
                    "type": "string"
                },
                "deleted_by": {
                    "type": "string"
                },
                "created_by": {
                    "type": "string"
                },
                "updated_by": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                }
            },
            "required": []
        }
    }
}

const getSchema = {
    description: "Get Jenis Pelanggaran Bangunan",
    tags: ["jenis-pelanggaran-bangunan"],
    querystring: defaultPageQueryString,
    response: {
        200: reply200(shared.definitions.jenisPelanggaranBangunanDto)
    }
}

const getComboSchema = {
    description: "Get Jenis Pelanggaran Bangunan in combobox mode",
    tags: ["jenis-pelanggaran-bangunan"],
    querystring: {
        "$filter": { type: 'string' },
        "$top": { type: 'number' },
        "$skip": { type: 'number' },
        "$select": { type: 'string' },
        "$orderby": { type: 'string' }
    },
    response: {
        200: reply200({
            type: 'object',
            properties: {
                'value': { type: 'number' },
                'text': { type: 'string' }
            }
        })
    }
}

const postSchema = {
    "description": "Add Jenis Pelanggaran Bangunan",
    tags: ["jenis-pelanggaran-bangunan"],
    body: {},
    response: {
        200: reply200(shared.definitions.jenisPelanggaranBangunanDto),
        400: reply400()
    }
}

const deleteSchema = {
    description: "Delete Jenis Pelanggaran Bangunan",
    tags: ["jenis-pelanggaran-bangunan"],
    params: {
        id: { type: "number" }
    },
    response: {
        200: reply200(),
        400: reply400()
    }
}

const putSchema = {
    description: "Update Jenis Pelanggaran Bangunan",
    tags: ["jenis-pelanggaran-bangunan"],
    params: {
        id: { type: "number" }
    },
    body: {},
    response: {
        200: reply200(shared.definitions.jenisPelanggaranBangunanDto),
        400: reply400()
    }
}

module.exports = { getSchema, getComboSchema, postSchema, deleteSchema, putSchema }