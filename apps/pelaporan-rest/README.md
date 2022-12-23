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
-t laporan_kegiatan \
-t laporan_kegiatan_penindakan_minuman_alkohol \
-t laporan_kegiatan_dokumentasi \
-t laporan_kejadian \
-t laporan_pengawasan \
-t laporan_kejadian_kekerasan_pada_perempuan_dan_anak \
-t laporan_tamu_daerah

```

## Learn More

To learn Fastify, check out the [Fastify documentation](https://www.fastify.io/docs/latest/).
