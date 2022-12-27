var DataTypes = require("sequelize").DataTypes;
var _MapMasterPerdaJeniskegiatan = require("./map_master_perda_jeniskegiatan");
var _MapMasterPerdaJenispenyelesaian = require("./map_master_perda_jenispenyelesaian");
var _MasterAgama = require("./master_agama");
var _MasterDiklat = require("./master_diklat");
var _MasterEselon = require("./master_eselon");
var _MasterGlobalDistricts = require("./master_global_districts");
var _MasterGlobalProvinces = require("./master_global_provinces");
var _MasterGolongan = require("./master_golongan");
var _MasterJabatan = require("./master_jabatan");
var _MasterJenisAsalLaporan = require("./master_jenis_asal_laporan");
var _MasterJenisBantuan = require("./master_jenis_bantuan");
var _MasterJenisKegiatan = require("./master_jenis_kegiatan");
var _MasterJenisKejadian = require("./master_jenis_kejadian");
var _MasterJenisKekerasan = require("./master_jenis_kekerasan");
var _MasterJenisKendali = require("./master_jenis_kendali");
var _MasterJenisKorbanJiwa = require("./master_jenis_korban_jiwa");
var _MasterJenisKorbanMaterial = require("./master_jenis_korban_material");
var _MasterJenisPelanggaran = require("./master_jenis_pelanggaran");
var _MasterJenisPenertiban = require("./master_jenis_penertiban");
var _MasterJenisPengamanan = require("./master_jenis_pengamanan");
var _MasterJenisPenindakan = require("./master_jenis_penindakan");
var _MasterJenisPenyelesaian = require("./master_jenis_penyelesaian");
var _MasterJenisPerdaPerkada = require("./master_jenis_perda_perkada");
var _MasterJenisPertolongan = require("./master_jenis_pertolongan");
var _MasterJenisProsesKhusus = require("./master_jenis_proses_khusus");
var _MasterJenisReklame = require("./master_jenis_reklame");
var _MasterJenisUsaha = require("./master_jenis_usaha");
var _MasterKecamatan = require("./master_kecamatan");
var _MasterKelurahan = require("./master_kelurahan");
var _MasterKota = require("./master_kota");
var _MasterPangkat = require("./master_pangkat");
var _MasterPendidikan = require("./master_pendidikan");
var _MasterSkpd = require("./master_skpd");
var _MasterStatusKenaikanPangkat = require("./master_status_kenaikan_pangkat");
var _MasterStatusReklame = require("./master_status_reklame");
var _MasterSumberInformasi = require("./master_sumber_informasi");
var _MasterTempatPelaksanaan = require("./master_tempat_pelaksanaan");
var _MasterTempatSeksiPelaksanaan = require("./master_tempat_seksi_pelaksanaan");

