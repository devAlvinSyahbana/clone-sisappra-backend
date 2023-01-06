"use strict";

const path = require("path");
const fs = require("fs");
const csv = require("fast-csv");
const Enumerable = require("linq");
const { postSchema } = require("./schema");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../../config/config.js")[env];


module.exports = async function (server, opts) {

  const readCSV = ({ filePath }) => {
    let records = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv.parse({ headers: true, delimiter: ";" }))
        .on("error", (error) => {
          reject(error);
          throw error;
        })
        .on("data", (row) => {
          records.push(row);
        })
        .on("end", (rowCount) => {
          console.log(`Parsed ${rowCount} rows`);
          resolve(records);
        });
    });
  };

  const importMapPerdaJenisKegiatan = async ({ filePath, resolve, reject }) => {
    const records = await readCSV({ filePath });
    const query = Enumerable.from(records);

    const mapModel = server.models.MapMasterPerdaJeniskegiatan;
    const jenisKegiatanModel = server.models.MasterJenisKegiatan;
    const perdaModel = server.models.MasterJenisPerdaPerkada;

    const data = query.toArray();
    const dataJenisKegiatan = query.select((v) => v["JENIS KEGIATAN"]).distinct().toArray();
    let toAdd = [], jenisKegiatanNotFound = [], perdasAvail = [], perdasNotFound = [];
    let numOfRecordsAdded = 0, numOfNotMatch = 0;

    async function runImport() {
      for (const v of data) {
        const perda = await perdaModel.findOne({
          where: {
            judul: v["PERDA"],
            pasal: v["PASAL"],
            jenis_penertiban: v["JENIS PENERTIBAN"],
            ...server.dbfilters.notDeleted
          }
        });

        if (perda == null) {
          perdasNotFound.push({
            judul: v["PERDA"],
            pasal: v["PASAL"],
            jenis_penertiban: v["JENIS PENERTIBAN"]
          })
        }

        let jenisKegiatan = await jenisKegiatanModel.findOne({
          where: {
            nama: v["JENIS KEGIATAN"],
            ...server.dbfilters.notDeleted
          }
        });

        if (jenisKegiatan == null) {
          jenisKegiatanNotFound.push(v['JENIS KEGIATAN'])
        }

        if (perda != null && jenisKegiatan != null) {
          const map = await mapModel.findOne({
            where: {
              perda_id: perda.id, jenis_kegiatan_id: jenisKegiatan.id,
              ...server.dbfilters.notDeleted
            }
          });

          if (map == null) {
            toAdd.push(server.entity.track({
              perda_id: perda.id,
              jenis_kegiatan_id: jenisKegiatan.id
            }).markCreated("system"));
            numOfRecordsAdded++;
          }
        }
      }

      if (perdasNotFound.length > 0 || jenisKegiatanNotFound.length > 0) {
        reject([{ errorPerdas: perdasNotFound, errorJenisKegiatan: jenisKegiatanNotFound }])
        return;
      }

      if (toAdd.length > 0) {
        const act = await mapModel.bulkCreate(toAdd);
        console.log(act.dataValues);
      }

      resolve([{ rowCsv: data.length, recordsAdded: numOfRecordsAdded }]);
    }

    await runImport();
  };

  const importMapPerdaJenisPenyelesaian = async ({ filePath, resolve, reject }) => {
    const records = await readCSV({ filePath });
    const query = Enumerable.from(records);

    const mapModel = server.models.MapMasterPerdaJenispenyelesaian;
    const jenisPenyelesaianModel = server.models.MasterJenisPenyelesaian;
    const perdaModel = server.models.MasterJenisPerdaPerkada;

    const data = query.toArray();
    const dataJenisPenyelesaian = query.select((v) => v["JENIS PENYELESAIAN"]).distinct().toArray();
    let toAdd = [], toAddJenisPenyelesaian = [], perdasAvail = [], perdasNotFound = [];
    let numOfRecordsAdded = 0, numOfNotMatch = 0;

    async function runImport() {
      for (const v of data) {
        const perda = await perdaModel.findOne({
          where: {
            judul: v["PERDA"],
            pasal: v["PASAL"],
            jenis_penertiban: v["JENIS PENERTIBAN"],
            ...server.dbfilters.notDeleted
          }
        });

        let jenisPenyelesaian = await jenisPenyelesaianModel.findOne({
          where: {
            nama: v["JENIS PENYELESAIAN"],
            ...server.dbfilters.notDeleted
          }
        });

        if (perda != null && jenisPenyelesaian != null) {
          const map = await mapModel.findOne({
            where: {
              perda_id: perda.id, jenis_penyelesaian_id: jenisPenyelesaian.id,
              ...server.dbfilters.notDeleted
            }
          });

          if (map == null) {
            toAdd.push(server.entity.track({
              perda_id: perda.id,
              jenis_penyelesaian_id: jenisPenyelesaian.id
            }).markCreated("system"));
            numOfRecordsAdded++;
          }
        }
        else {
          perdasNotFound.push({
            judul: v["PERDA"],
            pasal: v["PASAL"],
            jenis_penertiban: v["JENIS PENERTIBAN"]
          })
        }
      }

      if (perdasNotFound.length > 0) {
        reject([{ errorPerdas: perdasNotFound }])
        return;
      }

      if (toAdd.length > 0) {
        const act = await mapModel.bulkCreate(toAdd);
        console.log(act.dataValues);
      }

      resolve([{ rowCsv: data.length, recordsAdded: numOfRecordsAdded }]);
    }

    for (const v of dataJenisPenyelesaian) {
      let jenisPenyelesaian = await jenisPenyelesaianModel.findOne({
        where: {
          nama: v,
          ...server.dbfilters.notDeleted
        }
      });

      if (jenisPenyelesaian == null) {
        toAddJenisPenyelesaian.push(server.entity.track({ nama: v }).markCreated("system"));
      }
    }

    if (toAddJenisPenyelesaian.length > 0) {
      const act = await jenisPenyelesaianModel.bulkCreate(toAddJenisPenyelesaian);
      console.log(act.dataValues);
    }

    await runImport();
  };

  const importMasterPerda = async ({ filePath, resolve, reject }) => {
    const dataCsv = await readCSV({ filePath });
    const query = Enumerable.from(dataCsv);
    const perdaModel = server.models.MasterJenisPerdaPerkada;
    let numOfRecordsAdded = 0;
    const data = query.toArray();
    let toAdd = [];

    for (const v of data) {
      let record = await perdaModel.findOne({
        where: {
          judul: v["PERDA"],
          pasal: v["PASAL"],
          jenis_penertiban: v["JENIS PENERTIBAN"],
          jenis_pelanggaran: v["JENIS PELANGGARAN"],
          ...server.dbfilters.notDeleted
        }
      });

      if (record != null) continue;

      record = {
        judul: v["PERDA"],
        pasal: v["PASAL"],
        jenis_penertiban: v["JENIS PENERTIBAN"],
        jenis_pelanggaran: v["JENIS PELANGGARAN"]
      };

      record = server.entity.track(record).markCreated("system");
      toAdd.push(record);
      numOfRecordsAdded++;
    }

    if (toAdd.length > 0) {
      const actCreated = await perdaModel.bulkCreate(toAdd);
      console.log(actCreated.values());
    }

    resolve([{ rowCsv: data.length, recordsAdded: numOfRecordsAdded }]);
  };

  const importMasterPenyelesaian = async ({ filePath, resolve, reject }) => {
    const dataCsv = await readCSV({ filePath });
    const query = Enumerable.from(dataCsv);
    const JenisPenyelesaianModel = server.models.MasterJenisPenyelesaian;
    let numOfRecordsAdded = 0;
    const data = query.toArray();
    let toAdd = [];

    for (const v of data) {
      let record = await JenisPenyelesaianModel.findOne({
        where: {
          nama: v["nama"],
          ...server.dbfilters.notDeleted
        }
      });

      if (record != null) continue;

      record = {
        nama: v["nama"],
      };

      record = server.entity.track(record).markCreated("system");
      toAdd.push(record);
      numOfRecordsAdded++;
    }

    if (toAdd.length > 0) {
      const actCreated = await JenisPenyelesaianModel.bulkCreate(toAdd);
      console.log(actCreated.values());
    }

    resolve([{ rowCsv: data.length, recordsAdded: numOfRecordsAdded }]);
  };

  server.post("/", { schema: postSchema, attachValidation: true }, async function (req, reply) {
    if (req.validationError) {
      return reply.code(400).send({ success: false, ...req.validationError });
    }

    const { file_minioResult, entity } = req.body;
    let tempFile = path.join(__dirname, "/../../", "demo", "data");

    return new Promise(async (resolve, reject) => {
      //TODO: get file from url still makes app restart
      // const cdnFileUrl = `${config.services_internal.cdn}/${file_minioResult.Bucket}/${file_minioResult.Key}`;
      // console.log(cdnFileUrl);
      // request.get(cdnFileUrl).pipe(fs.createWriteStream(tempFile)).on('close', () => {
      //   importMapPerdaJenisKegiatan({filePath: tempFile, resolve, reject});
      // });
      switch (entity) {
        case "MasterPerda":
          await importMasterPerda({ filePath: tempFile + "/perdav2.csv", resolve, reject });
          break;
        case "MasterJenisPenyelesaian":
          await importMasterPenyelesaian({ filePath: tempFile + "/jenis_penyelesaian.csv", resolve, reject });
          break;
        case "MapPerdaJenisKegiatan":
          await importMapPerdaJenisKegiatan({
            filePath: tempFile + "/map_master_perda_jeniskegiatan.csv",
            resolve,
            reject
          });
          break;
        case "MapPerdaJenisPenyelesaian":
          await importMapPerdaJenisPenyelesaian({
            filePath: tempFile + "/map_master_perda_jenispenyelesaian.csv",
            resolve,
            reject
          });
          break;
        default:
          reject("invalid entity");
          break;
      }
    }).then((data) => {
      reply.send({ success: true, data });
    }).catch((error) => {
      reply.code(500).send({ success: false, error });
    });
  });
};
