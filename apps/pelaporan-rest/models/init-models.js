var DataTypes = require("sequelize").DataTypes;
var _LaporanKegiatan = require("./laporan_kegiatan");
var _LaporanKejadian = require("./laporan_kejadian");
var _LaporanKejadianKekerasanPadaPerempuanDanAnak = require("./laporan_kejadian_kekerasan_pada_perempuan_dan_anak");
var _LaporanPengawasan = require("./laporan_pengawasan");
var _LaporanTamuDaerah = require("./laporan_tamu_daerah");

function initModels(sequelize) {
  var LaporanKegiatan = _LaporanKegiatan(sequelize, DataTypes);
  var LaporanKejadian = _LaporanKejadian(sequelize, DataTypes);
  var LaporanKejadianKekerasanPadaPerempuanDanAnak = _LaporanKejadianKekerasanPadaPerempuanDanAnak(sequelize, DataTypes);
  var LaporanPengawasan = _LaporanPengawasan(sequelize, DataTypes);
  var LaporanTamuDaerah = _LaporanTamuDaerah(sequelize, DataTypes);


  return {
    LaporanKegiatan,
    LaporanKejadian,
    LaporanKejadianKekerasanPadaPerempuanDanAnak,
    LaporanPengawasan,
    LaporanTamuDaerah,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
