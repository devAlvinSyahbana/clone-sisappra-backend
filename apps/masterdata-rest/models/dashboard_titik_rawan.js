const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DashboardTitikRawan', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    kategori: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rawan_terhadap: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dashboard_titik_rawan',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "dashboard_titik_rawan_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
