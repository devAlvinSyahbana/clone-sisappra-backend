-- Drop table

DROP TABLE master_jenis_penyelesaian;

CREATE TABLE master_jenis_penyelesaian (
    id                int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
    nama              varchar(64),
    is_deleted        integer  default 0,
    deleted_at        timestamp,
    deleted_by        varchar(64),
    created_by        varchar(64),
    updated_by        varchar(64),
    created_at        timestamp default CURRENT_TIMESTAMP,
    updated_at        timestamp,
    CONSTRAINT master_jenis_penyelesaian_pkey PRIMARY KEY (id)
);

