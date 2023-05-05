'use strict'

const { reply200, reply400, defaultPageQueryString } = require("../std.schema");
const shared = {
    definitions: {
        mapMasterPerdaKegiatanPenyelesaianDto: {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "perda_id": {
                    "type": "number"
                },
                "jenis_kegiatan_id": {
                    "type": "number"
                },
                "jenis_penyelesaian_id": {
                    "type": "number"
                },
                "pasal": {
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

const getJenisKegiatanSchema = {
    description: "Get Map Perda VS Jenis Kegiatan",
    tags: ["map-master-perda"],
    querystring: defaultPageQueryString,
    response: {
        200: reply200(shared.definitions.mapMasterPerdaKegiatanPenyelesaianDto)
    }
}
const getJenisPenyelesaianSchema = {
    description: "Get Map Perda VS Jenis Penyelesaian map_master_perda_jeniskegiatan",
    tags: ["map-master-perda"],
    querystring: defaultPageQueryString,
    response: {
        200: reply200(shared.definitions.mapMasterPerdaKegiatanPenyelesaianDto)
    }
}

const getComboJenisKegiatanSchema = {
    description: "Get Jenis Kegiatan in combobox mode",
    tags: ["map-master-perda"],
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

// const postSchema = {
//     "description": "Add Jenis Pengamanan",
//     tags: ["jenis-pengamanan"],
//     body: {},
//     response: {
//         200: reply200(shared.definitions.mapMasterPerdaKegiatanPenyelesaianDto),
//         400: reply400()
//     }
// }

// const deleteSchema = {
//     description: "Delete Jenis Pengamanan",
//     tags: ["jenis-pengamanan"],
//     params: {
//         id: { type: "number" }
//     },
//     response: {
//         200: reply200(),
//         400: reply400()
//     }
// }

// const putSchema = {
//     description: "Update Jenis Pengamanan",
//     tags: ["jenis-pengamanan"],
//     params: {
//         id: { type: "number" }
//     },
//     body: {},
//     response: {
//         200: reply200(shared.definitions.mapMasterPerdaKegiatanPenyelesaianDto),
//         400: reply400()
//     }
// }

module.exports = { getJenisKegiatanSchema, getComboJenisKegiatanSchema, getJenisPenyelesaianSchema }