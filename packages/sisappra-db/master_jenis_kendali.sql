PGDMP     :             	         {         
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
                postgres    false            _           1259    35180    master_jenis_kendali    TABLE     �  CREATE TABLE public.master_jenis_kendali (
    id integer NOT NULL,
    nama character varying NOT NULL,
    is_deleted integer DEFAULT 0,
    deleted_at timestamp without time zone,
    deleted_by character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    created_by character varying,
    updated_at timestamp without time zone,
    updated_by character varying
);
 (   DROP TABLE public.master_jenis_kendali;
       public         heap    postgres    false            ^           1259    35179    master_jenis_kendali_id_seq    SEQUENCE     �   ALTER TABLE public.master_jenis_kendali ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.master_jenis_kendali_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    351            �          0    35180    master_jenis_kendali 
   TABLE DATA           �   COPY public.master_jenis_kendali (id, nama, is_deleted, deleted_at, deleted_by, created_at, created_by, updated_at, updated_by) FROM stdin;
    public          postgres    false    351   �
       �           0    0    master_jenis_kendali_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.master_jenis_kendali_id_seq', 5, true);
          public          postgres    false    350            ;           2606    35188 .   master_jenis_kendali master_jenis_kendali_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.master_jenis_kendali
    ADD CONSTRAINT master_jenis_kendali_pkey PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.master_jenis_kendali DROP CONSTRAINT master_jenis_kendali_pkey;
       public            postgres    false    351            �   �   x�3��N,O,N�S�N�KI���%�%��1~ dd`d�k`�k`�`hne` DP�?.#���)�y���6���3��m�НQZ\ZL�.S���ļ�D��Լ�ԜԼ��ĢD�hPjvNbn*q���qqq uXR6     