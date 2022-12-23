var DataTypes = require("sequelize").DataTypes;
var _LaporanKegiatan = require("./laporan_kegiatan");
var _LaporanKejadian = require("./laporan_kejadian");

function initModels(sequelize) {
  var LaporanKegiatan = _LaporanKegiatan(sequelize, DataTypes);
  var LaporanKejadian = _LaporanKejadian(sequelize, DataTypes);


  return {
    LaporanKegiatan,
    LaporanKejadian,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
