PGDMP         %                 {         
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
                postgres    false            R           1259    34198    laporan_kegiatan    TABLE     �  CREATE TABLE public.laporan_kegiatan (
    id integer NOT NULL,
    is_deleted smallint DEFAULT 0,
    deleted_by character varying(64),
    deleted_at timestamp without time zone,
    created_by character varying(64) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_by character varying(64),
    updated_at timestamp without time zone,
    kegiatan__jenis_kegiatan_id integer,
    kegiatan__jumlah_personil integer,
    kegiatan__uraian_kegiatan character varying(255),
    kegiatan__tanggal date,
    kegiatan__jam_start character varying(16),
    kegiatan__jam_end character varying(16),
    kegiatan__lokasi character varying(128),
    kegiatan__asal_laporan_id integer,
    kegiatan__jenis_pengamanan_id integer,
    kegiatan__masalah character varying(255),
    kegiatan__pemecahan_masalah character varying(255),
    kegiatan__instansi_terkait character varying(64),
    tindak_lanjut__administrasi__jenis_pasal_id integer,
    tindak_lanjut__administrasi__jenis_penertiban character varying(255),
    tindak_lanjut__administrasi__jenis_pelanggaran character varying(255),
    tindak_lanjut__administrasi__perda_perkada character varying(64),
    tindak_lanjut__administrasi__penyelesaian_id integer,
    tindak_lanjut__administrasi__penyelesaian_khusus_id integer,
    tindak_lanjut__sidang__tanggal date,
    tindak_lanjut__sidang__jumlah_pelanggar_hadir integer,
    tindak_lanjut__sidang__jumlah_pelanggar_tidak_hadir integer,
    tindak_lanjut__sidang__jumlah_pelanggar_verstek integer,
    tindak_lanjut__identitas_pelanggar__no_bap character varying(64),
    tindak_lanjut__identitas_pelanggar__nama_penanggung_jawab character varying(64),
    tindak_lanjut__identitas_pelanggar__nama_tempat_usaha character varying(64),
    tindak_lanjut__identitas_pelanggar__alamat_tempat_usaha character varying(255),
    tindak_lanjut__identitas_pelanggar__nik character varying(32),
    tindak_lanjut__identitas_pelanggar__alamat character varying(255),
    tindak_lanjut__identitas_pelanggar__jenis_usaha_id integer,
    tindak_lanjut__identitas_pelanggar__nama_pemilik character varying(64),
    tindak_lanjut__identitas_pelanggar__luas_bongkaran integer,
    tindak_lanjut__jenis_penindakan_id integer,
    tindak_lanjut__jumlah_pelanggar integer,
    tindak_lanjut__denda__pengadilan integer,
    tindak_lanjut__denda__non_pengadilan integer,
    tindak_lanjut__denda__tanggal_setor date,
    tindak_lanjut__denda__nama_bank character varying(64),
    tindak_lanjut__denda__no_validasi_bank character varying(64),
    tindak_lanjut__rekom_citata__jenis_pelanggaran_id integer,
    tindak_lanjut__rekom_citata__no_sp character varying(16),
    tindak_lanjut__rekom_citata__tanggal_no_sp date,
    tindak_lanjut__rekom_citata__no_segel character varying(16),
    tindak_lanjut__rekom_citata__tanggal_segel date,
    tindak_lanjut__rekom_citata__no_spb character varying(16),
    tindak_lanjut__rekom_citata__tanggal_spb date,
    tindak_lanjut__rekom_citata__no_rekomtek character varying(16),
    tindak_lanjut__rekom_citata__tanggal_rekomtek date,
    tindak_lanjut__rekom_citata__tanggal_peninjauan_lapangan date,
    tindak_lanjut__jumlah_minol_merk json DEFAULT '[]'::json,
    dokumentasi json DEFAULT '[]'::json
);
 $   DROP TABLE public.laporan_kegiatan;
       public         heap    postgres    false            Q           1259    34197    laporan_kegiatan_id_seq    SEQUENCE     �   ALTER TABLE public.laporan_kegiatan ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.laporan_kegiatan_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    338            �          0    34198    laporan_kegiatan 
   TABLE DATA              COPY public.laporan_kegiatan (id, is_deleted, deleted_by, deleted_at, created_by, created_at, updated_by, updated_at, kegiatan__jenis_kegiatan_id, kegiatan__jumlah_personil, kegiatan__uraian_kegiatan, kegiatan__tanggal, kegiatan__jam_start, kegiatan__jam_end, kegiatan__lokasi, kegiatan__asal_laporan_id, kegiatan__jenis_pengamanan_id, kegiatan__masalah, kegiatan__pemecahan_masalah, kegiatan__instansi_terkait, tindak_lanjut__administrasi__jenis_pasal_id, tindak_lanjut__administrasi__jenis_penertiban, tindak_lanjut__administrasi__jenis_pelanggaran, tindak_lanjut__administrasi__perda_perkada, tindak_lanjut__administrasi__penyelesaian_id, tindak_lanjut__administrasi__penyelesaian_khusus_id, tindak_lanjut__sidang__tanggal, tindak_lanjut__sidang__jumlah_pelanggar_hadir, tindak_lanjut__sidang__jumlah_pelanggar_tidak_hadir, tindak_lanjut__sidang__jumlah_pelanggar_verstek, tindak_lanjut__identitas_pelanggar__no_bap, tindak_lanjut__identitas_pelanggar__nama_penanggung_jawab, tindak_lanjut__identitas_pelanggar__nama_tempat_usaha, tindak_lanjut__identitas_pelanggar__alamat_tempat_usaha, tindak_lanjut__identitas_pelanggar__nik, tindak_lanjut__identitas_pelanggar__alamat, tindak_lanjut__identitas_pelanggar__jenis_usaha_id, tindak_lanjut__identitas_pelanggar__nama_pemilik, tindak_lanjut__identitas_pelanggar__luas_bongkaran, tindak_lanjut__jenis_penindakan_id, tindak_lanjut__jumlah_pelanggar, tindak_lanjut__denda__pengadilan, tindak_lanjut__denda__non_pengadilan, tindak_lanjut__denda__tanggal_setor, tindak_lanjut__denda__nama_bank, tindak_lanjut__denda__no_validasi_bank, tindak_lanjut__rekom_citata__jenis_pelanggaran_id, tindak_lanjut__rekom_citata__no_sp, tindak_lanjut__rekom_citata__tanggal_no_sp, tindak_lanjut__rekom_citata__no_segel, tindak_lanjut__rekom_citata__tanggal_segel, tindak_lanjut__rekom_citata__no_spb, tindak_lanjut__rekom_citata__tanggal_spb, tindak_lanjut__rekom_citata__no_rekomtek, tindak_lanjut__rekom_citata__tanggal_rekomtek, tindak_lanjut__rekom_citata__tanggal_peninjauan_lapangan, tindak_lanjut__jumlah_minol_merk, dokumentasi) FROM stdin;
    public          postgres    false    338          �           0    0    laporan_kegiatan_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.laporan_kegiatan_id_seq', 2, true);
          public          postgres    false    337                       2606    34208 &   laporan_kegiatan laporan_kegiatan_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.laporan_kegiatan
    ADD CONSTRAINT laporan_kegiatan_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.laporan_kegiatan DROP CONSTRAINT laporan_kegiatan_pkey;
       public            postgres    false    338            �   �  x��RMo�0=O~�Ź��!��j��n��Hzj��dqX�!>Q���� j�5�x~�ϛ'����� $��5�<`B�2���<ׅR��V���L_�\e;,g'A��I�AD#��96R�)u�F�_��q��څ��٠��Oo�I���M�i���tNL���+�=��ҹrru&�y��SDf��N�S���NUW��B|<s�Y�0�}w%��<{�E�CXV`{Ɔ��X��f�J5��j5�Ϛ�f�\3o�Y���>9ln��a�Yo�N�����o���L��r��jV�2S�n�.��(���Ķ�B���a#)Ɗ���O��l��;�<��d��MH�_��M��s<��"�>򐴓�"��XN	�=E�
l��5]�m�t�l�R��ɼ7���}��ξZd�f:dg=��.�����     