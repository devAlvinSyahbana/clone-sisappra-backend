-- public.laporan_kejadian definition

-- Drop table

DROP TABLE laporan_kejadian;

CREATE TABLE laporan_kejadian (
    id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
    is_deleted smallint NULL DEFAULT 0,
    deleted_by varchar(64) NULL,
    deleted_at timestamp NULL,
    created_by varchar(64) NOT NULL,
    created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    updated_by varchar(64) NULL,
    updated_at timestamp NULL,
    kejadian__tanggal date,
    kejadian__waktu_start varchar(16),
    kejadian__waktu_end varchar(16),
    kejadian__kota_id int4,
    kejadian__kecamatan_id int4,
    kejadian__kelurahan_id int4,
    kejadian__alamat varchar(64),
    kejadian__jenis_kejadian_id int4,
    kejadian__uraian_kejadian varchar(255),
    kejadian__jml_personil_satpolpp int4,
    kejadian__jml_personil_instansilain int4,
    kejadian__ketinggian_air int4,
    kejadian__pengungsi int4,
    kejadian__pengungsi_kk int4,
    kejadian__lokasi_penampungan varchar(255),
    kejadian__lokasi_dapur_umum varchar(255),
    kejadian__jumlah_massa int4,
    kejadian__sumber_informasi_id int4,
    kejadian__jenis_kekerasan_id int4,
    kejadian__tuntutan varchar(255),
    kejadian__penanggung_jawab_unras varchar(255),
    tindak__penanggung_jawab varchar(255),
    tindak__jml_massa int4,
    tindak__tuntutan varchar(255),
    tindak__sumber_info varchar(255),
    tindak__jenis_kekerasan varchar(255),
    tindak__jenis_bantuan_satpolpp varchar(255),
    tindak__jenis_bantuan_instansiterkait varchar(255),
    tindak__korban_jiwa varchar(255),
    tindak__korban_material varchar(255),
    tindak__dokumentasi varchar(255),
    CONSTRAINT laporan_kejadian_pkey PRIMARY KEY (id)
	);
