# Getting Started with [Fastify-CLI](https://www.npmjs.com/package/fastify-cli)
This project was bootstrapped with Fastify-CLI.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start`

For production mode

### `npm run test`

Run the test cases.

### Restore db in docker

```shell
docker exec -i db pg_restore -U postgres -v -d dbsisappra < 20220916_dbsisappra
```

### Generate Models

```shell
npx sequelize-auto -o "./models" -d dbsisappra -h 167.71.208.184 -u postgres -x P@ssw0rd123! -p 5432 -e postgres --cm p --cp o -c auto-config.json \
-t "master_agama" \
-t "master_diklat" \
-t "master_eselon" \
-t "master_global_districts" \
-t "master_global_provinces" \
-t "master_global_vilages" \
-t "master_golongan" \
-t "master_jabatan" \
-t "master_jenis_bantuan" \
-t "master_jenis_kegiatan" \
-t "master_jenis_kejadian" \
-t "master_jenis_kekerasan" \
-t "master_jenis_korban_jiwa" \
-t "master_jenis_korban_material" \
-t "master_jenis_pelanggaran" \
-t "master_jenis_penertiban" \
-t "master_jenis_penindakan" \
-t "master_jenis_penyelesaian" \
-t "master_jenis_perda_perkada" \
-t "master_jenis_pertolongan" \
-t "master_jenis_usaha" \
-t "master_kecamatan" \
-t "master_kelurahan" \
-t "master_kota" \
-t "master_pangkat" \
-t "master_pendidikan" \
-t "master_skpd" \
-t "master_status_kenaikan_pangkat" \
-t "master_sumber_informasi" \
-t "master_tempat_pelaksanaan" \
-t "master_tempat_seksi_pelaksanaan" \
-t "map_master_perda_jenispenyelesaian" \
-t "map_master_perda_jeniskegiatan"
```

## Learn More

To learn Fastify, check out the [Fastify documentation](https://www.fastify.io/docs/latest/).
