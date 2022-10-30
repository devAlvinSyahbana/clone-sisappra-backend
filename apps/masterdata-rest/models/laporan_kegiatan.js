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
    pelaksana_bidang_wilayah: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tindak_lanjut: {
      type: DataTypes.STRING,
      allowNull: true
    },
    administrasi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    peringatan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    deleted_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    penutupan_atau_penyegelan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pencabutan_izin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    yang_lainnya: {
      type: DataTypes.STRING,
      allowNull: true
    },
    denda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    penghalauan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pembubaran: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pengusiran: {
      type: DataTypes.STRING,
      allowNull: true
    },
    teguran_tertulis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    penyegelan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    penghentian_kegiatan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pembongkaran: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ditertibkan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bongkar_sendiri: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pemusnahan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pecabutan_izin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pembekuan_sementara_izin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    razia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    penjemputan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    penangkapan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    penyitaan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pembersihan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pencopotan_pelepasan_pencabutan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    penyidikan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kerja_sosial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    denda_administratif: {
      type: DataTypes.STRING,
      allowNull: true
    },
    terbit_izin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dikembalikan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    belum_diterbitkan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lain_lain: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tidak_ditemukan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pengadilan_yustisi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    non_pengadilan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    penghentian_kegiatan_sementara_1x24jam: {
      type: DataTypes.STRING,
      allowNull: true
    },
    penghentian_kegiatan_sementara_3x24jam: {
      type: DataTypes.STRING,
      allowNull: true
    },
    penghentian_kegiatan_sementara_7x24jam: {
      type: DataTypes.STRING,
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
