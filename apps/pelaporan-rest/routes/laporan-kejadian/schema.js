'use strict'

const {reply200, reply400, defaultPageQueryString} = require("../std.schema");

const shared = {
    type: 'object',
    definitions: {
        laporanKejadianDto: {
            "$id": "#LaporanKegiatanDto",
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "pelaksana_bidang_wilayah": {
                    "type": "string"
                },
                "tindak_lanjut": {
                    "type": "string"
                },
                "administrasi": {
                    "type": "string"
                },
                "peringatan": {
                    "type": "string"
                },
                "is_deleted": {
                    "type": "number"
                },
                "deleted_by": {
                    "type": "string"
                },
                "deleted_at": {
                    "type": "string"
                },
                "created_by": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                },
                "updated_by": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                },
                "penutupan_atau_penyegelan": {
                    "type": "string"
                },
                "pencabutan_izin": {
                    "type": "string"
                },
                "yang_lainnya": {
                    "type": "string"
                },
                "denda": {
                    "type": "string"
                },
                "keterangan": {
                    "type": "string"
                },
                "penghalauan": {
                    "type": "string"
                },
                "pembubaran": {
                    "type": "string"
                },
                "pengusiran": {
                    "type": "string"
                },
                "teguran_tertulis": {
                    "type": "string"
                },
                "penyegelan": {
                    "type": "string"
                },
                "penghentian_kegiatan": {
                    "type": "string"
                },
                "pembongkaran": {
                    "type": "string"
                },
                "ditertibkan": {
                    "type": "string"
                },
                "bongkar_sendiri": {
                    "type": "string"
                },
                "pemusnahan": {
                    "type": "string"
                },
                "pecabutan_izin": {
                    "type": "string"
                },
                "pembekuan_sementara_izin": {
                    "type": "string"
                },
                "razia": {
                    "type": "string"
                },
                "penjemputan": {
                    "type": "string"
                },
                "penangkapan": {
                    "type": "string"
                },
                "penyitaan": {
                    "type": "string"
                },
                "pembersihan": {
                    "type": "string"
                },
                "pencopotan_pelepasan_pencabutan": {
                    "type": "string"
                },
                "penyidikan": {
                    "type": "string"
                },
                "kerja_sosial": {
                    "type": "string"
                },
                "denda_administratif": {
                    "type": "string"
                },
                "terbit_izin": {
                    "type": "string"
                },
                "dikembalikan": {
                    "type": "string"
                },
                "belum_diterbitkan": {
                    "type": "string"
                },
                "lain_lain": {
                    "type": "string"
                },
                "tidak_ditemukan": {
                    "type": "string"
                },
                "pengadilan_yustisi": {
                    "type": "string"
                },
                "non_pengadilan": {
                    "type": "string"
                },
                "penghentian_kegiatan_sementara_1x24jam": {
                    "type": "string"
                },
                "penghentian_kegiatan_sementara_3x24jam": {
                    "type": "string"
                },
                "penghentian_kegiatan_sementara_7x24jam": {
                    "type": "string"
                }
            },
            "required": [
                "id",
                "pelaksana_bidang_wilayah",
                "tindak_lanjut",
                "administrasi",
                "peringatan",
                "is_deleted",
                "deleted_by",
                "deleted_at",
                "created_by",
                "created_at",
                "updated_by",
                "updated_at",
                "penutupan_atau_penyegelan",
                "pencabutan_izin",
                "yang_lainnya",
                "denda",
                "keterangan",
                "penghalauan",
                "pembubaran",
                "pengusiran",
                "teguran_tertulis",
                "penyegelan",
                "penghentian_kegiatan",
                "pembongkaran",
                "ditertibkan",
                "bongkar_sendiri",
                "pemusnahan",
                "pecabutan_izin",
                "pembekuan_sementara_izin",
                "razia",
                "penjemputan",
                "penangkapan",
                "penyitaan",
                "pembersihan",
                "pencopotan_pelepasan_pencabutan",
                "penyidikan",
                "kerja_sosial",
                "denda_administratif",
                "terbit_izin",
                "dikembalikan",
                "belum_diterbitkan",
                "lain_lain",
                "tidak_ditemukan",
                "pengadilan_yustisi",
                "non_pengadilan",
                "penghentian_kegiatan_sementara_1x24jam",
                "penghentian_kegiatan_sementara_3x24jam",
                "penghentian_kegiatan_sementara_7x24jam"
            ]
        },
        laporanKegiatanNewForm: {
            "$id": "#LaporanKegiatanNewForm",
            "type": "object",
            "properties": {
                "jenis_kegiatan_id": {
                    "type": "number"
                },
                "jenis_personil": {
                    "type": "number"
                },
                "uraian_kegiatan": {
                    "type": "string",
                    minLength: 10
                },
                "tindak_lanjut_admin_jenis_pasal_id": {
                    "type": "number"
                },
                "tindak_lanjut_admin_penertiban_id": {
                    "type": "number"
                },
                "tindak_lanjut_admin_pelanggaran_id": {
                    "type": "number"
                },
                "tindak_lanjut_admin_perda_perkada_id": {
                    "type": "number"
                },
                "tindak_lanjut_penyelesaian_id": {
                    "type": "number"
                },
                "tindak_lanjut_identitas_no_bap": {
                    "type": "string",
                    minLength: 10
                },
                "tindak_lanjut_identitas_nama": {
                    "type": "string",
                    minLength: 3
                },
                "tindak_lanjut_identitas_nama_usaha": {
                    "type": "string",
                    minLength: 10
                },
                "tindak_lanjut_identitas_alamat_usaha": {
                    "type": "string",
                    minLength: 10
                },
                "tindak_lanjut_identitas_nik": {
                    "type": "string",
                    minLength: 10
                },
                "tindak_lanjut_identitas_alamat": {
                    "type": "string",
                    minLength: 10
                },
                "tindak_lanjut_identitas_jenis_usaha_id": {
                    "type": "number"
                },
                "tindak_lanjut_penindakan_id": {
                    "type": "number"
                },
                "tindak_lanjut_jumlah_pelanggar": {
                    "type": "number"
                },
                "tindak_lanjut_denda_non_pengadilan": {
                    "type": "number"
                },
                "tindak_lanjut_denda_matauang": {
                    "type": "string"
                },
                "tindak_lanjut_denda_tgl_setor": {
                    "type": "string"
                },
                "tindak_lanjut_denda_bank": {
                    "type": "string"
                },
                "tindak_lanjut_denda_no_validasi": {
                    "type": "string"
                },
                "dokumentasi_files": {
                    "type": "array",
                    "maxItems": 3,
                    "items": {
                        "type": "string"
                    }
                },
                "dokumentasi_keterangan": {
                    "type": "string"
                }
            },
            "required": [
                "jenis_kegiatan_id",
                "jenis_personil",
                "uraian_kegiatan",
                "tindak_lanjut_admin_jenis_pasal_id",
                "tindak_lanjut_admin_penertiban_id",
                "tindak_lanjut_admin_pelanggaran_id",
                "tindak_lanjut_admin_perda_perkada_id",
                "tindak_lanjut_penyelesaian_id",
                "tindak_lanjut_identitas_no_bap",
                "tindak_lanjut_identitas_nama",
                "tindak_lanjut_identitas_nama_usaha",
                "tindak_lanjut_identitas_alamat_usaha",
                "tindak_lanjut_identitas_nik",
                "tindak_lanjut_identitas_alamat",
                "tindak_lanjut_identitas_jenis_usaha_id",
                "tindak_lanjut_penindakan_id",
                "tindak_lanjut_jumlah_pelanggar",
                "tindak_lanjut_denda_non_pengadilan",
                "tindak_lanjut_denda_matauang",
                "tindak_lanjut_denda_tgl_setor",
                "tindak_lanjut_denda_bank",
                "tindak_lanjut_denda_no_validasi"
            ]
        },
        laporanKegiatanUpdateForm: {
            "type": "object",
            "properties": {
                "jenis_kegiatan_id": {
                    "type": "number"
                },
                "jenis_personil": {
                    "type": "number"
                },
                "uraian_kegiatan": {
                    "type": "string",
                    minLength: 10
                },
                "tindak_lanjut_admin_jenis_pasal_id": {
                    "type": "number"
                },
                "tindak_lanjut_admin_penertiban_id": {
                    "type": "number"
                },
                "tindak_lanjut_admin_pelanggaran_id": {
                    "type": "number"
                },
                "tindak_lanjut_admin_perda_perkada_id": {
                    "type": "number"
                },
                "tindak_lanjut_penyelesaian_id": {
                    "type": "number"
                },
                "tindak_lanjut_identitas_no_bap": {
                    "type": "string",
                    minLength: 10
                },
                "tindak_lanjut_identitas_nama": {
                    "type": "string",
                    minLength: 3
                },
                "tindak_lanjut_identitas_nama_usaha": {
                    "type": "string",
                    minLength: 10
                },
                "tindak_lanjut_identitas_alamat_usaha": {
                    "type": "string",
                    minLength: 10
                },
                "tindak_lanjut_identitas_nik": {
                    "type": "string",
                    minLength: 10
                },
                "tindak_lanjut_identitas_alamat": {
                    "type": "string",
                    minLength: 10
                },
                "tindak_lanjut_identitas_jenis_usaha_id": {
                    "type": "number"
                },
                "tindak_lanjut_penindakan_id": {
                    "type": "number"
                },
                "tindak_lanjut_jumlah_pelanggar": {
                    "type": "number"
                },
                "tindak_lanjut_denda_non_pengadilan": {
                    "type": "number"
                },
                "tindak_lanjut_denda_matauang": {
                    "type": "string"
                },
                "tindak_lanjut_denda_tgl_setor": {
                    "type": "string"
                },
                "tindak_lanjut_denda_bank": {
                    "type": "string"
                },
                "tindak_lanjut_denda_no_validasi": {
                    "type": "string"
                },
                "dokumentasi_files": {
                    "type": "array",
                    "maxItems": 3,
                    "items": {
                        "type": "string"
                    }
                },
                "dokumentasi_keterangan": {
                    "type": "string"
                }
            },
            "required": [
                "jenis_kegiatan_id",
                "jenis_personil",
                "uraian_kegiatan",
                "tindak_lanjut_admin_jenis_pasal_id",
                "tindak_lanjut_admin_penertiban_id",
                "tindak_lanjut_admin_pelanggaran_id",
                "tindak_lanjut_admin_perda_perkada_id",
                "tindak_lanjut_penyelesaian_id",
                "tindak_lanjut_identitas_no_bap",
                "tindak_lanjut_identitas_nama",
                "tindak_lanjut_identitas_nama_usaha",
                "tindak_lanjut_identitas_alamat_usaha",
                "tindak_lanjut_identitas_nik",
                "tindak_lanjut_identitas_alamat",
                "tindak_lanjut_identitas_jenis_usaha_id",
                "tindak_lanjut_penindakan_id",
                "tindak_lanjut_jumlah_pelanggar",
                "tindak_lanjut_denda_non_pengadilan",
                "tindak_lanjut_denda_matauang",
                "tindak_lanjut_denda_tgl_setor",
                "tindak_lanjut_denda_bank",
                "tindak_lanjut_denda_no_validasi"
            ]
        }
    }
}

const getSchema = {
    description: "Get Laporan Kejadian",
    tags: ["laporan-kejadian"],
    querystring: defaultPageQueryString,
    response: {
        200: reply200(shared.definitions.laporanKejadianDto)
    }
}

const postSchema = {
    "description": "Add Laporan Kejadian",
    tags: ["laporan-kejadian"],
    operationId: "add_laporan_kegiatan",
    body: shared.definitions.laporanKegiatanNewForm,
    response: {
        200: reply200(shared.definitions.laporanKejadianDto),
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
    body: shared.definitions.laporanKegiatanUpdateForm,
    response: {
        200: reply200(shared.definitions.laporanKejadianDto),
        400: reply400()
    }
}

module.exports = {getSchema, postSchema, deleteSchema, putSchema}