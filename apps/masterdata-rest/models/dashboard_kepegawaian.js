const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DashboardKepegawaian', {
    id_pegawai: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status_kepegawaian: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pendidikan_terakhir: {
      type: DataTypes.STRING,
      allowNull: true
    },
    golongan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    eselon: {
      type: DataTypes.STRING,
      allowNull: true
    },
    usia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status_ppns: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'dashboard_kepegawaian',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "dashboard_kepegawaian_baru_pk",
        unique: true,
        fields: [
          { name: "id_pegawai" },
        ]
      },
    ]
  });
};
