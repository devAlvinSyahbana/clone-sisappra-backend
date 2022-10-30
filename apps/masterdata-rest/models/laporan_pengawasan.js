const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LaporanPengawasan', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tgl_pengecekan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    share_location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lokasi_tiang: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kawasan_kendali: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ukuran: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pemilik_reklame: {
      type: DataTypes.STRING,
      allowNull: true
    },
    konstruksi_reklame: {
      type: DataTypes.STRING,
      allowNull: true
    },
    konten_iklan: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'laporan_pengawasan',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "lapora_pengawasan_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
