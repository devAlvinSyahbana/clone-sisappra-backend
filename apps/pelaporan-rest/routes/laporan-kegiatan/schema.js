'use strict'

const {reply200, reply400, defaultPageQueryString} = require("../std.schema");

const shared = {
    type: 'object',
    definitions: {
        laporanKegiatanDto: {
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
        laporanKegiatanNewForm: {
            "type": "object",
            "properties": {
                "kegiatan_id_jenis_kegiatan": {
                    "type": "number"
                },
                "kegiatan_jmlh_personil": {
                    "type": "number"
                },
                "kegiatan_id_asal_laporan": {
                    "type": "number"
                },
                "kegiatan_id_jenis_pengamanan": {
                    "type": "number"
                },
                "kegiatan_masalah": {
                    "type": "string"
                },
                "kegiatan_pemecahan_masalah": {
                    "type": "string"
                },
                "kegiatan_instansi_terkait": {
                    "type": "string"
                },
                "kegiatan_uraian_kegiatan": {
                    "type": "string"
                },
                "tindak_lanjut_administrasi_id_jenis_pasal": {
                    "type": "number"
                },
                "tindak_lanjut_id_penyelesaian": {
                    "type": "number"
                },
                "tindak_lanjut_id_proses_khusus": {
                    "type": "number"
                },
                "tindak_lanjut_identitas_nama_usaha_no_bap": {
                    "type": "string"
                },
                "tindak_lanjut_identitas_nama_usaha_nama_penanggung_jawab": {
                    "type": "string"
                },
                "tindak_lanjut_identitas_nama_usaha_nama_usaha_tempat": {
                    "type": "string"
                },
                "tindak_lanjut_identitas_nama_usaha_nik_paspor": {
                    "type": "string"
                },
                "tindak_lanjut_identitas_nama_usaha_alamat": {
                    "type": "string"
                },
                "tindak_lanjut_id_jenis_usaha_tempat": {
                    "type": "number"
                },
                "tindak_lanjut_id_penindakan": {
                    "type": "number"
                },
                "tindak_lanjut_jumlah_penindakan": {
                    "type": "number"
                },
                "tindak_lanjut_jumlah_pelanggar": {
                    "type": "number"
                },
                "tindak_lanjut_jumlah_denda_pengadilan": {
                    "type": "number"
                },
                "tindak_lanjut_jumlah_denda_non_pengadilan": {
                    "type": "number"
                },
                "tindak_lanjut_jumlah_denda_tanggal_setor": {
                    "type": "string"
                },
                "tindak_lanjut_jumlah_denda_nama_bank": {
                    "type": "string"
                },
                "tindak_lanjut_jumlah_denda_no_validasi_bank": {
                    "type": "string"
                },
                "tindak_lanjut_tanggal_sidang": {
                    "type": "string"
                },
                "tindak_lanjut_jumlah_pelanggar_hadir_sidang": {
                    "type": "number"
                },
                "tindak_lanjut_jumlah_pelanggar_tidak_hadir": {
                    "type": "number"
                },
                "tindak_lanjut_jumlah_pelanggar_verstek": {
                    "type": "number"
                },
                "tindak_lanjut_rekomendasi_citata_id_jenis_pelanggaran_bangunan": {
                    "type": "number"
                },
                "tindak_lanjut_rekomendasi_citata_no_sp": {
                    "type": "string"
                },
                "tindak_lanjut_rekomendasi_citata_tgl_sp": {
                    "type": "string"
                },
                "tindak_lanjut_rekomendasi_citata_no_segel": {
                    "type": "string"
                },
                "tindak_lanjut_rekomendasi_citata_tgl_segel": {
                    "type": "string"
                },
                "tindak_lanjut_rekomendasi_citata_no_spb": {
                    "type": "string"
                },
                "tindak_lanjut_rekomendasi_citata_tgl_spb": {
                    "type": "string"
                },
                "tindak_lanjut_rekomendasi_citata_no_rekomtek": {
                    "type": "string"
                },
                "tindak_lanjut_rekomendasi_citata_tgl_rekomtek": {
                    "type": "string"
                },
                "tindak_lanjut_rekomendasi_citata_peninjau_lapangan": {
                    "type": "string"
                },
                "tindak_lanjut_jenis_merk_minol": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "merk": {
                                "type": "string"
                            },
                            "jmlh": {
                                "type": "number"
                            }
                        },
                        "required": [
                            "merk",
                            "jmlh"
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
                "kegiatan_id_jenis_kegiatan",
                "kegiatan_jmlh_personil",
                "kegiatan_id_asal_laporan",
                "kegiatan_id_jenis_pengamanan",
                "kegiatan_masalah",
                "kegiatan_pemecahan_masalah",
                "kegiatan_instansi_terkait",
                "kegiatan_uraian_kegiatan",
                "tindak_lanjut_administrasi_id_jenis_pasal",
                "tindak_lanjut_id_penyelesaian",
                "tindak_lanjut_id_proses_khusus",
                "tindak_lanjut_identitas_nama_usaha_no_bap",
                "tindak_lanjut_identitas_nama_usaha_nama_penanggung_jawab",
                "tindak_lanjut_identitas_nama_usaha_nama_usaha_tempat",
                "tindak_lanjut_identitas_nama_usaha_nik_paspor",
                "tindak_lanjut_identitas_nama_usaha_alamat",
                "tindak_lanjut_id_jenis_usaha_tempat",
                "tindak_lanjut_id_penindakan",
                "tindak_lanjut_jumlah_penindakan",
                "tindak_lanjut_jumlah_pelanggar",
                "tindak_lanjut_jumlah_denda_pengadilan",
                "tindak_lanjut_jumlah_denda_non_pengadilan",
                "tindak_lanjut_jumlah_denda_tanggal_setor",
                "tindak_lanjut_jumlah_denda_nama_bank",
                "tindak_lanjut_jumlah_denda_no_validasi_bank",
                "tindak_lanjut_tanggal_sidang",
                "tindak_lanjut_jumlah_pelanggar_hadir_sidang",
                "tindak_lanjut_jumlah_pelanggar_tidak_hadir",
                "tindak_lanjut_jumlah_pelanggar_verstek",
                "tindak_lanjut_rekomendasi_citata_id_jenis_pelanggaran_bangunan",
                "tindak_lanjut_rekomendasi_citata_no_sp",
                "tindak_lanjut_rekomendasi_citata_tgl_sp",
                "tindak_lanjut_rekomendasi_citata_no_segel",
                "tindak_lanjut_rekomendasi_citata_tgl_segel",
                "tindak_lanjut_rekomendasi_citata_no_spb",
                "tindak_lanjut_rekomendasi_citata_tgl_spb",
                "tindak_lanjut_rekomendasi_citata_no_rekomtek",
                "tindak_lanjut_rekomendasi_citata_tgl_rekomtek",
                "tindak_lanjut_rekomendasi_citata_peninjau_lapangan",
                "tindak_lanjut_jenis_merk_minol",
                "dokumentasi"
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
    description: "get laporan kegiatan",
    tags: ["laporan-kegiatan"],
    querystring: defaultPageQueryString,
    response: {
        200: reply200(shared.definitions.laporanKegiatanDto)
    }
}

const postSchema = {
    "description": "Add Laporan Kegaitan",
    tags: ["laporan-kegiatan"],
    operationId: "add_laporan_kegiatan",
    body: shared.definitions.laporanKegiatanNewForm,
    response: {
        200: reply200(shared.definitions.laporanKegiatanDto),
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
    body: shared.definitions.laporanKegiatanUpdateForm,
    response: {
        200: reply200(shared.definitions.laporanKegiatanDto),
        400: reply400()
    }
}

module.exports = {getSchema, postSchema, deleteSchema, putSchema}