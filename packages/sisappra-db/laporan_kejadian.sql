PGDMP         %                 {         
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
                postgres    false            P           1259    34188    laporan_kejadian    TABLE     �  CREATE TABLE public.laporan_kejadian (
    id integer NOT NULL,
    is_deleted smallint DEFAULT 0,
    deleted_by character varying(64),
    deleted_at timestamp without time zone,
    created_by character varying(64) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_by character varying(64),
    updated_at timestamp without time zone,
    kejadian__tanggal date,
    kejadian__waktu_start character varying(16),
    kejadian__waktu_end character varying(16),
    kejadian__kota_id integer,
    kejadian__kecamatan_id integer,
    kejadian__kelurahan_id integer,
    kejadian__alamat character varying(64),
    kejadian__jenis_kejadian_id integer,
    kejadian__uraian_kejadian character varying(255),
    kejadian__jml_personil_satpolpp integer,
    kejadian__jml_personil_instansilain integer,
    kejadian__ketinggian_air integer,
    kejadian__pengungsi integer,
    kejadian__pengungsi_kk integer,
    kejadian__lokasi_penampungan character varying(255),
    kejadian__lokasi_dapur_umum character varying(255),
    kejadian__jumlah_massa integer,
    kejadian__sumber_informasi_id integer,
    kejadian__jenis_kekerasan_id integer,
    kejadian__tuntutan character varying(255),
    kejadian__penanggung_jawab_unras character varying(255),
    tindak__penanggung_jawab character varying(255),
    tindak__jml_massa integer,
    tindak__tuntutan character varying(255),
    tindak__sumber_info character varying(255),
    tindak__jenis_kekerasan character varying(255),
    tindak__jenis_bantuan_satpolpp json,
    tindak__jenis_bantuan_instansiterkait json,
    tindak__korban_jiwa json,
    tindak__korban_material json,
    tindak__dokumentasi json
);
 $   DROP TABLE public.laporan_kejadian;
       public         heap    postgres    false            O           1259    34187    laporan_kejadian_id_seq    SEQUENCE     �   ALTER TABLE public.laporan_kejadian ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.laporan_kejadian_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    336            �          0    34188    laporan_kejadian 
   TABLE DATA           �  COPY public.laporan_kejadian (id, is_deleted, deleted_by, deleted_at, created_by, created_at, updated_by, updated_at, kejadian__tanggal, kejadian__waktu_start, kejadian__waktu_end, kejadian__kota_id, kejadian__kecamatan_id, kejadian__kelurahan_id, kejadian__alamat, kejadian__jenis_kejadian_id, kejadian__uraian_kejadian, kejadian__jml_personil_satpolpp, kejadian__jml_personil_instansilain, kejadian__ketinggian_air, kejadian__pengungsi, kejadian__pengungsi_kk, kejadian__lokasi_penampungan, kejadian__lokasi_dapur_umum, kejadian__jumlah_massa, kejadian__sumber_informasi_id, kejadian__jenis_kekerasan_id, kejadian__tuntutan, kejadian__penanggung_jawab_unras, tindak__penanggung_jawab, tindak__jml_massa, tindak__tuntutan, tindak__sumber_info, tindak__jenis_kekerasan, tindak__jenis_bantuan_satpolpp, tindak__jenis_bantuan_instansiterkait, tindak__korban_jiwa, tindak__korban_material, tindak__dokumentasi) FROM stdin;
    public          postgres    false    336   d       �           0    0    laporan_kejadian_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.laporan_kejadian_id_seq', 2, true);
          public          postgres    false    335                       2606    34196 &   laporan_kejadian laporan_kejadian_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.laporan_kejadian
    ADD CONSTRAINT laporan_kejadian_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.laporan_kejadian DROP CONSTRAINT laporan_kejadian_pkey;
       public            postgres    false    336            �     x���Mn�0����k�� >D�&�2�U� ������Ni��j�<�y������S��d��1��2�IB�l��K�K�����V@}4&�T+'�ޯ �j�cm7˸U������\�=��`�׏6)"%8���uEp���#�!��}ɖ�&6��_[oڨW7�^�/jrf��w+wn�/᠌�QZ�`�>}.�RF�9�B�,)H��p,x��$��S�ā�Ε\��m`�w7�)��m�x�ӿ�Ó��3~�2PLz��.�.�����p�����(���(��     