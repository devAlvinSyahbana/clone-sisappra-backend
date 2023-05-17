'use strict'

const {reply200, reply400, defaultPageQueryString} = require("../std.schema");
const shared = {
    definitions: {
        jenisPenertibanDto: {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "nama": {
                    "type": "string"
                },
                "kode": {
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
                "created_at": {
                    "type": "string"
                },
                "created_by": {
                    "type": "string"
                },
                "updated_by": {
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
        penertibanForm: {
            "type": "object",
            "properties": {
                "nama": {
                    "type": "string"
                },
            },
            "required": [
                "nama",
            ]
        }
    }
}

const getSchema = {
    description: "Get Jenis Penertiban",
    tags: ["jenis-penertiban"],
    querystring: defaultPageQueryString,
    response: {
        200: reply200(shared.definitions.jenisPenertibanDto)
    }
}

const getComboSchema = {
    description: "Get Jenis Penertiban in combobox mode",
    tags: ["jenis-penertiban"],
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
    "description": "Add Jenis Penertiban",
    tags: ["jenis-penertiban"],
    body: shared.definitions.penertibanForm,
    response: {
        200: reply200(shared.definitions.jenisPenertibanDto),
        400: reply400()
    }
}

const deleteSchema = {
    description: "Delete Jenis Penertiban",
    tags: ["jenis-penertiban"],
    params: {
        id: { type: "number" }
    },
    response: {
        200: reply200(),
        400: reply400()
    }
}

const putSchema = {
    description: "Update Jenis Penertiban",
    tags: ["jenis-penertiban"],
    params: {
        id: { type: "number" }
    },
    body: shared.definitions.penertibanForm,
    response: {
        200: reply200(shared.definitions.jenisPenertibanDto),
        400: reply400()
    }
}

module.exports = { getSchema, getComboSchema, postSchema, deleteSchema, putSchema }