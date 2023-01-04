var DataTypes = require("sequelize").DataTypes;
var _LaporanPengawasan = require("./laporan_pengawasan");

function initModels(sequelize) {
  var LaporanPengawasan = _LaporanPengawasan(sequelize, DataTypes);


  return {
    LaporanPengawasan,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
