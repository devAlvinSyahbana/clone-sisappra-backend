'use strict'

const {reply200, reply400, defaultPageQueryString} = require("../std.schema");

const shared = {
    type: 'object',
    definitions: {
        summaryLaporanKegiatanDto: {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "bidang_wilayah_id": {
                    "type": "number"
                },
                "bidang_wilayah_name": {
                    "type": "string"
                },
                "jmlh_pengawasan_penindakan": {
                    "type": "number"
                },
                "tindak_lanjut_peringatan_jmlh_peringatan": {
                    "type": "number"
                },
                "tindak_lanjut_peringatan_jmlh_pengahalauan": {
                    "type": "number"
                },
                "tindak_lanjut_peringatan_jmlh_teguran_tertulis": {
                    "type": "number"
                },
                "tindak_lanjut_penutupan_penyegelan_jmlh_penyegelan": {
                    "type": "number"
                },
                "tindak_lanjut_penutupan_penyegelan_jmlh_penghentian_kegiatan": {
                    "type": "number"
                },
                "tindak_lanjut_penutupan_penyegelan_jmlh_pembongkaran": {
                    "type": "number"
                },
                "tindak_lanjut_penutupan_penyegelan_jmlh_ditertibkan": {
                    "type": "number"
                },
                "tindak_lanjut_penutupan_penyegelan_jmlh_bongkar_sendiri": {
                    "type": "number"
                },
                "tindak_lanjut_penutupan_penyegelan_jmlh_pemusnahan": {
                    "type": "number"
                },
                "tindak_lanjut_penutupan_penyegelan_jmlh_penghentian_kegiatan_sementara_1x24_jam": {
                    "type": "number"
                },
                "tindak_lanjut_pencabutan_izin_jmlh_pencabutan_izin": {
                    "type": "number"
                },
                "tindak_lanjut_pencabutan_izin_jmlh_pembekuan_sementara_izin": {
                    "type": "number"
                },
                "tindak_lanjut_yang_lainnya_jmlh_pembubaran": {
                    "type": "number"
                },
                "tindak_lanjut_yang_lainnya_pengusiran": {
                    "type": "number"
                },
                "tindak_lanjut_yang_lainnya_jmlh_penjemputan": {
                    "type": "number"
                },
                "tindak_lanjut_yang_lainnya_jmlh_penangkapan": {
                    "type": "number"
                },
                "tindak_lanjut_yang_lainnya_jmlh_penyitaan_pembersihan": {
                    "type": "number"
                },
                "tindak_lanjut_yang_lainnya_jmlh_pencopotan_pelepasan_pencabutan": {
                    "type": "number"
                },
                "tindak_lanjut_yang_lainnya_jmlh_penyidikan": {
                    "type": "number"
                },
                "tindak_lanjut_yang_lainnya_jmlh_kerja_sosial": {
                    "type": "number"
                },
                "tindak_lanjut_yang_lainnya_jmlh_denda_ administratif": {
                    "type": "number"
                },
                "tindak_lanjut_yang_lainnya_jmlh_terbit_izin_dikembalikan": {
                    "type": "number"
                },
                "tindak_lanjut_yang_lainnya_jmlh_belum_ditertibkan": {
                    "type": "number"
                },
                "tindak_lanjut_yang_lainnya_jmlh_lain_lain": {
                    "type": "number"
                },
                "tindak_lanjut_yang_lainnya_jmlh_tidak_di_temukan_pelanggaran": {
                    "type": "number"
                },
                "denda_pengadilan_yustisi": {
                    "type": "number"
                },
                "denda_non_pengadilan_ppkm": {
                    "type": "number"
                }
            },
            "required": [
                "id",
                "bidang_wilayah_id",
                "bidang_wilayah_name",
                "jmlh_pengawasan_penindakan",
                "tindak_lanjut_peringatan_jmlh_peringatan",
                "tindak_lanjut_peringatan_jmlh_pengahalauan",
                "tindak_lanjut_peringatan_jmlh_teguran_tertulis",
                "tindak_lanjut_penutupan_penyegelan_jmlh_penyegelan",
                "tindak_lanjut_penutupan_penyegelan_jmlh_penghentian_kegiatan",
                "tindak_lanjut_penutupan_penyegelan_jmlh_pembongkaran",
                "tindak_lanjut_penutupan_penyegelan_jmlh_ditertibkan",
                "tindak_lanjut_penutupan_penyegelan_jmlh_bongkar_sendiri",
                "tindak_lanjut_penutupan_penyegelan_jmlh_pemusnahan",
                "tindak_lanjut_penutupan_penyegelan_jmlh_penghentian_kegiatan_sementara_1x24_jam",
                "tindak_lanjut_pencabutan_izin_jmlh_pencabutan_izin",
                "tindak_lanjut_pencabutan_izin_jmlh_pembekuan_sementara_izin",
                "tindak_lanjut_yang_lainnya_jmlh_pembubaran",
                "tindak_lanjut_yang_lainnya_pengusiran",
                "tindak_lanjut_yang_lainnya_jmlh_penjemputan",
                "tindak_lanjut_yang_lainnya_jmlh_penangkapan",
                "tindak_lanjut_yang_lainnya_jmlh_penyitaan_pembersihan",
                "tindak_lanjut_yang_lainnya_jmlh_pencopotan_pelepasan_pencabutan",
                "tindak_lanjut_yang_lainnya_jmlh_penyidikan",
                "tindak_lanjut_yang_lainnya_jmlh_kerja_sosial",
                "tindak_lanjut_yang_lainnya_jmlh_denda_ administratif",
                "tindak_lanjut_yang_lainnya_jmlh_terbit_izin_dikembalikan",
                "tindak_lanjut_yang_lainnya_jmlh_belum_ditertibkan",
                "tindak_lanjut_yang_lainnya_jmlh_lain_lain",
                "tindak_lanjut_yang_lainnya_jmlh_tidak_di_temukan_pelanggaran",
                "denda_pengadilan_yustisi",
                "denda_non_pengadilan_ppkm"
            ]
        },
        pelaporanKegiatanForm: {
            "title": "Pelaporan Form Kegiatan Penertiban Bangunan",
            "type": "object",
            "properties": {
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
                "tindak_lanjut__identitas_pelanggar__nama_pemilik": {
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
                "kegiatan__jenis_kegiatan_id",
                "kegiatan__jumlah_personil",
                "kegiatan__uraian_kegiatan",
                "kegiatan__tanggal",
                "kegiatan__jam",
                "kegiatan__lokasi",
                "tindak_lanjut__administrasi__jenis_pasal_id",
                "tindak_lanjut__administrasi__jenis_penertiban",
                "tindak_lanjut__administrasi__jenis_pelanggaran",
                "tindak_lanjut__administrasi__perda_perkada",
                "tindak_lanjut__administrasi__penyelesaian_id",
                "tindak_lanjut__identitas_pelanggar__nama_pemilik",
                "tindak_lanjut__identitas_pelanggar__nama_tempat_usaha",
                "tindak_lanjut__identitas_pelanggar__alamat_tempat_usaha",
                "tindak_lanjut__identitas_pelanggar__nik",
                "tindak_lanjut__identitas_pelanggar__alamat",
                "tindak_lanjut__identitas_pelanggar__jenis_usaha_id",
                "tindak_lanjut__rekom_citata__jenis_pelanggaran_id",
                "tindak_lanjut__rekom_citata__no_sp",
                "tindak_lanjut__rekom_citata__tanggal_no_sp",
                "tindak_lanjut__rekom_citata__no_segel",
                "tindak_lanjut__rekom_citata__tanggal_segel",
                "tindak_lanjut__rekom_citata__no_spb",
                "tindak_lanjut__rekom_citata__tanggal_spb",
                "tindak_lanjut__rekom_citata__no_rekomtek",
                "tindak_lanjut__rekom_citata__tanggal_rekomtek",
                "tindak_lanjut__rekom_citata__tanggal_peninjauan_lapangan",
                "dokumentasi"
            ]
        }
    }
}

const getSchema = {
    description: "get laporan kegiatan",
    tags: ["laporan-kegiatan"],
    querystring: defaultPageQueryString,
    response: {
        200: reply200(shared.definitions.summaryLaporanKegiatanDto)
    }
}

const postSchema = {
    "description": "Add Laporan Kegaitan",
    tags: ["laporan-kegiatan"],
    operationId: "add_laporan_kegiatan",
    body: shared.definitions.pelaporanKegiatanForm,
    response: {
        200: reply200(shared.definitions.summaryLaporanKegiatanDto),
        400: reply400()
    }
}

const deleteSchema = {
    description: "Delete Laporan Kegiatan",
    tags: ["laporan-kegiatan"],
    params: {
        id: {type: "number"}
    },
    response: {
        200: reply200(),
        400: reply400()
    }
}

const putSchema = {
    description: "Update Laporan Kegiatan",
    tags: ["laporan-kegiatan"],
    params: {
        id: {type: "number"}
    },
    body: shared.definitions.pelaporanKegiatanForm,
    response: {
        200: reply200(shared.definitions.summaryLaporanKegiatanDto),
        400: reply400()
    }
}

module.exports = {getSchema, postSchema, deleteSchema, putSchema}