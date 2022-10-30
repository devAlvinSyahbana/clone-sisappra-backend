const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DashboardPenegakanPerdaPerkada', {
    id_perda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kasus_perda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    jenis_pelanggaran_perda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tanggal_kasus: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dashboard_penegakan_perda_perkada',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "dashboard_penegakan_perda_perkada_pkey",
        unique: true,
        fields: [
          { name: "id_perda" },
        ]
      },
    ]
  });
};
