PGDMP     )    %                 {         
   dbsisappra    14.5    14.5 	    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16384 
   dbsisappra    DATABASE     _   CREATE DATABASE dbsisappra WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE dbsisappra;
                postgres    false            N           1259    34178    laporan_tamu_daerah    TABLE     �  CREATE TABLE public.laporan_tamu_daerah (
    id integer NOT NULL,
    is_deleted smallint DEFAULT 0,
    deleted_by character varying(64),
    deleted_at timestamp without time zone,
    created_by character varying(64) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_by character varying(64),
    updated_at timestamp without time zone,
    tanggal_kunjungan date,
    waktu_mulai_kunjungan character varying(16),
    waktu_selesai_kunjungan character varying(16),
    asal_instansi character varying(64),
    jml_pengunjung integer,
    maksud_dan_tujuan character varying(128),
    pejabat_penerima_kunjungan character varying(64),
    tempat_kunjungan character varying(64)
);
 '   DROP TABLE public.laporan_tamu_daerah;
       public         heap    postgres    false            M           1259    34177    laporan_tamu_daerah_id_seq    SEQUENCE     �   ALTER TABLE public.laporan_tamu_daerah ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.laporan_tamu_daerah_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    334            �          0    34178    laporan_tamu_daerah 
   TABLE DATA           (  COPY public.laporan_tamu_daerah (id, is_deleted, deleted_by, deleted_at, created_by, created_at, updated_by, updated_at, tanggal_kunjungan, waktu_mulai_kunjungan, waktu_selesai_kunjungan, asal_instansi, jml_pengunjung, maksud_dan_tujuan, pejabat_penerima_kunjungan, tempat_kunjungan) FROM stdin;
    public          postgres    false    334   M       �           0    0    laporan_tamu_daerah_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.laporan_tamu_daerah_id_seq', 2, true);
          public          postgres    false    333                       2606    34186 ,   laporan_tamu_daerah laporan_tamu_daerah_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.laporan_tamu_daerah
    ADD CONSTRAINT laporan_tamu_daerah_pkey PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.laporan_tamu_daerah DROP CONSTRAINT laporan_tamu_daerah_pkey;
       public            postgres    false    334            �   �   x�]�A
�0EדS�3iL�,u� ���������F-�
���#@hϯP���DS9����`���BF9�@�R.~���;��4��n�+����SG8&j����hj�v�4��j����m5K���_�����Vs+�O��=�     