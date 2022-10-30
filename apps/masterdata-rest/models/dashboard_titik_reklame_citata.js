const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DashboardTitikReklameCitata', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    produk: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nama_perusahaan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tgl_sk_terbit: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tgl_exp: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    masa_berlaku: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lokasi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kota: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kecamatan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kelurahan: {
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
    ukuran: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ketinggian: {
      type: DataTypes.STRING,
      allowNull: true
    },
    keterangan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dashboard_titik_reklame_citata',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "dashboard_titik_reklame_citata_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
