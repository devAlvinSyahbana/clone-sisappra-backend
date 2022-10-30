const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DashboardKejadian', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama: {
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
    jenis_kejadian: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tanggal_awal_kejadian: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tanggal_akhir_kejadian: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    jumlah_korban_jiwa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jumlah_korban_materiil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dashboard_kejadian',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "dashboard_kejadian_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
