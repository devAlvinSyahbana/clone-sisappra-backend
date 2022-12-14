var DataTypes = require("sequelize").DataTypes;
var _LaporanKegiatan = require("./laporan_kegiatan");
var _LaporanKegiatanPenindakanMinumanAlkohol = require("./laporan_kegiatan_penindakan_minuman_alkohol");
var _LaporanKejadian = require("./laporan_kejadian");
var _LaporanKejadianKekerasanPadaPerempuanDanAnak = require("./laporan_kejadian_kekerasan_pada_perempuan_dan_anak");

function initModels(sequelize) {
  var LaporanKegiatan = _LaporanKegiatan(sequelize, DataTypes);
  var LaporanKegiatanPenindakanMinumanAlkohol = _LaporanKegiatanPenindakanMinumanAlkohol(sequelize, DataTypes);
  var LaporanKejadian = _LaporanKejadian(sequelize, DataTypes);
  var LaporanKejadianKekerasanPadaPerempuanDanAnak = _LaporanKejadianKekerasanPadaPerempuanDanAnak(sequelize, DataTypes);


  return {
    LaporanKegiatan,
    LaporanKegiatanPenindakanMinumanAlkohol,
    LaporanKejadian,
    LaporanKejadianKekerasanPadaPerempuanDanAnak,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
