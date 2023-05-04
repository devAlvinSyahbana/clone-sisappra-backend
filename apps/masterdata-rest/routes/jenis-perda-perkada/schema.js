'use strict'

const {reply200, reply400, defaultPageQueryString} = require("../std.schema");
const shared = {
    definitions: {
        jenisPerdaPerkadaDto: {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "judul": {
                    "type": "string"
                },
                "pasal": {
                    "type": "string"
                },
                "jenis_pelanggaran": {
                    "type": "string"
                },
                "jenis_penertiban": {
                    "type": "string"
                },
                "enabled": {
                    "type": "boolean"
                },
                "is_deleted": {
                    "type": "boolean"
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
            "required": [
                "id"
            ]
        },
        perdaPerkadaForm: {
            "type": "object",
            "properties": {
                "judul": {
                    "type": "string"
                },
                "pasal": {
                    "type": "string"
                },
                "jenis_pelanggaran": {
                    "type": "string"
                },
                "jenis_penertiban": {
                    "type": "string"
                },
            },
            "required": [
                "judul",
                "pasal",
                "jenis_penertiban",
                "jenis_pelanggaran",
            ]
        } 
    }
}

const getSchema = {
    description: "Get Jenis Pasal",
    tags: ["jenis-perda-perkada"],
    querystring: defaultPageQueryString,
    response: {
        200: reply200(shared.definitions.jenisPerdaPerkadaDto)
    }
}

const getComboSchema = {
    description: "Get Jenis Pasal in combobox mode",
    tags: ["jenis-perda-perkada"],
    querystring: defaultPageQueryString,
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
    "description": "Add Jenis Perda Perkada",
    tags: ["jenis-perda-perkada"],
    body: shared.definitions.perdaPerkadaForm,
    response: {
        200: reply200(shared.definitions.jenisPerdaPerkadaDto),
        400: reply400()
    }
}

const deleteSchema = {
    description: "Delete Jenis Perda Perkada",
    tags: ["jenis-perda-perkada"],
    params: {
        id: { type: "number" }
    },
    response: {
        200: reply200(),
        400: reply400()
    }
}

const putSchema = {
    description: "Update Jenis Perda Perkada",
    tags: ["jenis-perda-perkada"],
    params: {
        id: { type: "number" }
    },
    body: shared.definitions.perdaPerkadaForm,
    response: {
        200: reply200(shared.definitions.jenisPerdaPerkadaDto),
        400: reply400()
    }
}

module.exports = { getSchema, getComboSchema, postSchema, deleteSchema, putSchema }