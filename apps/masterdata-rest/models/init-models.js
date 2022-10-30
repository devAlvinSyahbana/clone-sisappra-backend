var DataTypes = require("sequelize").DataTypes;
var _AuthToken = require("./auth_token");
var _DashboardKejadian = require("./dashboard_kejadian");
var _DashboardKepegawaian = require("./dashboard_kepegawaian");
var _DashboardPenegakanPerdaPerkada = require("./dashboard_penegakan_perda_perkada");
var _DashboardPlottingAnggota = require("./dashboard_plotting_anggota");
var _DashboardTitikRawan = require("./dashboard_titik_rawan");
var _DashboardTitikReklameCitata = require("./dashboard_titik_reklame_citata");
var _DashboardTitikReklameSatpolpp = require("./dashboard_titik_reklame_satpolpp");
var _DashboardTramtibum = require("./dashboard_tramtibum");
var _DashboardWasdakPpkm = require("./dashboard_wasdak_ppkm");
var _HakAkses = require("./hak_akses");
var _JenisSaranaPrasarana = require("./jenis_sarana_prasarana");
var _KepegawaianNonPns = require("./kepegawaian_non_pns");
var _KepegawaianNonPnsKeluarga = require("./kepegawaian_non_pns_keluarga");
var _KepegawaianNonPnsPendidikan = require("./kepegawaian_non_pns_pendidikan");
var _KepegawaianPns = require("./kepegawaian_pns");
var _KepegawaianPnsKeluarga = require("./kepegawaian_pns_keluarga");
var _KepegawaianPnsPendidikan = require("./kepegawaian_pns_pendidikan");
var _KepegawaianPpns = require("./kepegawaian_ppns");
var _KondisiSaranaPrasarana = require("./kondisi_sarana_prasarana");
var _KontakPic = require("./kontak_pic");
var _LaporanKegiatan = require("./laporan_kegiatan");
var _LaporanKegiatanJenisKegiatan = require("./laporan_kegiatan_jenis_kegiatan");
var _LaporanKegiatanJenisPelanggaranBangunan = require("./laporan_kegiatan_jenis_pelanggaran_bangunan");
var _LaporanKegiatanJenisPenyelesaian = require("./laporan_kegiatan_jenis_penyelesaian");
var _LaporanKegiatanPelanggaranMinumanAlkohol = require("./laporan_kegiatan_pelanggaran_minuman_alkohol");
var _LaporanKegiatanPenertibanPpkm = require("./laporan_kegiatan_penertiban_ppkm");
var _LaporanKegiatanPenindakan = require("./laporan_kegiatan_penindakan");
var _LaporanKegiatanPenindakanMinumanAlkohol = require("./laporan_kegiatan_penindakan_minuman_alkohol");
var _LaporanKegiatanPenyelesaianMinumanAlkohol = require("./laporan_kegiatan_penyelesaian_minuman_alkohol");
var _LaporanKegiatanPenyelesaianPenertibanBangunan = require("./laporan_kegiatan_penyelesaian_penertiban_bangunan");
var _LaporanKegiatanPenyelesaianPpkm = require("./laporan_kegiatan_penyelesaian_ppkm");
var _LaporanKegiatanProses = require("./laporan_kegiatan_proses");
var _LaporanKejadian = require("./laporan_kejadian");
var _LaporanKejadianBanjir = require("./laporan_kejadian_banjir");
var _LaporanKejadianDokumentasi = require("./laporan_kejadian_dokumentasi");
var _LaporanKejadianJenisBantuan = require("./laporan_kejadian_jenis_bantuan");
var _LaporanKejadianJenisKejadian = require("./laporan_kejadian_jenis_kejadian");
var _LaporanKejadianJenisKekerasanPadaWanitaAnak = require("./laporan_kejadian_jenis_kekerasan_pada_wanita_anak");
var _LaporanKejadianJenisKekerasanUnjukRasa = require("./laporan_kejadian_jenis_kekerasan_unjuk_rasa");
var _LaporanKejadianKebakaran = require("./laporan_kejadian_kebakaran");
var _LaporanKejadianKekerasanPadaPerempuanDanAnak = require("./laporan_kejadian_kekerasan_pada_perempuan_dan_anak");
var _LaporanKejadianKorbanMaterial = require("./laporan_kejadian_korban_material");
var _LaporanKejadianSumberInformasiKekerasanPadaWanitaAnak = require("./laporan_kejadian_sumber_informasi_kekerasan_pada_wanita_anak");
var _LaporanKejadianSumberInformasiUnjukRasa = require("./laporan_kejadian_sumber_informasi_unjuk_rasa");
var _LaporanKejadianUnjukRasa = require("./laporan_kejadian_unjuk_rasa");
var _LaporanKejadianUnjukRasaTindakLanjut = require("./laporan_kejadian_unjuk_rasa_tindak_lanjut");
var _LaporanPengawasan = require("./laporan_pengawasan");
var _LaporanTamuDaerah = require("./laporan_tamu_daerah");
var _LaporanTamuDaerahDok = require("./laporan_tamu_daerah_dok");
var _MasterAgama = require("./master_agama");
var _MasterDiklat = require("./master_diklat");
var _MasterEselon = require("./master_eselon");
var _MasterGlobalDistricts = require("./master_global_districts");
var _MasterGlobalProvinces = require("./master_global_provinces");
var _MasterGlobalRegencies = require("./master_global_regencies");
var _MasterGlobalVillages = require("./master_global_villages");
var _MasterGolongan = require("./master_golongan");
var _MasterJabatan = require("./master_jabatan");
var _MasterJenisBantuan = require("./master_jenis_bantuan");
var _MasterJenisKegiatan = require("./master_jenis_kegiatan");
var _MasterJenisKejadian = require("./master_jenis_kejadian");
var _MasterJenisKekerasan = require("./master_jenis_kekerasan");
var _MasterJenisKorbanJiwa = require("./master_jenis_korban_jiwa");
var _MasterJenisKorbanMaterial = require("./master_jenis_korban_material");
var _MasterJenisPelanggaran = require("./master_jenis_pelanggaran");
var _MasterJenisPenertiban = require("./master_jenis_penertiban");
var _MasterJenisPenindakan = require("./master_jenis_penindakan");
var _MasterJenisPenyelesaian = require("./master_jenis_penyelesaian");
var _MasterJenisPerdaPerkada = require("./master_jenis_perda_perkada");
var _MasterJenisPertolongan = require("./master_jenis_pertolongan");
var _MasterJenisUsaha = require("./master_jenis_usaha");
var _MasterKecamatan = require("./master_kecamatan");
var _MasterKelurahan = require("./master_kelurahan");
var _MasterKota = require("./master_kota");
var _MasterPangkat = require("./master_pangkat");
var _MasterPendidikan = require("./master_pendidikan");
var _MasterSkpd = require("./master_skpd");
var _MasterStatusKenaikanPangkat = require("./master_status_kenaikan_pangkat");
var _MasterSumberInformasi = require("./master_sumber_informasi");
var _MasterTempatPelaksanaan = require("./master_tempat_pelaksanaan");
var _MasterTempatSeksiPelaksanaan = require("./master_tempat_seksi_pelaksanaan");
var _Pengguna = require("./pengguna");
var _SaranaPrasarana = require("./sarana_prasarana");
var _StatusSaranaPrasarana = require("./status_sarana_prasarana");
var _StrukturDataHirarki = require("./struktur_data_hirarki");

