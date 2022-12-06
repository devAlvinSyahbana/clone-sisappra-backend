"use strict";

const path = require("path");
const fs = require("fs");
const csv = require("fast-csv");
const Enumerable = require('linq')
const { postSchema } = require("./schema");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../../config/config.js")[env];


module.exports = async function(server, opts) {

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
    })
  }

  const importMapPerdaJenisKegiatan = async ({ filePath, resolve, reject }) => {
    const records = await readCSV({ filePath })
    const query = Enumerable.from(records)
    console.log(query.count())

    const mapModel = server.models.MapMasterPerdaJeniskegiatan
    const jenisKegiatanModel = server.models.MasterJenisKegiatan
    const perdaModel = server.models.MasterJenisPerdaPerkada
    let add = [], update = []

    const jenisKegiatanInFile = query.select((v)=>(v['JENIS KEGIATAN'])).distinct().toArray();

    const exists = Enumerable.from(await mapModel.findAll({
      where: {
        ...server.dbfilters.notDeleted
      }
    }))

    const jenisKegiatanAllRecords = Enumerable.from(await jenisKegiatanModel.findAll({
      where: {
        ...server.dbfilters.notDeleted
      }
    }))

    const perdaAllRecords = Enumerable.from(await perdaModel.findAll({
      where: {
        ...server.dbfilters.notDeleted
      }
    }))

    query.forEach((v)=>{
      const perdaId = perdaAllRecords.where((c)=>(c.judul.toLowerCase().includes(v.PERDA.toLowerCase()) && c.pasal.toLowerCase() === v.PASAL.toLowerCase())).select((e)=>(e.id)).firstOrDefault();
      const jenisKegiatanId = jenisKegiatanAllRecords.where((c)=>(c.nama === v['JENIS KEGIATAN'])).select((e)=>(e.id)).firstOrDefault();

      if(exists.count((c)=> (c.perda_id === perdaId && c.jenis_kegiatan_id === jenisKegiatanId)) === 0){
        add.push(server.entity.track({ perda_id: perdaId, jenis_kegiatan_id: jenisKegiatanId }).markCreated("unknown"))
      }
    })

    resolve({add, update})
  };

  const importMapPerdaJenisPenyelesaian = async ({ filePath, resolve, reject }) => {
    const records = await readCSV({ filePath })
    const query = Enumerable.from(records)
    console.log(query.count())
    resolve(query.where((v)=> (v['JENIS PENYELESAIAN'] === "")).toArray())

    const mapModel = server.models.MapMasterPerdaJenispenyelesaian
    const jenisPenyelesaianModel = server.models.MasterJenisPenyelesaian
    const perdaModel = server.models.MasterJenisPerdaPerkada
  };

  server.post("/", { schema: postSchema, attachValidation: true }, async function(req, reply) {
    if (req.validationError) {
      return reply.code(400).send({success: false, ...request.validationError})
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
        case 'MapPerdaJenisKegiatan':
          await importMapPerdaJenisKegiatan({filePath: tempFile + '/map_master_perda_jeniskegiatan.csv', resolve, reject});
          break;
        case 'MapPerdaJenisPenyelesaian':
          await importMapPerdaJenisPenyelesaian({filePath: tempFile + '/map_master_perda_jenispenyelesaian.csv', resolve, reject});
          break;
        default:
          reject('invalid entity')
          break;
      }
    }).then((data) => {
      reply.send({ success: true, data });
    }).catch((error) => {
      reply.code(500).send({ success: false, error });
    });
  });
};
