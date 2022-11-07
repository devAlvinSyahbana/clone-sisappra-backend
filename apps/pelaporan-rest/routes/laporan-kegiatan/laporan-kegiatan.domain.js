 const FindLaporanKegiatanEntity = async (db, id, filter) => (await db.LaporanKegiatan.findOne({
  where: {
    ...filter,
    id: id
  }
}));

const FindAllPenindakanMinol = async (db, laporanID, filter) => (await db.LaporanKegiatanPenindakanMinumanAlkohol.findAll({
  where: {
    ...filter,
    id_laporan: laporanID
  }
}));

const FindAllDokumentasi = async (db, laporanID, filter) => (await db.LaporanKegiatanDokumentasi.findAll({
  where: {
    ...filter,
    id_laporan: laporanID
  }
}));

class LaporanKegiatan {
  constructor(fastify) {
    this.server = fastify;

    this._entityLaporanKegiatan = {};
    this._entityLaporanKegiatanDokumentasi = [];
    this._entityLaporanKegiatanPenindakanMinumanAlkohol = [];

    this._validationResult = true;
    this._validationResultErrors = [];
    this._namaJenisKegiatan = "";

    this._props = {
      "kegiatan_id_jenis_kegiatan": false,
      "kegiatan_jmlh_personil": false,
      "kegiatan_id_asal_laporan": false,
      "kegiatan_id_jenis_pengamanan": false,
      "kegiatan_masalah": false,
      "kegiatan_pemecahan_masalah": false,
      "kegiatan_instansi_terkait": false,
      "kegiatan_uraian_kegiatan": false,
      "tindak_lanjut_administrasi_id_jenis_pasal": false,
      "tindak_lanjut_id_penyelesaian": false,
      "tindak_lanjut_id_proses_khusus": false,
      "tindak_lanjut_identitas_nama_usaha_no_bap": false,
      "tindak_lanjut_identitas_nama_usaha_nama_penanggung_jawab": false,
      "tindak_lanjut_identitas_nama_usaha_nama_usaha_tempat": false,
      "tindak_lanjut_identitas_nama_usaha_nik_paspor": false,
      "tindak_lanjut_identitas_nama_usaha_alamat": false,
      "tindak_lanjut_id_jenis_usaha_tempat": false,
      "tindak_lanjut_id_penindakan": false,
      "tindak_lanjut_jumlah_penindakan": false,
      "tindak_lanjut_jumlah_pelanggar": false,
      "tindak_lanjut_jumlah_denda_pengadilan": false,
      "tindak_lanjut_jumlah_denda_non_pengadilan": false,
      "tindak_lanjut_jumlah_denda_tanggal_setor": false,
      "tindak_lanjut_jumlah_denda_nama_bank": false,
      "tindak_lanjut_jumlah_denda_no_validasi_bank": false,
      "tindak_lanjut_tanggal_sidang": false,
      "tindak_lanjut_jumlah_pelanggar_hadir_sidang": false,
      "tindak_lanjut_jumlah_pelanggar_tidak_hadir": false,
      "tindak_lanjut_jumlah_pelanggar_verstek": false,
      "tindak_lanjut_rekomendasi_citata_id_jenis_pelanggaran_bangunan": false,
      "tindak_lanjut_rekomendasi_citata_no_sp": false,
      "tindak_lanjut_rekomendasi_citata_tgl_sp": false,
      "tindak_lanjut_rekomendasi_citata_no_segel": false,
      "tindak_lanjut_rekomendasi_citata_tgl_segel": false,
      "tindak_lanjut_rekomendasi_citata_no_spb": false,
      "tindak_lanjut_rekomendasi_citata_tgl_spb": false,
      "tindak_lanjut_rekomendasi_citata_no_rekomtek": false,
      "tindak_lanjut_rekomendasi_citata_tgl_rekomtek": false,
      "tindak_lanjut_rekomendasi_citata_peninjau_lapangan": false,
      "tindak_lanjut_jenis_merk_minol": false,
      "dokumentasi": false
    };

    this._propsKeys = Object.keys(this._mandatory);
  }

