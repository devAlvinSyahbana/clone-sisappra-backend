PGDMP                  	         {         
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
                postgres    false            ]           1259    35140    master_jenis_reklame    TABLE     �  CREATE TABLE public.master_jenis_reklame (
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
 (   DROP TABLE public.master_jenis_reklame;
       public         heap    postgres    false            \           1259    35139    master_jenis_reklame_id_seq    SEQUENCE     �   ALTER TABLE public.master_jenis_reklame ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.master_jenis_reklame_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    349            �          0    35140    master_jenis_reklame 
   TABLE DATA           �   COPY public.master_jenis_reklame (id, nama, is_deleted, deleted_at, deleted_by, created_at, created_by, updated_at, updated_by) FROM stdin;
    public          postgres    false    349   �
       �           0    0    master_jenis_reklame_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.master_jenis_reklame_id_seq', 13, true);
          public          postgres    false    348            ;           2606    35148 .   master_jenis_reklame master_jenis_reklame_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.master_jenis_reklame
    ADD CONSTRAINT master_jenis_reklame_pkey PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.master_jenis_reklame DROP CONSTRAINT master_jenis_reklame_pkey;
       public            postgres    false    349            �   �   x���;�0���&�Qu��| ��\�Ybc*!~{#J�xpC ���ǉ����;�#<@G�T�h���çb�\�y�D2���o'?���{���F��E��|��Ւ�3�9[��fF��`Y'��Fӥ����� 6�x����r϶E]� jB��FC���O2�y���e�}M
ގ�ȗ����+�jGic�*�$�vtvnt��0���     