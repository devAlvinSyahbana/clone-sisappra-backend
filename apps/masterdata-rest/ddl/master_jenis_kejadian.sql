-- Drop table

DROP TABLE master_jenis_kejadian;

CREATE TABLE master_jenis_kejadian (
    id                int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
    is_deleted        integer  default 0,
    deleted_at        timestamp,
    deleted_by        varchar(64),
    created_by        varchar(64),
    updated_by        varchar(64),
    created_at        timestamp default CURRENT_TIMESTAMP,
    updated_at        timestamp,
    nama              varchar(64),
    CONSTRAINT master_jenis_kejadian_pkey PRIMARY KEY (id)
);