  SetRequiredProps = (mandatoryKeys = []) => {
    this._propsKeys.forEach((v, i) => {
      if (mandatoryKeys[0] === "*")
        this._props[v] = true;
      else {
        this._props[v] = mandatoryKeys.includes(v);
      }
    });
  };

  addModelError = (fieldName, message, code) => this._validationResultErrors.push({
    code: code,
    instancePath: "",
    schemaPath: fieldName,
    keyword: "",
    params: [{
      limit: 0
    }],
    message: message
  });

  HasError = () => this._validationResultErrors.length > 0;

  Validate = () => ({
    success: this._validationResultErrors.length === 0,
    errors: this._validationResultErrors
  });

  IsNew = () => this._entityLaporanKegiatan == null || this._entityLaporanKegiatan.id === 0;

  Submit = async () => true;

  LoadEntity = async (id, form, cfg) => {
    this._entityLaporanKegiatan = await FindLaporanKegiatanEntity(this.server.db, id, this.server.dbfilters.notDeleted);
    this._entityLaporanKegiatanDokumentasi = await FindAllDokumentasi(this.server.db, id, this.server.dbfilters.notDeleted);
    this._entityLaporanKegiatanPenindakanMinumanAlkohol = await FindAllPenindakanMinol(this.server.db, id, this.server.dbfilters.notDeleted);
  };

