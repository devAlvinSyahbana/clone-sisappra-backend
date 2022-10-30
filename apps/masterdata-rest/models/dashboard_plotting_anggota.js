const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DashboardPlottingAnggota', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kota_kab: {
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
    lokasi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    long: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    total_jaga_pagi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_jaga_sore: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_jaga_malam: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rawan_terhadap: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pic_contact: {
      type: DataTypes.STRING,
      allowNull: true
    },
    jam_jaga_pagi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    jam_jaga_sore: {
      type: DataTypes.DATE,
      allowNull: true
    },
    jam_jaga_malam: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dashboard_plotting_anggota',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "dashboard_plotting_anggota_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
