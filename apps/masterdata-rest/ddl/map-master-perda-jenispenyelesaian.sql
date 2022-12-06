
-- public.laporan_kegiatan definition

-- Drop table

DROP TABLE map_master_perda_jenispenyelesaian;

CREATE TABLE map_master_perda_jenispenyelesaian (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	is_deleted smallint NULL DEFAULT 0,
    deleted_by varchar(64) NULL,
    deleted_at timestamp NULL,
    created_by varchar(64) NOT NULL,
    created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    updated_by varchar(64) NULL,
    updated_at timestamp NULL,
    perda_id int4,
    jenis_penyelesaian_id int4,
    CONSTRAINT map_master_perda_jenispenyelesaian_pkey PRIMARY KEY (id)
);