function initModels(sequelize) {
  var MapMasterPerdaJeniskegiatan = _MapMasterPerdaJeniskegiatan(sequelize, DataTypes);
  var MapMasterPerdaJenispenyelesaian = _MapMasterPerdaJenispenyelesaian(sequelize, DataTypes);
  var MasterAgama = _MasterAgama(sequelize, DataTypes);
  var MasterDiklat = _MasterDiklat(sequelize, DataTypes);
  var MasterEselon = _MasterEselon(sequelize, DataTypes);
  var MasterGlobalDistricts = _MasterGlobalDistricts(sequelize, DataTypes);
  var MasterGlobalProvinces = _MasterGlobalProvinces(sequelize, DataTypes);
  var MasterGolongan = _MasterGolongan(sequelize, DataTypes);
  var MasterJabatan = _MasterJabatan(sequelize, DataTypes);
  var MasterJenisAsalLaporan = _MasterJenisAsalLaporan(sequelize, DataTypes);
  var MasterJenisBantuan = _MasterJenisBantuan(sequelize, DataTypes);
  var MasterJenisKegiatan = _MasterJenisKegiatan(sequelize, DataTypes);
  var MasterJenisKejadian = _MasterJenisKejadian(sequelize, DataTypes);
  var MasterJenisKekerasan = _MasterJenisKekerasan(sequelize, DataTypes);
  var MasterJenisKendali = _MasterJenisKendali(sequelize, DataTypes);
  var MasterJenisKorbanJiwa = _MasterJenisKorbanJiwa(sequelize, DataTypes);
  var MasterJenisKorbanMaterial = _MasterJenisKorbanMaterial(sequelize, DataTypes);
  var MasterJenisPelanggaran = _MasterJenisPelanggaran(sequelize, DataTypes);
  var MasterJenisPenertiban = _MasterJenisPenertiban(sequelize, DataTypes);
  var MasterJenisPengamanan = _MasterJenisPengamanan(sequelize, DataTypes);
  var MasterJenisPenindakan = _MasterJenisPenindakan(sequelize, DataTypes);
  var MasterJenisPenyelesaian = _MasterJenisPenyelesaian(sequelize, DataTypes);
  var MasterJenisPerdaPerkada = _MasterJenisPerdaPerkada(sequelize, DataTypes);
  var MasterJenisPertolongan = _MasterJenisPertolongan(sequelize, DataTypes);
  var MasterJenisProsesKhusus = _MasterJenisProsesKhusus(sequelize, DataTypes);
  var MasterJenisReklame = _MasterJenisReklame(sequelize, DataTypes);
  var MasterJenisUsaha = _MasterJenisUsaha(sequelize, DataTypes);
  var MasterKecamatan = _MasterKecamatan(sequelize, DataTypes);
  var MasterKelurahan = _MasterKelurahan(sequelize, DataTypes);
  var MasterKota = _MasterKota(sequelize, DataTypes);
  var MasterPangkat = _MasterPangkat(sequelize, DataTypes);
  var MasterPendidikan = _MasterPendidikan(sequelize, DataTypes);
  var MasterSkpd = _MasterSkpd(sequelize, DataTypes);
  var MasterStatusKenaikanPangkat = _MasterStatusKenaikanPangkat(sequelize, DataTypes);
  var MasterStatusReklame = _MasterStatusReklame(sequelize, DataTypes);
  var MasterSumberInformasi = _MasterSumberInformasi(sequelize, DataTypes);
  var MasterTempatPelaksanaan = _MasterTempatPelaksanaan(sequelize, DataTypes);
  var MasterTempatSeksiPelaksanaan = _MasterTempatSeksiPelaksanaan(sequelize, DataTypes);


  return {
    MapMasterPerdaJeniskegiatan,
    MapMasterPerdaJenispenyelesaian,
    MasterAgama,
    MasterDiklat,
    MasterEselon,
    MasterGlobalDistricts,
    MasterGlobalProvinces,
    MasterGolongan,
    MasterJabatan,
    MasterJenisAsalLaporan,
    MasterJenisBantuan,
    MasterJenisKegiatan,
    MasterJenisKejadian,
    MasterJenisKekerasan,
    MasterJenisKendali,
    MasterJenisKorbanJiwa,
    MasterJenisKorbanMaterial,
    MasterJenisPelanggaran,
    MasterJenisPenertiban,
    MasterJenisPengamanan,
    MasterJenisPenindakan,
    MasterJenisPenyelesaian,
    MasterJenisPerdaPerkada,
    MasterJenisPertolongan,
    MasterJenisProsesKhusus,
    MasterJenisReklame,
    MasterJenisUsaha,
    MasterKecamatan,
    MasterKelurahan,
    MasterKota,
    MasterPangkat,
    MasterPendidikan,
    MasterSkpd,
    MasterStatusKenaikanPangkat,
    MasterStatusReklame,
    MasterSumberInformasi,
    MasterTempatPelaksanaan,
    MasterTempatSeksiPelaksanaan,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
