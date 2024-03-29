-- public.laporan_kegiatan definition

-- Drop table

DROP TABLE laporan_kegiatan;

CREATE TABLE laporan_kegiatan (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	is_deleted smallint NULL DEFAULT 0,
	deleted_by varchar(64) NULL,
	deleted_at timestamp NULL,
	created_by varchar(64) NOT NULL,
	created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	updated_by varchar(64) NULL,
	updated_at timestamp NULL,
	kegiatan__jenis_kegiatan_id int4,
    kegiatan__jumlah_personil int4,
    kegiatan__uraian_kegiatan varchar(255),
    kegiatan__tanggal date,
    kegiatan__jam_start varchar(16),
    kegiatan__jam_end varchar(16),
    kegiatan__lokasi varchar(128),
    kegiatan__kota_id int4,
    kegiatan__asal_laporan_id int4,
    kegiatan__jenis_pengamanan_id int4,
    kegiatan__masalah varchar(255),
    kegiatan__pemecahan_masalah varchar(255),
    kegiatan__instansi_terkait varchar(64),
    tindak_lanjut__administrasi__jenis_pasal_id int4,
    tindak_lanjut__administrasi__jenis_penertiban varchar(255),
    tindak_lanjut__administrasi__jenis_pelanggaran varchar(255),
    tindak_lanjut__administrasi__perda_perkada varchar(64),
    tindak_lanjut__administrasi__penyelesaian_id int4,
    tindak_lanjut__administrasi__penyelesaian_khusus_id int4,
    tindak_lanjut__sidang__tanggal date,
    tindak_lanjut__sidang__jumlah_pelanggar_hadir int4,
    tindak_lanjut__sidang__jumlah_pelanggar_tidak_hadir int4,
    tindak_lanjut__sidang__jumlah_pelanggar_verstek int4,
    tindak_lanjut__identitas_pelanggar__no_bap varchar(64),
    tindak_lanjut__identitas_pelanggar__nama_penanggung_jawab varchar(64),
    tindak_lanjut__identitas_pelanggar__nama_tempat_usaha varchar(64),
    tindak_lanjut__identitas_pelanggar__alamat_tempat_usaha varchar(255),
    tindak_lanjut__identitas_pelanggar__nik varchar(32),
    tindak_lanjut__identitas_pelanggar__alamat varchar(255),
    tindak_lanjut__identitas_pelanggar__jenis_usaha_id int4,
    tindak_lanjut__identitas_pelanggar__nama_pemilik varchar(64),
    tindak_lanjut__identitas_pelanggar__luas_bongkaran int4,
    tindak_lanjut__jenis_penindakan_id int4,
    tindak_lanjut__jumlah_pelanggar int4,
    tindak_lanjut__denda__pengadilan int4,
    tindak_lanjut__denda__non_pengadilan int4,
    tindak_lanjut__denda__tanggal_setor date,
    tindak_lanjut__denda__nama_bank varchar(64),
    tindak_lanjut__denda__no_validasi_bank varchar(64),
    tindak_lanjut__rekom_citata__jenis_pelanggaran_id int4,
    tindak_lanjut__rekom_citata__no_sp varchar(16),
    tindak_lanjut__rekom_citata__tanggal_no_sp date,
    tindak_lanjut__rekom_citata__no_segel varchar(16),
    tindak_lanjut__rekom_citata__tanggal_segel date,
    tindak_lanjut__rekom_citata__no_spb varchar(16),
    tindak_lanjut__rekom_citata__tanggal_spb date,
    tindak_lanjut__rekom_citata__no_rekomtek varchar(16),
    tindak_lanjut__rekom_citata__tanggal_rekomtek date,
    tindak_lanjut__rekom_citata__tanggal_peninjauan_lapangan date,
    tindak_lanjut__jumlah_minol_merk json NULL DEFAULT '[]' ::json,
    dokumentasi json NULL DEFAULT '[]' ::json,
	CONSTRAINT laporan_kegiatan_pkey PRIMARY KEY (id)
);