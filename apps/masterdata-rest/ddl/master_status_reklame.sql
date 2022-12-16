-- Drop table

DROP TABLE master_status_reklame;

CREATE TABLE master_status_reklame (
    id                int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
    is_deleted        integer  default 0,
    deleted_at        timestamp,
    deleted_by        varchar(64),
    created_by        varchar(64),
    updated_by        varchar(64),
    created_at        timestamp default CURRENT_TIMESTAMP,
    updated_at        timestamp,
    nama              varchar(64),
    CONSTRAINT master_status_reklame_pkey PRIMARY KEY (id)
);

