'use strict'

const {reply200, reply400, defaultPageQueryString} = require("../std.schema");
const shared = {
    definitions: {
        jenisPenyelesaianDto: {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "jenis_kegiatan_id": {
                    "type": "number"
                },
                "jenis_penertiban": {
                    "type": "string"
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
    description: "Get Jenis Penyelesaian",
    tags: ["jenis-penyelesaian"],
    querystring: defaultPageQueryString,
    response: {
        200: reply200(shared.definitions.jenisPenyelesaianDto)
    }
}

const getComboSchema = {
    description: "Get Jenis Penyelesaian in combobox mode",
    tags: ["jenis-penyelesaian"],
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
                'text': {type: 'string'}
            }
        })
    }
}

const postSchema = {
    "description": "Add Jenis Penyelesaian",
    tags: ["jenis-penyelesaian"],
    body: {},
    response: {
        200: reply200(shared.definitions.jenisPenyelesaianDto),
        400: reply400()
    }
}

const deleteSchema = {
    description: "Delete Jenis Penyelesaian",
    tags: ["jenis-penyelesaian"],
    params: {
        id: { type: "number" }
    },
    response: {
        200: reply200(),
        400: reply400()
    }
}

const putSchema = {
    description: "Update Jenis Penyelesaian",
    tags: ["jenis-penyelesaian"],
    params: {
        id: { type: "number" }
    },
    body: {},
    response: {
        200: reply200(shared.definitions.jenisPenyelesaianDto),
        400: reply400()
    }
}

module.exports = { getSchema, getComboSchema, postSchema, deleteSchema, putSchema }