  LoadForm = async (form, cfg) => {
    if (form == null) return this;

    await this.SetJenisKegiatan(form.kegiatan_id_jenis_kegiatan, "kegiatan_id_jenis_kegiatan");

    if (this.HasError()) return this;

    this.SetJumlahPersonil(form.kegiatan_jmlh_personil);

    this.SetLaporanAsal(form.kegiatan_id_asal_laporan);

    this.SetJenisPengamanan(form.kegiatan_id_jenis_pengamanan);
    this.SetKegiatanMasalah(form.kegiatan_masalah);
    this.SetPemecahanMasalah(form.kegiatan_pemecahan_masalah);
    this.SetInstansiTerkait(form.kegiatan_instansi_terkait);
    this.SetUraianKegiatan(form.kegiatan_uraian_kegiatan);
    this.SetTindakLanjutJenisPasal(form.tindak_lanjut_administrasi_id_jenis_pasal);
    this.SetTindakLanjutPenyelesaian(form.tindak_lanjut_id_penyelesaian);
    this.SetTindakLanjutProsesKhusus(form.tindak_lanjut_id_proses_khusus);

    // identitas usaha
    this.SetTindakLanjutUsahaNoBAP(form.tindak_lanjut_identitas_nama_usaha_no_bap);
    this.SetTindakLanjutUsahaNamaPenanggungJawab(form.tindak_lanjut_identitas_nama_usaha_nama_penanggung_jawab);
    this.SetTindakLanjutUsahaNamaTempat(form.tindak_lanjut_identitas_nama_usaha_nama_usaha_tempat);
    this.SetTindakLanjutUsahaNikPaspor(form.tindak_lanjut_identitas_nama_usaha_nik_paspor);
    this.SetTindakLanjutUsahaAlamat(form.tindak_lanjut_identitas_nama_usaha_alamat);
    this.SetTindakLanjutJenisTempatUsaha(form.tindak_lanjut_id_jenis_usaha_tempat);
    this.SetTindakLanjutUsahaAlamatPelanggar(form.tindak_lanjut_identitas_nama_usaha_alamat_pelanggar);
    this.SetTindakLanjutUsahaNamaPemilik(form.tindak_lanjut_identitas_nama_usaha_nama_pemilik);
    this.SetTindakLanjutUsahaLuasBongkaran(form.tindak_lanjut_identitas_nama_usaha_luas_bongkaran);

    // penindakan
    this.SetTindakLanjutPenindakan(form.tindak_lanjut_penindakan_id);
    this.SetTindakLanjutJumlahPenindakan(form.tindak_lanjut_jumlah_penindakan);
    this.SetTindakLanjutJumlahPelanggar(form.tindak_lanjut_jumlah_pelanggar);
    this.SetTindakLanjutJumlahDendaPengadilan(form.tindak_lanjut_jumlah_denda_pengadilan);
    this.SetTindakLanjutJumlahDendaNonPengadilan(form.tindak_lanjut_jumlah_denda_non_pengadilan);
    this.SetTindakLanjutDendaTanggalSetor(form.tindak_lanjut_jumlah_denda_tanggal_setor);
    this.SetTindakLanjutDendaNamaBank(form.tindak_lanjut_jumlah_denda_nama_bank);
    this.SetTindakLanjutDendaNoValidasiBank(form.tindak_lanjut_jumlah_denda_no_validasi_bank);

    this.SetTindakLanjutTanggalSidang(form.tindak_lanjut_tanggal_sidang);
    this.SetTindakLanjutJumlahPelanggarHadirSidang(form.tindak_lanjut_jumlah_pelanggar_hadir_sidang);
    this.SetTindakLanjutJumlahPelanggarTidakHadirSidang(form.tindak_lanjut_jumlah_pelanggar_tidak_hadir);
    this.SetTindakLanjutJumlahPelanggarVerstek(form.tindak_lanjut_jumlah_pelanggar_verstek);

    this.SetTindakLanjutRekomCitataJenisPelanggaranBangunan(form.tindak_lanjut_rekomendasi_citata_id_jenis_pelanggaran_bangunan);
    this.SetTindakLanjutRekomCitataNoSP(form.tindak_lanjut_rekomendasi_citata_no_sp);
    this.SetTindakLanjutRekomCitataTanggalSP(form.tindak_lanjut_rekomendasi_citata_tgl_sp);
    this.SetTindakLanjutRekomCitataNoSegel(form.tindak_lanjut_rekomendasi_citata_no_spb);
    this.SetTindakLanjutRekomCitataTanggalSPB(form.tindak_lanjut_rekomendasi_citata_tgl_spb);
    this.SetTindakLanjutRekomCitataNoRekomtek(form.tindak_lanjut_rekomendasi_citata_no_rekomtek);
    this.SetTindakLanjutRekomCitataTanggalRekomtek(form.tindak_lanjut_rekomendasi_citata_tgl_rekomtek);
    this.SetTindakLanjutRekomCitataTanggalPeninjauLapangan(form.tindak_lanjut_rekomendasi_citata_tgl_peninjau_lapangan);

    this.SetTindakLanjutJenisMerkMinol(form.tindak_lanjut_jenis_merk_minol);

    this.SetDokumentasi(form.dokumentasi);

    return this;
  };

  GetJenisKegiatan = () => this._entityLaporanKegiatan.kegiatan_id_jenis_kegiatan;

