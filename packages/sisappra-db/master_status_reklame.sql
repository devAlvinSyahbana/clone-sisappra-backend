PGDMP     3             	         {         
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
                postgres    false            [           1259    35130    master_status_reklame    TABLE     �  CREATE TABLE public.master_status_reklame (
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
 )   DROP TABLE public.master_status_reklame;
       public         heap    postgres    false            Z           1259    35129    master_status_reklame_id_seq    SEQUENCE     �   ALTER TABLE public.master_status_reklame ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.master_status_reklame_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    347            �          0    35130    master_status_reklame 
   TABLE DATA           �   COPY public.master_status_reklame (id, nama, is_deleted, deleted_at, deleted_by, created_at, created_by, updated_at, updated_by) FROM stdin;
    public          postgres    false    347   �
       �           0    0    master_status_reklame_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.master_status_reklame_id_seq', 3, true);
          public          postgres    false    346            ;           2606    35138 0   master_status_reklame master_status_reklame_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.master_status_reklame
    ADD CONSTRAINT master_status_reklame_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.master_status_reklame DROP CONSTRAINT master_status_reklame_pkey;
       public            postgres    false    347            �   ;   x�3�t�.�L�4���!##c]C]sCs+ ����qs�d�$f+��%F��� �{�     