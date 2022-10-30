'use strict'

const {reply200, reply400, defaultPageQueryString, defaultQueryString} = require("../std.schema");
const shared = {
    definitions: {
        jenisUsahaDto: {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "nama": {
                    "type": "string"
                },
                "enabled": {
                    "type": "boolean"
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
    description: "Get Jenis Usaha",
    tags: ["jenis-usaha"],
    querystring: defaultPageQueryString,
    response: {
        200: reply200(shared.definitions.jenisUsahaDto)
    }
}

const getComboSchema = {
    description: "Get Jenis Usaha in combobox mode",
    tags: ["jenis-usaha"],
    querystring: defaultQueryString,
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
    "description": "Add Jenis Usaha",
    tags: ["jenis-usaha"],
    body: {},
    response: {
        200: reply200(shared.definitions.jenisUsahaDto),
        400: reply400()
    }
}

const deleteSchema = {
    description: "Delete Jenis Usaha",
    tags: ["jenis-usaha"],
    params: {
        id: { type: "number" }
    },
    response: {
        200: reply200(),
        400: reply400()
    }
}

const putSchema = {
    description: "Update Jenis Usaha",
    tags: ["jenis-usaha"],
    params: {
        id: { type: "number" }
    },
    body: {},
    response: {
        200: reply200(shared.definitions.jenisUsahaDto),
        400: reply400()
    }
}

module.exports = { getSchema, getComboSchema, postSchema, deleteSchema, putSchema }