  SetJenisKegiatan = async (id, fieldName = "") => {
    if (id <= 0) {
      this.addModelError(fieldName, "Required Jenis Kegiatan ID");
      return this;
    }

    const response = await this.server.rest.masterdata().get(`jenis-kegiatan/?$filter=id eq ${id}`).json();

    if (response.data.length > 0) {
      this._entityLaporanKegiatan.kegiatan_id_jenis_kegiatan = id;
      this._namaJenisKegiatan = response.data[0].nama;

      // release all mandatory props
      this.SetRequiredProps([]);

      // setup mandatory props
      switch (this._namaJenisKegiatan) {
        case "SIDANG TIPIRING":
          this.SetRequiredProps([
            "kegiatan_jmlh_personil",
            "kegiatan_uraian_kegiatan",
            "tindak_lanjut_administrasi_id_jenis_pasal",
            "tindak_lanjut_id_penyelesaian",
            "tindak_lanjut_id_proses_khusus",
            "tindak_lanjut_identitas_nama_usaha_no_bap",
            "tindak_lanjut_identitas_nama_usaha_nama_penanggung_jawab",
            "tindak_lanjut_identitas_nama_usaha_nama_usaha_tempat",
            "tindak_lanjut_identitas_nama_usaha_alamat",
            "tindak_lanjut_identitas_nama_usaha_nik_paspor",
            "tindak_lanjut_identitas_nama_usaha_alamat_pelanggar",
            "tindak_lanjut_id_jenis_usaha_tempat",
            "tindak_lanjut_id_penindakan",
            "tindak_lanjut_tanggal_sidang",
            "tindak_lanjut_jumlah_pelanggar",
            "tindak_lanjut_jumlah_pelanggar_hadir_sidang",
            "tindak_lanjut_jumlah_pelanggar_tidak_hadir",
            "tindak_lanjut_jumlah_pelanggar_verstek",
            "tindak_lanjut_jumlah_denda_pengadilan",
            "tindak_lanjut_jumlah_denda_non_pengadilan",
            "tindak_lanjut_jumlah_denda_tanggal_setor",
            "tindak_lanjut_jumlah_denda_nama_bank",
            "tindak_lanjut_jumlah_denda_no_validasi_bank",
            "dokumentasi"
          ]);
          break;
        case "PENERTIBAN BANGUNAN":
          this.SetRequiredProps([
            "kegiatan_jmlh_personil",
            "kegiatan_uraian_kegiatan",
            "tindak_lanjut_administrasi_id_jenis_pasal",
            "tindak_lanjut_id_penyelesaian",
            "tindak_lanjut_identitas_nama_usaha_no_bap",
            "tindak_lanjut_identitas_nama_usaha_nama_pemilik",
            "tindak_lanjut_identitas_nama_usaha_nama_usaha_tempat",
            "tindak_lanjut_identitas_nama_usaha_alamat",
            "tindak_lanjut_identitas_nama_usaha_nik_paspor",
            "tindak_lanjut_identitas_nama_usaha_alamat_pelanggar",
            "tindak_lanjut_identitas_nama_usaha_luas_bongkaran",
            "tindak_lanjut_rekomendasi_citata_id_jenis_pelanggaran_bangunan",
            "tindak_lanjut_rekomendasi_citata_no_sp",
            "tindak_lanjut_rekomendasi_citata_tgl_sp",
            "tindak_lanjut_rekomendasi_citata_no_segel",
            "tindak_lanjut_rekomendasi_citata_tgl_segel",
            "tindak_lanjut_rekomendasi_citata_no_spb",
            "tindak_lanjut_rekomendasi_citata_tgl_spb",
            "tindak_lanjut_rekomendasi_citata_no_rekomtek",
            "tindak_lanjut_rekomendasi_citata_tgl_rekomtek",
            "tindak_lanjut_rekomendasi_citata_tgl_peninjau_lapangan",
            "dokumentasi"
          ]);
          break;
        case "PENERTIBAN MINOL":
          this.SetRequiredProps([
            "kegiatan_jmlh_personil",
            "kegiatan_uraian_kegiatan",
            "tindak_lanjut_administrasi_id_jenis_pasal",
            "tindak_lanjut_id_penyelesaian",
            "tindak_lanjut_identitas_nama_usaha_no_bap",
            "tindak_lanjut_identitas_nama_usaha_nama_penanggung_jawab",
            "tindak_lanjut_identitas_nama_usaha_nama_usaha_tempat",
            "tindak_lanjut_identitas_nama_usaha_alamat",
            "tindak_lanjut_identitas_nama_usaha_nik_paspor",
            "tindak_lanjut_identitas_nama_usaha_alamat_pelanggar",
            "tindak_lanjut_id_jenis_usaha_tempat",
            "tindak_lanjut_id_penindakan",
            "tindak_lanjut_jumlah_pelanggar",
            "tindak_lanjut_jumlah_denda_non_pengadilan",
            "tindak_lanjut_jumlah_denda_tanggal_setor",
            "tindak_lanjut_jumlah_denda_nama_bank",
            "tindak_lanjut_jumlah_denda_no_validasi_bank",
            "dokumentasi"
          ]);
          break;
        case "PENERTIBAN PPKM":
          this.SetRequiredProps([]);
          break;
        case "LAPORAN MASYARAKAT":
          this.SetRequiredProps([]);
          break;
        case "PENGAMANAN":
          this.SetRequiredProps([]);
          break;
        default:
          this.SetRequiredProps([
            "kegiatan_jmlh_personil",
            "kegiatan_uraian_kegiatan",
            "tindak_lanjut_administrasi_id_jenis_pasal",
            "tindak_lanjut_id_penyelesaian",
            "tindak_lanjut_identitas_nama_usaha_no_bap",
            "tindak_lanjut_identitas_nama_usaha_nama_penanggung_jawab",
            "tindak_lanjut_identitas_nama_usaha_nama_usaha_tempat",
            "tindak_lanjut_identitas_nama_usaha_alamat",
            "tindak_lanjut_identitas_nama_usaha_nik_paspor",
            "tindak_lanjut_identitas_nama_usaha_alamat_pelanggar",
            "tindak_lanjut_id_jenis_usaha_tempat",
            "tindak_lanjut_id_penindakan",
            "tindak_lanjut_jumlah_pelanggar",
            "tindak_lanjut_jumlah_denda_non_pengadilan",
            "tindak_lanjut_jumlah_denda_tanggal_setor",
            "tindak_lanjut_jumlah_denda_nama_bank",
            "tindak_lanjut_jumlah_denda_no_validasi_bank",
            "dokumentasi"
          ]);
          break;
      }

    } else
      this.addModelError(fieldName, "Invalid Jenis Kegiatan ID");

    return this;
  };

