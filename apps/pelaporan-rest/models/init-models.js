var DataTypes = require("sequelize").DataTypes;
var _LaporanKegiatan = require("./laporan_kegiatan");
var _LaporanKegiatanPenindakanMinumanAlkohol = require("./laporan_kegiatan_penindakan_minuman_alkohol");
var _LaporanKejadian = require("./laporan_kejadian");

function initModels(sequelize) {
  var LaporanKegiatan = _LaporanKegiatan(sequelize, DataTypes);
  var LaporanKegiatanPenindakanMinumanAlkohol = _LaporanKegiatanPenindakanMinumanAlkohol(sequelize, DataTypes);
  var LaporanKejadian = _LaporanKejadian(sequelize, DataTypes);


  return {
    LaporanKegiatan,
    LaporanKegiatanPenindakanMinumanAlkohol,
    LaporanKejadian,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
