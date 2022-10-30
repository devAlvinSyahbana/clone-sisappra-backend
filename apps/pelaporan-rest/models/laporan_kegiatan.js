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
      type: DataTypes.INTEGER,
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
    id_bidang_wilayah: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kegiatan_id_jenis_kegiatan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kegiatan_jmlh_personil: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    kegiatan_id_asal_laporan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kegiatan_id_jenis_pengamanan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kegiatan_masalah: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    kegiatan_pemecahan_masalah: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    kegiatan_instansi_terkait: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    kegiatan_uraian_kegiatan: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    tindak_lanjut_administrasi_id_jenis_pasal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut_id_penyelesaian: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut_id_proses_khusus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut_identitas_nama_usaha_no_bap: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut_identitas_nama_usaha_nama_penanggung_jawab: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut_identitas_nama_usaha_nama_usaha_tempat: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut_identitas_nama_usaha_nik_paspor: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut_identitas_nama_usaha_alamat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tindak_lanjut_id_jenis_usaha_tempat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut_id_penindakan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut_jumlah_penindakan: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    tindak_lanjut_jumlah_pelanggar: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    tindak_lanjut_jumlah_denda_pengadilan: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tindak_lanjut_jumlah_denda_non_pengadilan: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tindak_lanjut_jumlah_denda_tanggal_setor: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tindak_lanjut_jumlah_denda_nama_bank: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut_jumlah_denda_no_validasi_bank: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut_tanggal_sidang: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tindak_lanjut_jumlah_pelanggar_hadir_sidang: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    tindak_lanjut_jumlah_pelanggar_tidak_hadir: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    tindak_lanjut_jumlah_pelanggar_verstek: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    tindak_lanjut_rekomendasi_citata_id_jenis_pelanggaran_bangunan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak_lanjut_rekomendasi_citata_no_sp: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut_rekomendasi_citata_tgl_sp: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tindak_lanjut_rekomendasi_citata_no_segel: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut_rekomendasi_citata_tgl_segel: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tindak_lanjut_rekomendasi_citata_no_spb: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut_rekomendasi_citata_tgl_spb: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tindak_lanjut_rekomendasi_citata_no_rekomtek: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tindak_lanjut_rekomendasi_citata_tgl_rekomtek: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tindak_lanjut_rekomendasi_citata_peninjau_lapangan: {
      type: DataTypes.DATEONLY,
      allowNull: true
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
