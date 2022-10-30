const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DashboardTitikReklameSatpolpp', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    produk: {
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
    nrk: {
      type: DataTypes.STRING,
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
    kawasan_kendali: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    keterangan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lokasi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    long: {
      type: DataTypes.STRING,
      allowNull: true
    },
    posisi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ukuran: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dashboard_titik_reklame_satpolpp',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "dashboard_titik_reklame_satpolpp_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
