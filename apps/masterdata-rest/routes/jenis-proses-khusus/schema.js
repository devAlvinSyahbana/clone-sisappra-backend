'use strict'

const { reply200, reply400, defaultPageQueryString } = require("../std.schema");
const shared = {
    definitions: {
        jenisProsesKhususDto: {
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
    description: "Get Jenis Proses Khusus",
    tags: ["jenis-proses-khusus"],
    querystring: defaultPageQueryString,
    response: {
        200: reply200(shared.definitions.jenisAsalLaporanDto)
    }
}

const getComboSchema = {
    description: "Get Jenis Proses Khusus in combobox mode",
    tags: ["jenis-proses-khusus"],
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
    "description": "Add Jenis Proses Khusus",
    tags: ["jenis-proses-khusus"],
    body: {},
    response: {
        200: reply200(shared.definitions.jenisAsalLaporanDto),
        400: reply400()
    }
}

const deleteSchema = {
    description: "Delete Jenis Proses Khusus",
    tags: ["jenis-proses-khusus"],
    params: {
        id: { type: "number" }
    },
    response: {
        200: reply200(),
        400: reply400()
    }
}

const putSchema = {
    description: "Update Jenis Asal Laporan",
    tags: ["jenis-proses-khusus"],
    params: {
        id: { type: "number" }
    },
    body: {},
    response: {
        200: reply200(shared.definitions.jenisAsalLaporanDto),
        400: reply400()
    }
}

module.exports = { getSchema, getComboSchema, postSchema, deleteSchema, putSchema }