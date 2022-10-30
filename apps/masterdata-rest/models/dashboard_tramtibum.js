const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DashboardTramtibum', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kasus_tramtibum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    jenis_pelanggaran_perda_tramtibum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kegiatan_tramtibum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dashboard_tramtibum',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "dashboard_tramtibum_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