  GetJumlahPersonil = () => this._entityLaporanKegiatan.kegiatan_jmlh_personil;

  SetJumlahPersonil = (value) => {
    this._entityLaporanKegiatan.kegiatan_jmlh_personil = value;

    return this;
  };

  GetLaporanAsal = () => this._entityLaporanKegiatan.kegiatan_id_asal_laporan;

  SetLaporanAsal = (id) => {
    //TODO: validate Jenis Kegiatan ID
    this._entityLaporanKegiatan.kegiatan_id_asal_laporan = id;

    return this;
  };

  GetJenisPengamanan = () => this._entityLaporanKegiatan.kegiatan_id_jenis_pengamanan;

  SetJenisPengamanan = (id) => {
    //TODO: validate Jenis Pengamanan ID
    this._entityLaporanKegiatan.kegiatan_id_jenis_pengamanan = id;

    return this;
  };

  GetKegiatanMasalah = () => this._entityLaporanKegiatan.kegiatan_masalah;

  SetKegiatanMasalah = (value) => {
    this._entityLaporanKegiatan.kegiatan_masalah = value;

    return this;
  };

  GetPemecahanMasalah = () => this._entityLaporanKegiatan.kegiatan_pemecahan_masalah;

  SetPemecahanMasalah = (value) => {
    this._entityLaporanKegiatan.kegiatan_pemecahan_masalah = value;

    return this;
  };

  GetInstansiTerkait = () => this._entityLaporanKegiatan.kegiatan_instansi_terkait;

  SetInstansiTerkait = (value) => {
    this._entityLaporanKegiatan.kegiatan_instansi_terkait = value;

    return this;
  };

  GetUraianKegiatan = () => this._entityLaporanKegiatan.kegiatan_uraian_kegiatan;

