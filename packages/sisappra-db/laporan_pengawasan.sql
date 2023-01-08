PGDMP     	    &                 {         
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
                postgres    false            =           1259    34095    laporan_pengawasan    TABLE     �  CREATE TABLE public.laporan_pengawasan (
    id integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    created_by character varying,
    updated_at timestamp without time zone,
    updated_by character varying(15),
    is_deleted integer DEFAULT 0,
    deleted_at timestamp without time zone,
    deleted_by character varying,
    tgl_pengecekan date,
    share_location character varying,
    alamat character varying,
    lokasi_tiang character varying,
    kawasan_kendali character varying,
    ukuran character varying,
    pemilik_reklame character varying,
    konstruksi_reklame character varying,
    konten_iklan character varying,
    kota character varying,
    kecamatan character varying,
    kelurahan character varying,
    waktu_pengawasan character varying,
    status_reklame character varying,
    jenis_reklame character varying,
    tindak_dokumentasi json DEFAULT '[]'::json,
    longtitude character varying
);
 &   DROP TABLE public.laporan_pengawasan;
       public         heap    postgres    false            >           1259    34103    laporan_pengawasan_id_seq    SEQUENCE     �   ALTER TABLE public.laporan_pengawasan ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.laporan_pengawasan_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    317            �          0    34095    laporan_pengawasan 
   TABLE DATA           s  COPY public.laporan_pengawasan (id, created_at, created_by, updated_at, updated_by, is_deleted, deleted_at, deleted_by, tgl_pengecekan, share_location, alamat, lokasi_tiang, kawasan_kendali, ukuran, pemilik_reklame, konstruksi_reklame, konten_iklan, kota, kecamatan, kelurahan, waktu_pengawasan, status_reklame, jenis_reklame, tindak_dokumentasi, longtitude) FROM stdin;
    public          postgres    false    317   ~       �           0    0    laporan_pengawasan_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.laporan_pengawasan_id_seq', 22, true);
          public          postgres    false    318                       2606    34105 )   laporan_pengawasan lapora_pengawasan_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.laporan_pengawasan
    ADD CONSTRAINT lapora_pengawasan_pkey PRIMARY KEY (id);
 S   ALTER TABLE ONLY public.laporan_pengawasan DROP CONSTRAINT lapora_pengawasan_pkey;
       public            postgres    false    317            �   �   x����N�0���ST9���6�Cp�M(���U�������b�v�gG�勆��F�)V���&,�k�
�(@�����m9��h��� $�N u��vC���ᐶwy���U��}�ҍyH��5����o��Ӧ�Ǭ�ꋢK-]���w�~0�B(��7f6IS����\pA�^��G�T�Z�V�F�}���+�֘4m���O.~����~ڵ�֞g�|1     