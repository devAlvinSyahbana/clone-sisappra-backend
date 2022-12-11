'use strict'

const {reply200, reply400, defaultPageQueryString} = require("../std.schema");

const shared = {
    type: 'object',
    definitions: {
        summaryLaporanKejadianDto: {
            "title": "Laporan Kejadian Dto",
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
                "kejadian__tanggal": {
                    "type": "string"
                },
                "kejadian__waktu_start": {
                    "type": "string"
                },
                "kejadian__waktu_end": {
                    "type": "string"
                },
                "kejadian__kota_id": {
                    "type": "number"
                },
                "kejadian__kecamatan_id": {
                    "type": "number"
                },
                "kejadian__kelurahan_id": {
                    "type": "number"
                },
                "kejadian__alamat": {
                    "type": "string"
                },
                "kejadian__jenis_kegiatan_id": {
                    "type": "number"
                },
                "kejadian__uraian_kejadian": {
                    "type": "string"
                },
                "kejadian__jml_personil_satpolpp": {
                    "type": "number"
                },
                "kejadian__jml_personil_instansilain": {
                    "type": "number"
                },
                "kejadian__ketinggian_air": {
                    "type": "number"
                },
                "kejadian__pengungsi": {
                    "type": "number"
                },
                "kejadian__pengungsi_kk": {
                    "type": "number"
                },
                "kejadian__lokasi_penampungan": {
                    "type": "string"
                },
                "kejadian__lokasi_dapur_umum": {
                    "type": "string"
                },
                "tindak__jenis_bantuan_satpolpp": {
                    "type": "array",
                    "items": {
                        "type": "number"
                    }
                },
                "tindak__jenis_bantuan_instansiterkait": {
                    "type": "array",
                    "items": {
                        "type": "number"
                    }
                },
                "tindak__korban_jiwa": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "pria": {
                                "type": "number"
                            },
                            "wanita": {
                                "type": "number"
                            }
                        },
                        "required": [
                            "id",
                            "pria",
                            "wanita"
                        ]
                    }
                },
                "tindak__korban_material": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "jml": {
                                "type": "number"
                            }
                        },
                        "required": [
                            "id",
                            "jml"
                        ]
                    }
                },
                "tindak__dokumentasi": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "file_uploadResult": {
                                "type": "object",
                                "properties": {
                                    "bucket": {
                                        "type": "string"
                                    },
                                    "key": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "bucket",
                                    "key"
                                ]
                            }
                        },
                        "required": [
                            "file_uploadResult"
                        ]
                    }
                }
            },
            "required": [
                "kejadian__tanggal",
                "kejadian__waktu_start",
                "kejadian__waktu_end",
                "kejadian__kota_id",
                "kejadian__kecamatan_id",
                "kejadian__kelurahan_id",
                "kejadian__alamat",
                "kejadian__jenis_kegiatan_id",
                "kejadian__uraian_kejadian",
                "kejadian__jml_personil_satpolpp",
                "kejadian__jml_personil_instansilain",
                "kejadian__ketinggian_air",
                "kejadian__pengungsi",
                "kejadian__pengungsi_kk",
                "kejadian__lokasi_penampungan",
                "kejadian__lokasi_dapur_umum",
                "tindak__jenis_bantuan_satpolpp",
                "tindak__jenis_bantuan_instansiterkait",
                "tindak__korban_jiwa",
                "tindak__korban_material",
                "tindak__dokumentasi"
            ]
        },
        pelaporanKejadianForm: {
            "title": "Pelaporan Form Kejadian Banjir",
            "type": "object",
            "properties": {
                "kejadian__tanggal": {
                    "type": "string"
                },
                "kejadian__waktu_start": {
                    "type": "string"
                },
                "kejadian__waktu_end": {
                    "type": "string"
                },
                "kejadian__kota_id": {
                    "type": "number"
                },
                "kejadian__kecamatan_id": {
                    "type": "number"
                },
                "kejadian__kelurahan_id": {
                    "type": "number"
                },
                "kejadian__alamat": {
                    "type": "string"
                },
                "kejadian__jenis_kegiatan_id": {
                    "type": "number"
                },
                "kejadian__uraian_kejadian": {
                    "type": "string"
                },
                "kejadian__jml_personil_satpolpp": {
                    "type": "number"
                },
                "kejadian__jml_personil_instansilain": {
                    "type": "number"
                },
                "kejadian__ketinggian_air": {
                    "type": "number"
                },
                "kejadian__pengungsi": {
                    "type": "number"
                },
                "kejadian__pengungsi_kk": {
                    "type": "number"
                },
                "kejadian__lokasi_penampungan": {
                    "type": "string"
                },
                "kejadian__lokasi_dapur_umum": {
                    "type": "string"
                },
                "tindak__jenis_bantuan_satpolpp": {
                    "type": "array",
                    "items": {
                        "type": "number"
                    }
                },
                "tindak__jenis_bantuan_instansiterkait": {
                    "type": "array",
                    "items": {
                        "type": "number"
                    }
                },
                "tindak__korban_jiwa": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "pria": {
                                "type": "number"
                            },
                            "wanita": {
                                "type": "number"
                            }
                        },
                        "required": [
                            "id",
                            "pria",
                            "wanita"
                        ]
                    }
                },
                "tindak__korban_material": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "jml": {
                                "type": "number"
                            }
                        },
                        "required": [
                            "id",
                            "jml"
                        ]
                    }
                },
                "tindak__dokumentasi": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "file_uploadResult": {
                                "type": "object",
                                "properties": {
                                    "bucket": {
                                        "type": "string"
                                    },
                                    "key": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "bucket",
                                    "key"
                                ]
                            }
                        },
                        "required": [
                            "file_uploadResult"
                        ]
                    }
                }
            },
            "required": [
                "kejadian__tanggal",
                "kejadian__waktu_start",
                "kejadian__waktu_end",
                "kejadian__kota_id",
                "kejadian__kecamatan_id",
                "kejadian__kelurahan_id",
                "kejadian__alamat",
                "kejadian__jenis_kegiatan_id",
                "kejadian__uraian_kejadian",
                "kejadian__jml_personil_satpolpp",
                "kejadian__jml_personil_instansilain",
                "kejadian__ketinggian_air",
                "kejadian__pengungsi",
                "kejadian__pengungsi_kk",
                "kejadian__lokasi_penampungan",
                "kejadian__lokasi_dapur_umum",
                "tindak__jenis_bantuan_satpolpp",
                "tindak__jenis_bantuan_instansiterkait",
                "tindak__korban_jiwa",
                "tindak__korban_material",
                "tindak__dokumentasi"
            ]
        }
    }
}

const getSchema = {
    description: "Get Laporan Kejadian",
    tags: ["laporan-kejadian"],
    querystring: defaultPageQueryString,
    response: {
        200: reply200(shared.definitions.summaryLaporanKejadianDto)
    }
}

const postSchema = {
    "description": "Add Laporan Kejadian",
    tags: ["laporan-kejadian"],
    body: shared.definitions.pelaporanKejadianForm,
    response: {
        200: reply200(shared.definitions.summaryLaporanKejadianDto),
        400: reply400()
    }
}

const deleteSchema = {
    description: "Delete Laporan Kejadian",
    tags: ["laporan-kejadian"],
    params: {
        id: {type: "number"}
    },
    response: {
        200: reply200(),
        400: reply400()
    }
}

const putSchema = {
    description: "Update Laporan Kejadian",
    tags: ["laporan-kejadian"],
    params: {
        id: {type: "number"}
    },
    body: shared.definitions.pelaporanKejadianForm,
    response: {
        200: reply200(shared.definitions.summaryLaporanKejadianDto),
        400: reply400()
    }
}

module.exports = {getSchema, postSchema, deleteSchema, putSchema}