  SetUraianKegiatan = (value) => {
    this._entityLaporanKegiatan.kegiatan_uraian_kegiatan = value;

    return this;
  };

  GetTindakLanjutJenisPasal = () => this._entityLaporanKegiatan.tindak_lanjut_administrasi_id_jenis_pasal;

  SetTindakLanjutJenisPasal = (id) => {
    //TODO: validate TindakLanjutJenisPasal ID
    this._entityLaporanKegiatan.tindak_lanjut_administrasi_id_jenis_pasal = id;

    return this;
  };

  GetTindakLanjutPenyelesaian = () => this._entityLaporanKegiatan.tindak_lanjut_id_penyelesaian;

  SetTindakLanjutPenyelesaian = (id) => {
    //TODO: validate TindakLanjutPenyelesaian ID
    this._entityLaporanKegiatan.tindak_lanjut_id_penyelesaian = id;

    return this;
  };

  GetTindakLanjutProsesKhusus = () => this._entityLaporanKegiatan.tindak_lanjut_id_proses_khusus;

  SetTindakLanjutProsesKhusus = (id) => {
    //TODO: validate TindakLanjutProsesKhusus ID
    this._entityLaporanKegiatan.tindak_lanjut_id_proses_khusus = id;

    return this;
  };

  GetTindakLanjutUsahaNoBAP = () => this._entityLaporanKegiatan.tindak_lanjut_identitas_nama_usaha_no_bap;

  SetTindakLanjutUsahaNoBAP = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_identitas_nama_usaha_no_bap = value;

