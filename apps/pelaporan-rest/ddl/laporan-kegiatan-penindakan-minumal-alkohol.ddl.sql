-- public.laporan_kegiatan_penindakan_minuman_alkohol definition

-- Drop table

DROP TABLE public.laporan_kegiatan_penindakan_minuman_alkohol;

CREATE TABLE public.laporan_kegiatan_penindakan_minuman_alkohol (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
    is_deleted int4 NULL DEFAULT 0,
	deleted_by varchar(64) NULL,
	deleted_at timestamp NULL,
	created_by varchar(64) NOT NULL,
	created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	updated_by varchar(64) NULL,
	updated_at timestamp NULL,
	merek varchar(64) NOT NULL,
    jumlah_miniuman SMALLINT NULL DEFAULT 0,
	CONSTRAINT laporan_kegiatan_penindakan_minuman_alkohol_pkey PRIMARY KEY (id)
);