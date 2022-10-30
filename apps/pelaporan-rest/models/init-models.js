var DataTypes = require("sequelize").DataTypes;
var _LaporanKegiatan = require("./laporan_kegiatan");
var _LaporanKegiatanDokumentasi = require("./laporan_kegiatan_dokumentasi");
var _LaporanKegiatanPenindakanMinumanAlkohol = require("./laporan_kegiatan_penindakan_minuman_alkohol");

function initModels(sequelize) {
  var LaporanKegiatan = _LaporanKegiatan(sequelize, DataTypes);
  var LaporanKegiatanDokumentasi = _LaporanKegiatanDokumentasi(sequelize, DataTypes);
  var LaporanKegiatanPenindakanMinumanAlkohol = _LaporanKegiatanPenindakanMinumanAlkohol(sequelize, DataTypes);


  return {
    LaporanKegiatan,
    LaporanKegiatanDokumentasi,
    LaporanKegiatanPenindakanMinumanAlkohol,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