function initModels(sequelize) {
  var AuthToken = _AuthToken(sequelize, DataTypes);
  var DashboardKejadian = _DashboardKejadian(sequelize, DataTypes);
  var DashboardKepegawaian = _DashboardKepegawaian(sequelize, DataTypes);
  var DashboardPenegakanPerdaPerkada = _DashboardPenegakanPerdaPerkada(sequelize, DataTypes);
  var DashboardPlottingAnggota = _DashboardPlottingAnggota(sequelize, DataTypes);
  var DashboardTitikRawan = _DashboardTitikRawan(sequelize, DataTypes);
  var DashboardTitikReklameCitata = _DashboardTitikReklameCitata(sequelize, DataTypes);
  var DashboardTitikReklameSatpolpp = _DashboardTitikReklameSatpolpp(sequelize, DataTypes);
  var DashboardTramtibum = _DashboardTramtibum(sequelize, DataTypes);
  var DashboardWasdakPpkm = _DashboardWasdakPpkm(sequelize, DataTypes);
  var HakAkses = _HakAkses(sequelize, DataTypes);
  var JenisSaranaPrasarana = _JenisSaranaPrasarana(sequelize, DataTypes);
  var KepegawaianNonPns = _KepegawaianNonPns(sequelize, DataTypes);
  var KepegawaianNonPnsKeluarga = _KepegawaianNonPnsKeluarga(sequelize, DataTypes);
  var KepegawaianNonPnsPendidikan = _KepegawaianNonPnsPendidikan(sequelize, DataTypes);
  var KepegawaianPns = _KepegawaianPns(sequelize, DataTypes);
  var KepegawaianPnsKeluarga = _KepegawaianPnsKeluarga(sequelize, DataTypes);
  var KepegawaianPnsPendidikan = _KepegawaianPnsPendidikan(sequelize, DataTypes);
  var KepegawaianPpns = _KepegawaianPpns(sequelize, DataTypes);
  var KondisiSaranaPrasarana = _KondisiSaranaPrasarana(sequelize, DataTypes);
  var KontakPic = _KontakPic(sequelize, DataTypes);
  var LaporanKegiatan = _LaporanKegiatan(sequelize, DataTypes);
  var LaporanKegiatanJenisKegiatan = _LaporanKegiatanJenisKegiatan(sequelize, DataTypes);
  var LaporanKegiatanJenisPelanggaranBangunan = _LaporanKegiatanJenisPelanggaranBangunan(sequelize, DataTypes);
  var LaporanKegiatanJenisPenyelesaian = _LaporanKegiatanJenisPenyelesaian(sequelize, DataTypes);
  var LaporanKegiatanPelanggaranMinumanAlkohol = _LaporanKegiatanPelanggaranMinumanAlkohol(sequelize, DataTypes);
  var LaporanKegiatanPenertibanPpkm = _LaporanKegiatanPenertibanPpkm(sequelize, DataTypes);
  var LaporanKegiatanPenindakan = _LaporanKegiatanPenindakan(sequelize, DataTypes);
  var LaporanKegiatanPenindakanMinumanAlkohol = _LaporanKegiatanPenindakanMinumanAlkohol(sequelize, DataTypes);
  var LaporanKegiatanPenyelesaianMinumanAlkohol = _LaporanKegiatanPenyelesaianMinumanAlkohol(sequelize, DataTypes);
  var LaporanKegiatanPenyelesaianPenertibanBangunan = _LaporanKegiatanPenyelesaianPenertibanBangunan(sequelize, DataTypes);
  var LaporanKegiatanPenyelesaianPpkm = _LaporanKegiatanPenyelesaianPpkm(sequelize, DataTypes);
  var LaporanKegiatanProses = _LaporanKegiatanProses(sequelize, DataTypes);
  var LaporanKejadian = _LaporanKejadian(sequelize, DataTypes);
  var LaporanKejadianBanjir = _LaporanKejadianBanjir(sequelize, DataTypes);
  var LaporanKejadianDokumentasi = _LaporanKejadianDokumentasi(sequelize, DataTypes);
  var LaporanKejadianJenisBantuan = _LaporanKejadianJenisBantuan(sequelize, DataTypes);
  var LaporanKejadianJenisKejadian = _LaporanKejadianJenisKejadian(sequelize, DataTypes);
  var LaporanKejadianJenisKekerasanPadaWanitaAnak = _LaporanKejadianJenisKekerasanPadaWanitaAnak(sequelize, DataTypes);
  var LaporanKejadianJenisKekerasanUnjukRasa = _LaporanKejadianJenisKekerasanUnjukRasa(sequelize, DataTypes);
  var LaporanKejadianKebakaran = _LaporanKejadianKebakaran(sequelize, DataTypes);
  var LaporanKejadianKekerasanPadaPerempuanDanAnak = _LaporanKejadianKekerasanPadaPerempuanDanAnak(sequelize, DataTypes);
  var LaporanKejadianKorbanMaterial = _LaporanKejadianKorbanMaterial(sequelize, DataTypes);
  var LaporanKejadianSumberInformasiKekerasanPadaWanitaAnak = _LaporanKejadianSumberInformasiKekerasanPadaWanitaAnak(sequelize, DataTypes);
  var LaporanKejadianSumberInformasiUnjukRasa = _LaporanKejadianSumberInformasiUnjukRasa(sequelize, DataTypes);
  var LaporanKejadianUnjukRasa = _LaporanKejadianUnjukRasa(sequelize, DataTypes);
  var LaporanKejadianUnjukRasaTindakLanjut = _LaporanKejadianUnjukRasaTindakLanjut(sequelize, DataTypes);
  var LaporanPengawasan = _LaporanPengawasan(sequelize, DataTypes);
  var LaporanTamuDaerah = _LaporanTamuDaerah(sequelize, DataTypes);
  var LaporanTamuDaerahDok = _LaporanTamuDaerahDok(sequelize, DataTypes);
  var MasterAgama = _MasterAgama(sequelize, DataTypes);
  var MasterDiklat = _MasterDiklat(sequelize, DataTypes);
  var MasterEselon = _MasterEselon(sequelize, DataTypes);
  var MasterGlobalDistricts = _MasterGlobalDistricts(sequelize, DataTypes);
  var MasterGlobalProvinces = _MasterGlobalProvinces(sequelize, DataTypes);
  var MasterGlobalRegencies = _MasterGlobalRegencies(sequelize, DataTypes);
  var MasterGlobalVillages = _MasterGlobalVillages(sequelize, DataTypes);
  var MasterGolongan = _MasterGolongan(sequelize, DataTypes);
  var MasterJabatan = _MasterJabatan(sequelize, DataTypes);
  var MasterJenisBantuan = _MasterJenisBantuan(sequelize, DataTypes);
  var MasterJenisKegiatan = _MasterJenisKegiatan(sequelize, DataTypes);
  var MasterJenisKejadian = _MasterJenisKejadian(sequelize, DataTypes);
  var MasterJenisKekerasan = _MasterJenisKekerasan(sequelize, DataTypes);
  var MasterJenisKorbanJiwa = _MasterJenisKorbanJiwa(sequelize, DataTypes);
  var MasterJenisKorbanMaterial = _MasterJenisKorbanMaterial(sequelize, DataTypes);
  var MasterJenisPelanggaran = _MasterJenisPelanggaran(sequelize, DataTypes);
  var MasterJenisPenertiban = _MasterJenisPenertiban(sequelize, DataTypes);
  var MasterJenisPenindakan = _MasterJenisPenindakan(sequelize, DataTypes);
  var MasterJenisPenyelesaian = _MasterJenisPenyelesaian(sequelize, DataTypes);
  var MasterJenisPerdaPerkada = _MasterJenisPerdaPerkada(sequelize, DataTypes);
  var MasterJenisPertolongan = _MasterJenisPertolongan(sequelize, DataTypes);
  var MasterJenisUsaha = _MasterJenisUsaha(sequelize, DataTypes);
  var MasterKecamatan = _MasterKecamatan(sequelize, DataTypes);
  var MasterKelurahan = _MasterKelurahan(sequelize, DataTypes);
  var MasterKota = _MasterKota(sequelize, DataTypes);
  var MasterPangkat = _MasterPangkat(sequelize, DataTypes);
  var MasterPendidikan = _MasterPendidikan(sequelize, DataTypes);
  var MasterSkpd = _MasterSkpd(sequelize, DataTypes);
  var MasterStatusKenaikanPangkat = _MasterStatusKenaikanPangkat(sequelize, DataTypes);
  var MasterSumberInformasi = _MasterSumberInformasi(sequelize, DataTypes);
  var MasterTempatPelaksanaan = _MasterTempatPelaksanaan(sequelize, DataTypes);
  var MasterTempatSeksiPelaksanaan = _MasterTempatSeksiPelaksanaan(sequelize, DataTypes);
  var Pengguna = _Pengguna(sequelize, DataTypes);
  var SaranaPrasarana = _SaranaPrasarana(sequelize, DataTypes);
  var StatusSaranaPrasarana = _StatusSaranaPrasarana(sequelize, DataTypes);
  var StrukturDataHirarki = _StrukturDataHirarki(sequelize, DataTypes);


  return {
    AuthToken,
    DashboardKejadian,
    DashboardKepegawaian,
    DashboardPenegakanPerdaPerkada,
    DashboardPlottingAnggota,
    DashboardTitikRawan,
    DashboardTitikReklameCitata,
    DashboardTitikReklameSatpolpp,
    DashboardTramtibum,
    DashboardWasdakPpkm,
    HakAkses,
    JenisSaranaPrasarana,
    KepegawaianNonPns,
    KepegawaianNonPnsKeluarga,
    KepegawaianNonPnsPendidikan,
    KepegawaianPns,
    KepegawaianPnsKeluarga,
    KepegawaianPnsPendidikan,
    KepegawaianPpns,
    KondisiSaranaPrasarana,
    KontakPic,
    LaporanKegiatan,
    LaporanKegiatanJenisKegiatan,
    LaporanKegiatanJenisPelanggaranBangunan,
    LaporanKegiatanJenisPenyelesaian,
    LaporanKegiatanPelanggaranMinumanAlkohol,
    LaporanKegiatanPenertibanPpkm,
    LaporanKegiatanPenindakan,
    LaporanKegiatanPenindakanMinumanAlkohol,
    LaporanKegiatanPenyelesaianMinumanAlkohol,
    LaporanKegiatanPenyelesaianPenertibanBangunan,
    LaporanKegiatanPenyelesaianPpkm,
    LaporanKegiatanProses,
    LaporanKejadian,
    LaporanKejadianBanjir,
    LaporanKejadianDokumentasi,
    LaporanKejadianJenisBantuan,
    LaporanKejadianJenisKejadian,
    LaporanKejadianJenisKekerasanPadaWanitaAnak,
    LaporanKejadianJenisKekerasanUnjukRasa,
    LaporanKejadianKebakaran,
    LaporanKejadianKekerasanPadaPerempuanDanAnak,
    LaporanKejadianKorbanMaterial,
    LaporanKejadianSumberInformasiKekerasanPadaWanitaAnak,
    LaporanKejadianSumberInformasiUnjukRasa,
    LaporanKejadianUnjukRasa,
    LaporanKejadianUnjukRasaTindakLanjut,
    LaporanPengawasan,
    LaporanTamuDaerah,
    LaporanTamuDaerahDok,
    MasterAgama,
    MasterDiklat,
    MasterEselon,
    MasterGlobalDistricts,
    MasterGlobalProvinces,
    MasterGlobalRegencies,
    MasterGlobalVillages,
    MasterGolongan,
    MasterJabatan,
    MasterJenisBantuan,
    MasterJenisKegiatan,
    MasterJenisKejadian,
    MasterJenisKekerasan,
    MasterJenisKorbanJiwa,
    MasterJenisKorbanMaterial,
    MasterJenisPelanggaran,
    MasterJenisPenertiban,
    MasterJenisPenindakan,
    MasterJenisPenyelesaian,
    MasterJenisPerdaPerkada,
    MasterJenisPertolongan,
    MasterJenisUsaha,
    MasterKecamatan,
    MasterKelurahan,
    MasterKota,
    MasterPangkat,
    MasterPendidikan,
    MasterSkpd,
    MasterStatusKenaikanPangkat,
    MasterSumberInformasi,
    MasterTempatPelaksanaan,
    MasterTempatSeksiPelaksanaan,
    Pengguna,
    SaranaPrasarana,
    StatusSaranaPrasarana,
    StrukturDataHirarki,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
