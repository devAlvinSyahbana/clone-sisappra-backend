'use strict'

const { reply200, reply400, defaultPageQueryString } = require("../std.schema");

const shared = {
    type: 'object',
    definitions: {
        summaryLaporanKegiatanDto: {
            "title": "Laporan Kegiatan",
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
                    "type": "string"
                },
                "kegiatan__tanggal": {
                    "type": "string"
                },
                "kegiatan__jam_start": {
                    "type": "string"
                },
                "kegiatan__jam_end": {
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
                "tindak_lanjut__identitas_pelanggar__luas_bongkaran": {
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
                            "file_uploadResult": {
                                "type": "array",
                                "items": {
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
                            "keterangan": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "file_uploadResult",
                            "keterangan"
                        ]
                    }
                }
            },
            "required": []
        },
        pelaporanKegiatanForm: {
            "title": "Pelaporan Form Kegiatan Sidang Tipiring",
            "type": "object",
            "properties": {
                "kegiatan__jenis_kegiatan_id": {
                    "type": "number"
                },
                "kegiatan__jumlah_personil": {
                    "type": "number"
                },
                "kegiatan__uraian_kegiatan": {
                    "type": "string"
                },
                "kegiatan__tanggal": {
                    "type": "string",
                    "format": "date"
                },
                "kegiatan__jam_start": {
                    "type": "string",
                    "format": "time"
                },
                "kegiatan__jam_end": {
                    "type": "string",
                    "format": "time"
                },
                "kegiatan__lokasi": {
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
                "tindak_lanjut__denda__pengadilan": {
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
                "dokumentasi": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "file_uploadResult": {
                                "type": "array",
                                "items": {
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
                            "keterangan": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "file_uploadResult",
                            "keterangan"
                        ]
                    }
                }
            },
            "required": [
                "kegiatan__jenis_kegiatan_id",
                "kegiatan__jumlah_personil",
                "kegiatan__uraian_kegiatan",
                "kegiatan__tanggal",
                "kegiatan__jam_start",
                "kegiatan__jam_end",
                "kegiatan__lokasi",
                "tindak_lanjut__administrasi__jenis_pasal_id",
                "tindak_lanjut__administrasi__jenis_penertiban",
                "tindak_lanjut__administrasi__jenis_pelanggaran",
                "tindak_lanjut__administrasi__perda_perkada",
                "tindak_lanjut__administrasi__penyelesaian_id",
                "tindak_lanjut__administrasi__penyelesaian_khusus_id",
                "tindak_lanjut__identitas_pelanggar__no_bap",
                "tindak_lanjut__identitas_pelanggar__nama_penanggung_jawab",
                "tindak_lanjut__identitas_pelanggar__nama_tempat_usaha",
                "tindak_lanjut__identitas_pelanggar__alamat_tempat_usaha",
                "tindak_lanjut__identitas_pelanggar__nik",
                "tindak_lanjut__identitas_pelanggar__alamat",
                "tindak_lanjut__identitas_pelanggar__jenis_usaha_id",
                // "tindak_lanjut__sidang__tanggal",
                "tindak_lanjut__sidang__jumlah_pelanggar_hadir",
                "tindak_lanjut__sidang__jumlah_pelanggar_tidak_hadir",
                "tindak_lanjut__sidang__jumlah_pelanggar_verstek",
                "tindak_lanjut__denda__pengadilan",
                // "tindak_lanjut__denda__tanggal_setor",
                "tindak_lanjut__denda__nama_bank",
                "tindak_lanjut__denda__no_validasi_bank",
                "dokumentasi"
            ]
        }
    }
}

const getSchema = {
    description: "Get Laporan Kegiatan Tipiring",
    tags: ["laporan-kegiatan"],
    querystring: defaultPageQueryString,
    response: {
        200: reply200(shared.definitions.summaryLaporanKegiatanDto)
    }
}

const postSchema = {
    "description": "Add Laporan Kegiatan Tipiring",
    tags: ["laporan-kegiatan"],
    body: shared.definitions.pelaporanKegiatanForm,
    response: {
        200: reply200(shared.definitions.summaryLaporanKegiatanDto),
        400: reply400()
    }
}

const deleteSchema = {
    description: "Delete Laporan Kegiatan Tipiring",
    tags: ["laporan-kegiatan"],
    params: {
        id: { type: "number" }
    },
    response: {
        200: reply200(),
        400: reply400()
    }
}

const putSchema = {
    description: "Update Laporan Kegiatan Tipiring",
    tags: ["laporan-kegiatan"],
    params: {
        id: { type: "number" }
    },
    body: shared.definitions.pelaporanKegiatanForm,
    response: {
        200: reply200(shared.definitions.summaryLaporanKegiatanDto),
        400: reply400()
    }
}

module.exports = { getSchema, postSchema, deleteSchema, putSchema }
