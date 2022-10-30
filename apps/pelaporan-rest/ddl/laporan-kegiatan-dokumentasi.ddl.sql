-- public.laporan_kejadian_dokumentasi definition

-- Drop table

-- DROP TABLE public.laporan_kejadian_dokumentasi;

CREATE TABLE public.laporan_kegiatan_dokumentasi (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	is_deleted int4 NULL DEFAULT 0,
	deleted_by varchar(64) NULL,
	deleted_at timestamp NULL,
	created_by varchar(64) NOT NULL,
	created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	updated_by varchar(64) NULL,
	updated_at timestamp NULL,
    id_laporan_kegiatan int4 NOT NULL,
	dir_file varchar(255) NULL,
    CONSTRAINT laporan_kegiatan_dokumentasi_pkey PRIMARY KEY (id)
);


-- public.laporan_kejadian_dokumentasi foreign keys