const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LaporanKejadianBanjir', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tanggal_kejadian: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    waktu_kejadian: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_kota: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_kecamatan: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    id_kelurahan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alamat_lengkap: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    uraian_kejadian: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jumlah_personil_satpol_pp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jumlah_personil_instansi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ketinggian_air: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jumlah_pengungsi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jumlah_pengungsi_per_kk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lokasi_penampungan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lokasi_dapur_umum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    jenis_kejadian: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'laporan_kejadian_banjir',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "laporan_kejadian_banjir_pkey",
        unique: true,
        fields: [
          { name: "id_kecamatan" },
        ]
      },
    ]
  });
};
