var DataTypes = require("sequelize").DataTypes;
var _LaporanKegiatan = require("./laporan_kegiatan");
var _LaporanKegiatanPenindakanMinumanAlkohol = require("./laporan_kegiatan_penindakan_minuman_alkohol");

function initModels(sequelize) {
  var LaporanKegiatan = _LaporanKegiatan(sequelize, DataTypes);
  var LaporanKegiatanPenindakanMinumanAlkohol = _LaporanKegiatanPenindakanMinumanAlkohol(sequelize, DataTypes);


  return {
    LaporanKegiatan,
    LaporanKegiatanPenindakanMinumanAlkohol,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
