'use strict'

const { reply200, reply400, defaultPageQueryString } = require("../std.schema");

const shared = {
    type: 'object',
    definitions: {
        summaryLaporanTamuDaerahDto: {
            "title": "Laporan TamuDaerah",
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
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
                },
                "tanggal_kunjungan": {
                    "type": "string"
                },
                "waktu_mulai_kunjungan": {
                    "type": "string"
                },
                "waktu_selesai_kunjungan": {
                    "type": "string"
                },
                "asal_instansi": {
                    "type": "string"
                },
                "jml_pengunjung": {
                    "type": "number"
                },
                "maksud_dan_tujuan": {
                    "type": "string"
                },
                "pejabat_penerima_kunjungan": {
                    "type": "string"
                },
                "tempat_kunjungan": {
                    "type": "string"
                },
            },
            "required": []
        },
        pelaporanTamuDaerahForm: {
            "title": "Pelporan Form TamuDaerah",
            "type": "object",
            "properties": {
                "tanggal_kunjungan": {
                    "type": "string",
                    "format": "date"
                },
                "waktu_mulai_kunjungan": {
                    "type": "string",
                    "format": "time"
                },
                "waktu_selesai_kunjungan": {
                    "type": "string",
                    "format": "time"
                },
                "asal_instansi": {
                    "type": "string"
                },
                "jml_pengunjung": {
                    "type": "number"
                },
                "maksud_dan_tujuan": {
                    "type": "string"
                },
                "pejabat_penerima_kunjungan": {
                    "type": "string"
                },
                "tempat_kunjungan": {
                    "type": "string"
                },
            },
            "required": [
                "tanggal_kunjungan",
                "waktu_mulai_kunjungan",
                "waktu_selesai_kunjungan",
                "asal_instansi",
                "jml_pengunjung",
                "maksud_dan_tujuan",
                "pejabat_penerima_kunjungan",
                "tempat_kunjungan",
            ]
        },
        deleteId: {
            "title": "Laporan TamuDaerah",
            "type": "object",
            "properties": {
                "deleted_by": {
                    "type": "string"
                },
            },
            "required": [
                "deleted_by",
            ]
        },
    }
}

const getSchema = {
    description: "Get Laporan TamuDaerah",
    tags: ["laporan-tamudaerah"],
    querystring: defaultPageQueryString,
    response: {
        200: reply200(shared.definitions.summaryLaporanTamuDaerahDto)
    }
}

const postSchema = {
    "description": "Add Laporan TamuDaerah",
    tags: ["laporan-tamudaerah"],
    body: shared.definitions.pelaporanTamuDaerahForm,
    response: {
        200: reply200(shared.definitions.summaryLaporanTamuDaerahDto),
        400: reply400()
    }
}

const deleteSchema = {
    description: "Delete Laporan TamuDaerah",
    tags: ["laporan-tamudaerah"],
    params: {
        id: { type: "number" }
    },
    body: shared.definitions.deleteId,
    response: {
        200: reply200(shared.definitions.deleteId),
        400: reply400()
    }
}

const putSchema = {
    description: "Update Laporan TamuDaerah",
    tags: ["laporan-tamudaerah"],
    params: {
        id: { type: "number" }
    },
    body: shared.definitions.pelaporanTamuDaerahForm,
    response: {
        200: reply200(shared.definitions.summaryLaporanTamuDaerahDto),
        400: reply400()
    }
}

module.exports = { getSchema, postSchema, deleteSchema, putSchema }