    return this;
  };

  GetTindakLanjutUsahaNamaPenanggungJawab = () => this._entityLaporanKegiatan.tindak_lanjut_identitas_nama_usaha_nama_penanggung_jawab;

  SetTindakLanjutUsahaNamaPenanggungJawab = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_identitas_nama_usaha_nama_penanggung_jawab = value;

    return this;
  };

  GetTindakLanjutUsahaNamaTempat = () => this._entityLaporanKegiatan.tindak_lanjut_identitas_nama_usaha_nama_usaha_tempat;

  SetTindakLanjutUsahaNamaTempat = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_identitas_nama_usaha_nama_usaha_tempat = value;

    return this;
  };

  GetTindakLanjutUsahaNikPaspor = () => this._entityLaporanKegiatan.tindak_lanjut_identitas_nama_usaha_nik_paspor;

  SetTindakLanjutUsahaNikPaspor = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_identitas_nama_usaha_nik_paspor = value;

    return this;
  };

  GetTindakLanjutUsahaAlamat = () => this._entityLaporanKegiatan.tindak_lanjut_identitas_nama_usaha_alamat;

  SetTindakLanjutUsahaAlamat = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_identitas_nama_usaha_alamat = value;

    return this;
  };

  GetTindakLanjutJenisTempatUsaha = () => this._entityLaporanKegiatan.tindak_lanjut_id_jenis_usaha_tempat;

  SetTindakLanjutJenisTempatUsaha = (id) => {
    //TODO: validate TindakLanjutJenisTempatUsaha ID
    this._entityLaporanKegiatan.tindak_lanjut_id_jenis_usaha_tempat = id;

    return this;
  };

  GetTindakLanjutUsahaAlamatPelanggar = () => this._entityLaporanKegiatan.tindak_lanjut_identitas_nama_usaha_alamat_pelanggar;

  SetTindakLanjutUsahaAlamatPelanggar = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_identitas_nama_usaha_alamat_pelanggar = value;

    return this;
  };

  GetTindakLanjutUsahaNamaPemilik = () => this._entityLaporanKegiatan.tindak_lanjut_identitas_nama_usaha_nama_pemilik;

  SetTindakLanjutUsahaNamaPemilik = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_identitas_nama_usaha_nama_pemilik = value;

    return this;
  };

  GetTindakLanjutUsahaLuasBongkaran = () => this._entityLaporanKegiatan.tindak_lanjut_identitas_nama_usaha_luas_bongkaran;

  SetTindakLanjutUsahaLuasBongkaran = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_identitas_nama_usaha_luas_bongkaran = value;

    return this;
  };

  GetTindakLanjutPenindakan = () => this._entityLaporanKegiatan.tindak_lanjut_id_penindakan;

  SetTindakLanjutPenindakan = (id) => {
    //TODO: validate TindakLanjutPenindakan ID
    this._entityLaporanKegiatan.tindak_lanjut_id_penindakan = id;

    return this;
  };

  GetTindakLanjutJumlahPenindakan = () => this._entityLaporanKegiatan.tindak_lanjut_jumlah_penindakan;

  SetTindakLanjutJumlahPenindakan = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_jumlah_penindakan = value;

    return this;
  };

  GetTindakLanjutJumlahPelanggar = () => this._entityLaporanKegiatan.tindak_lanjut_jumlah_pelanggar;

  SetTindakLanjutJumlahPelanggar = (value) => {
    //TODO: validate TindakLanjutPenindakan ID
    this._entityLaporanKegiatan.tindak_lanjut_jumlah_pelanggar = value;

    return this;
  };

  GetTindakLanjutJumlahDendaPengadilan = () => this._entityLaporanKegiatan.tindak_lanjut_jumlah_denda_pengadilan;

  SetTindakLanjutJumlahDendaPengadilan = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_jumlah_denda_pengadilan = value;

    return this;
  };

  GetTindakLanjutJumlahDendaNonPengadilan = () => this._entityLaporanKegiatan.tindak_lanjut_jumlah_denda_non_pengadilan;

  SetTindakLanjutJumlahDendaNonPengadilan = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_jumlah_denda_non_pengadilan = value;

    return this;
  };

  GetTindakLanjutDendaTanggalSetor = () => this._entityLaporanKegiatan.tindak_lanjut_jumlah_denda_tanggal_setor;

  SetTindakLanjutDendaTanggalSetor = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_jumlah_denda_tanggal_setor = value;

    return this;
  };

  GetTindakLanjutDendaNamaBank = () => this._entityLaporanKegiatan.tindak_lanjut_jumlah_denda_nama_bank;

  SetTindakLanjutDendaNamaBank = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_jumlah_denda_nama_bank = value;

    return this;
  };

  GetTindakLanjutDendaNoValidasiBank = () => this._entityLaporanKegiatan.tindak_lanjut_jumlah_denda_no_validasi_bank;

  SetTindakLanjutDendaNoValidasiBank = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_jumlah_denda_no_validasi_bank = value;

    return this;
  };

  GetTindakLanjutTanggalSidang = () => this._entityLaporanKegiatan.tindak_lanjut_tanggal_sidang;

  SetTindakLanjutTanggalSidang = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_tanggal_sidang = value;

    return this;
  };

  GetTindakLanjutJumlahPelanggarHadirSidang = () => this._entityLaporanKegiatan.tindak_lanjut_jumlah_pelanggar_hadir_sidang;

  SetTindakLanjutJumlahPelanggarHadirSidang = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_jumlah_pelanggar_hadir_sidang = value;

    return this;
  };

  GetTindakLanjutJumlahPelanggarTidakHadirSidang = () => this._entityLaporanKegiatan.tindak_lanjut_jumlah_pelanggar_tidak_hadir;

  SetTindakLanjutJumlahPelanggarTidakHadirSidang = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_jumlah_pelanggar_tidak_hadir = value;

    return this;
  };

  GetTindakLanjutJumlahPelanggarVerstek = () => this._entityLaporanKegiatan.tindak_lanjut_jumlah_pelanggar_verstek;

  SetTindakLanjutJumlahPelanggarVerstek = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_jumlah_pelanggar_verstek = value;

    return this;
  };

  GetTindakLanjutRekomCitataJenisPelanggaranBangunan = () => this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_id_jenis_pelanggaran_bangunan;

  SetTindakLanjutRekomCitataJenisPelanggaranBangunan = (id) => {
    this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_id_jenis_pelanggaran_bangunan = id;

    return this;
  };

  GetTindakLanjutRekomCitataNoSP = () => this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_no_sp;

  SetTindakLanjutRekomCitataNoSP = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_no_sp = value;

    return this;
  };

  GetTindakLanjutRekomCitataTanggalSP = () => this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_tgl_sp;

  SetTindakLanjutRekomCitataTanggalSP = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_tgl_sp = value;

    return this;
  };

  GetTindakLanjutRekomCitataNoSegel = () => this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_no_segel;

  SetTindakLanjutRekomCitataNoSegel = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_no_segel = value;

    return this;
  };

  GetTindakLanjutRekomCitataTanggalSegel = () => this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_tgl_segel;

  SetTindakLanjutRekomCitataTanggalSegel = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_tgl_segel = value;

    return this;
  };

  GetTindakLanjutRekomCitataNoSPB = () => this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_no_spb;

  SetTindakLanjutRekomCitataNoSPB = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_no_spb = value;

    return this;
  };

  GetTindakLanjutRekomCitataTanggalSPB = () => this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_tgl_spb;

  SetTindakLanjutRekomCitataTanggalSPB = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_tgl_spb = value;

    return this;
  };

  GetTindakLanjutRekomCitataNoRekomtek = () => this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_no_rekomtek;

  SetTindakLanjutRekomCitataNoRekomtek = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_no_rekomtek = value;

    return this;
  };

  GetTindakLanjutRekomCitataTanggalRekomtek = () => this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_tgl_rekomtek;

  SetTindakLanjutRekomCitataTanggalRekomtek = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_tgl_rekomtek = value;

    return this;
  };

  GetTindakLanjutRekomCitataPeninjauLapangan = () => this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_tgl_peninjau_lapangan;

  SetTindakLanjutRekomCitataTanggalPeninjauLapangan = (value) => {
    this._entityLaporanKegiatan.tindak_lanjut_rekomendasi_citata_tgl_peninjau_lapangan = value;

    return this;
  };

  GetTindakLanjutJenisMerkMinol = () => this._entityLaporanKegiatanPenindakanMinumanAlkohol;

  SetTindakLanjutJenisMerkMinol = (values) => {
    if (!values.isArray() || values.length === 0) return this;

    values.forEach((v) => {
      let r = this._entityLaporanKegiatanPenindakanMinumanAlkohol.find((m) => m.merek === v.merk);
      if (r != null) {
        r.jumlah_minuman = v.jumlah_minuman;
        r.recStatus = "pending";
        this.server.entity.track(r).markModified("unknown");

      } else {
        r = this.server.entity.track({
          merek: v.merk,
          jumlah_minuman: v.jumlah_minuman,
          recStatus: "pending"
        }).markCreated("unknown");
        this._entityLaporanKegiatanPenindakanMinumanAlkohol.push();
      }
    });

    return this;
  };

  GetDokumentasi = () => this._entityLaporanKegiatanDokumentasi;

  SetDokumentasi = (values) => {
    if (!values.isArray() || values.length === 0) return this;

    values.forEach((v) => {
      let r = this._entityLaporanKegiatanDokumentasi.find((m) => m.file === v.file);
      if (r != null) {
        r.keterangan = v.keterangan;
        r.recStatus = "pending";
        this.server.entity.track(r).markModified("unknown");
      } else {
        r = this.server.entity.track({
          keterangan: v.keterangan,
          file: v.file,
          recStatus: "pending"
        }).markCreated("unknown");
        this._entityLaporanKegiatanDokumentasi.push(r);
      }
    });

    return this;
  };


}

module.exports = { LaporanKegiatan };