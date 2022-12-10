-- Drop table

DROP TABLE master_jenis_perda_perkada;

CREATE TABLE master_jenis_perda_perkada (
    id                int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
    is_deleted        integer  default 0,
    deleted_at        timestamp,
    deleted_by        varchar(64),
    created_by        varchar(64),
    updated_by        varchar(64),
    created_at        timestamp default CURRENT_TIMESTAMP,
    updated_at        timestamp,
    enabled           boolean   default true,
    judul             varchar(128) not null,
    pasal             varchar(128),
    jenis_penertiban  varchar(256),
    jenis_pelanggaran varchar(512),
    deskripsi         varchar(128),
    CONSTRAINT master_jenis_perda_perkada_pkey PRIMARY KEY (id)
);

