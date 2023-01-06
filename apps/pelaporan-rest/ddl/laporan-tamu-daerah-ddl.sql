-- public.laporan_tamu_daerah definition

-- Drop table

DROP TABLE laporan_tamu_daerah;

CREATE TABLE laporan_tamu_daerah (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	is_deleted smallint NULL DEFAULT 0,
	deleted_by varchar(64) NULL,
	deleted_at timestamp NULL,
	created_by varchar(64) NOT NULL,
	created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	updated_by varchar(64) NULL,
	updated_at timestamp NULL,
	tanggal_kunjungan date,
    waktu_mulai_kunjungan varchar(16),
    waktu_selesai_kunjungan varchar(16),
    asal_instansi varchar(64),
    jml_pengunjung int4,
    maksud_dan_tujuan varchar(128),
    pejabat_penerima_kunjungan varchar(64),
    tempat_kunjungan varchar(64),
	CONSTRAINT laporan_tamu_daerah_pkey PRIMARY KEY (id)
);