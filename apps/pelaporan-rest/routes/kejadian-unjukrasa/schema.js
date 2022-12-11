'use strict'

const {reply200, reply400, defaultPageQueryString} = require("../std.schema");

const shared = {
    type: 'object',
    definitions: {
        summaryLaporanKejadianDto: {
            "title": "Laporan Kejadian",
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
                "kegiatan__jenis_kegiatan_id": {
                    "type": "number"
                },
                "kegiatan__jumlah_personil": {
                    "type": "number"
                },
                "kegiatan__uraian_kegiatan": {
                    "type": "number"
                },
                "kegiatan__tanggal": {
                    "type": "string"
                },
                "kegiatan__jam": {
                    "type": "string"
                },
                "kegiatan__lokasi": {
                    "type": "string"
                },
                "kegiatan__asal_laporan_id": {
                    "type": "number"
                },
                "kegiatan__jenis_pengamanan_id": {
                    "type": "number"
                },
                "kegiatan__masalah": {
                    "type": "string"
                },
                "kegiatan__pemecahan_masalah": {
                    "type": "string"
                },
                "kegiatan__instansi_terkait": {
                    "type": "string"
                },
                "tindak_lanjut__administrasi__jenis_pasal_id": {
                    "type": "number"
                },
                "tindak_lanjut__administrasi__jenis_penertiban": {
                    "type": "string"
                },
                "tindak_lanjut__administrasi__jenis_pelanggaran": {
                    "type": "string"
                },
                "tindak_lanjut__administrasi__perda_perkada": {
                    "type": "string"
                },
                "tindak_lanjut__administrasi__penyelesaian_id": {
                    "type": "number"
                },
                "tindak_lanjut__administrasi__penyelesaian_khusus_id": {
                    "type": "number"
                },
                "tindak_lanjut__sidang__tanggal": {
                    "type": "string"
                },
                "tindak_lanjut__sidang__jumlah_pelanggar_hadir": {
                    "type": "number"
                },
                "tindak_lanjut__sidang__jumlah_pelanggar_tidak_hadir": {
                    "type": "number"
                },
                "tindak_lanjut__sidang__jumlah_pelanggar_verstek": {
                    "type": "number"
                },
                "tindak_lanjut__identitas_pelanggar__no_bap": {
                    "type": "string"
                },
                "tindak_lanjut__identitas_pelanggar__nama_penanggung_jawab": {
                    "type": "string"
                },
                "tindak_lanjut__identitas_pelanggar__nama_tempat_usaha": {
                    "type": "string"
                },
                "tindak_lanjut__identitas_pelanggar__alamat_tempat_usaha": {
                    "type": "string"
                },
                "tindak_lanjut__identitas_pelanggar__nik": {
                    "type": "string"
                },
                "tindak_lanjut__identitas_pelanggar__alamat": {
                    "type": "string"
                },
                "tindak_lanjut__identitas_pelanggar__jenis_usaha_id": {
                    "type": "number"
                },
                "tindak_lanjut__identitas_pelanggar__nama_pemilik": {
                    "type": "string"
                },
                "tindak_lanjut__jenis_penindakan_id": {
                    "type": "number"
                },
                "tindak_lanjut__jumlah_pelanggar": {
                    "type": "number"
                },
                "tindak_lanjut__denda__pengadilan": {
                    "type": "number"
                },
                "tindak_lanjut__denda__non_pengadilan": {
                    "type": "number"
                },
                "tindak_lanjut__denda__tanggal_setor": {
                    "type": "string"
                },
                "tindak_lanjut__denda__nama_bank": {
                    "type": "string"
                },
                "tindak_lanjut__denda__no_validasi_bank": {
                    "type": "string"
                },
                "tindak_lanjut__rekom_citata__jenis_pelanggaran_id": {
                    "type": "number"
                },
                "tindak_lanjut__rekom_citata__no_sp": {
                    "type": "string"
                },
                "tindak_lanjut__rekom_citata__tanggal_no_sp": {
                    "type": "string"
                },
                "tindak_lanjut__rekom_citata__no_segel": {
                    "type": "string"
                },
                "tindak_lanjut__rekom_citata__tanggal_segel": {
                    "type": "string"
                },
                "tindak_lanjut__rekom_citata__no_spb": {
                    "type": "string"
                },
                "tindak_lanjut__rekom_citata__tanggal_spb": {
                    "type": "string"
                },
                "tindak_lanjut__rekom_citata__no_rekomtek": {
                    "type": "string"
                },
                "tindak_lanjut__rekom_citata__tanggal_rekomtek": {
                    "type": "string"
                },
                "tindak_lanjut__rekom_citata__tanggal_peninjauan_lapangan": {
                    "type": "string"
                },
                "tindak_lanjut__jumlah_minol_merk": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "merk": {
                                "type": "string"
                            },
                            "jumlah": {
                                "type": "number"
                            }
                        },
                        "required": [
                            "merk",
                            "jumlah"
                        ]
                    }
                },
                "dokumentasi": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "file": {
                                "type": "string"
                            },
                            "keterangan": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "file",
                            "keterangan"
                        ]
                    }
                }
            },
            "required": [
                "id",
                "kegiatan__jenis_kegiatan_id",
                "kegiatan__jumlah_personil",
                "kegiatan__uraian_kegiatan",
                "kegiatan__tanggal",
                "kegiatan__jam",
                "kegiatan__lokasi",
                "kegiatan__asal_laporan_id",
                "kegiatan__jenis_pengamanan_id",
                "kegiatan__masalah",
                "kegiatan__pemecahan_masalah",
                "kegiatan__instansi_terkait",
                "tindak_lanjut__administrasi__jenis_pasal_id",
                "tindak_lanjut__administrasi__jenis_penertiban",
                "tindak_lanjut__administrasi__jenis_pelanggaran",
                "tindak_lanjut__administrasi__perda_perkada",
                "tindak_lanjut__administrasi__penyelesaian_id",
                "tindak_lanjut__administrasi__penyelesaian_khusus_id",
                "tindak_lanjut__sidang__tanggal",
                "tindak_lanjut__sidang__jumlah_pelanggar_hadir",
                "tindak_lanjut__sidang__jumlah_pelanggar_tidak_hadir",
                "tindak_lanjut__sidang__jumlah_pelanggar_verstek",
                "tindak_lanjut__identitas_pelanggar__no_bap",
                "tindak_lanjut__identitas_pelanggar__nama_penanggung_jawab",
                "tindak_lanjut__identitas_pelanggar__nama_tempat_usaha",
                "tindak_lanjut__identitas_pelanggar__alamat_tempat_usaha",
                "tindak_lanjut__identitas_pelanggar__nik",
                "tindak_lanjut__identitas_pelanggar__alamat",
                "tindak_lanjut__identitas_pelanggar__jenis_usaha_id",
                "tindak_lanjut__identitas_pelanggar__nama_pemilik",
                "tindak_lanjut__jenis_penindakan_id",
                "tindak_lanjut__jumlah_pelanggar",
                "tindak_lanjut__denda__pengadilan",
                "tindak_lanjut__denda__non_pengadilan",
                "tindak_lanjut__denda__tanggal_setor",
                "tindak_lanjut__denda__nama_bank",
                "tindak_lanjut__denda__no_validasi_bank",
                "tindak_lanjut__rekom_citata__jenis_pelanggaran_id",
                "tindak_lanjut__rekom_citata__no_sp",
                "tindak_lanjut__rekom_citata__tanggal_no_sp",
                "tindak_lanjut__rekom_citata__no_segel",
                "tindak_lanjut__rekom_citata__tanggal_segel",
                "tindak_lanjut__rekom_citata__no_spb",
                "tindak_lanjut__rekom_citata__tanggal_spb",
                "tindak_lanjut__rekom_citata__no_rekomtek",
                "tindak_lanjut__rekom_citata__tanggal_rekomtek",
                "tindak_lanjut__rekom_citata__tanggal_peninjauan_lapangan"
            ]
        },
        pelaporanKejadianForm: {
            "title": "Pelaporan Kejadian UnjukRasa Form",
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
                "tindak__jml_massa": {
                    "type": "number"
                },
                "tindak__tuntutan": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "tindak__penanggung_jawab": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
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
                "tindak__jml_massa",
                "tindak__tuntutan",
                "tindak__penanggung_jawab",
                "tindak__jenis_bantuan_satpolpp",
                "tindak__jenis_bantuan_instansiterkait",
                "tindak__korban_jiwa",
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