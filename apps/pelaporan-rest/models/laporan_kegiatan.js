const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LaporanKegiatan', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    is_deleted: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    deleted_by: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_by: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    kegiatan__jenis_kegiatan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kegiatan__jumlah_personil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kegiatan__uraian_kegiatan: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    kegiatan__tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    kegiatan__jam_start: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    kegiatan__jam_end: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    kegiatan__lokasi: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    kegiatan__asal_laporan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kegiatan__jenis_pengamanan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kegiatan__masalah: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    kegiatan__pemecahan_masalah: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    kegiatan__instansi_terkait: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut__administrasi__jenis_pasal_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut__administrasi__jenis_penertiban: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tindak_lanjut__administrasi__jenis_pelanggaran: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tindak_lanjut__administrasi__perda_perkada: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut__administrasi__penyelesaian_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut__administrasi__penyelesaian_khusus_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut__sidang__tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "9999-09-09"
    },
    tindak_lanjut__sidang__jumlah_pelanggar_hadir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut__sidang__jumlah_pelanggar_tidak_hadir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut__sidang__jumlah_pelanggar_verstek: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut__identitas_pelanggar__no_bap: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut__identitas_pelanggar__nama_penanggung_jawab: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut__identitas_pelanggar__nama_tempat_usaha: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut__identitas_pelanggar__alamat_tempat_usaha: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tindak_lanjut__identitas_pelanggar__nik: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    tindak_lanjut__identitas_pelanggar__alamat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tindak_lanjut__identitas_pelanggar__jenis_usaha_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut__identitas_pelanggar__nama_pemilik: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut__identitas_pelanggar__luas_bongkaran: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut__jenis_penindakan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut__jumlah_pelanggar: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut__denda__pengadilan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut__denda__non_pengadilan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut__denda__tanggal_setor: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "9999-09-09"
    },
    tindak_lanjut__denda__nama_bank: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut__denda__no_validasi_bank: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    tindak_lanjut__rekom_citata__jenis_pelanggaran_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut__rekom_citata__no_sp: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    tindak_lanjut__rekom_citata__tanggal_no_sp: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "9999-09-09"
    },
    tindak_lanjut__rekom_citata__no_segel: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    tindak_lanjut__rekom_citata__tanggal_segel: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "9999-09-09"
    },
    tindak_lanjut__rekom_citata__no_spb: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    tindak_lanjut__rekom_citata__tanggal_spb: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "9999-09-09"
    },
    tindak_lanjut__rekom_citata__no_rekomtek: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    tindak_lanjut__rekom_citata__tanggal_rekomtek: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "9999-09-09"
    },
    tindak_lanjut__rekom_citata__tanggal_peninjauan_lapangan: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "9999-09-09"
    },
    tindak_lanjut__jumlah_minol_merk: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    dokumentasi: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    }
  }, {
    sequelize,
    tableName: 'laporan_kegiatan',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "laporan_kegiatan_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
