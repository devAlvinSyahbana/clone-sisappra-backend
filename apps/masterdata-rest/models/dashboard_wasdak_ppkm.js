const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DashboardWasdakPpkm', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tanggal_wasdak: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    jenis_wasdak: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dashboard_wasdak_ppkm',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "dashboard_wasdak_ppkm_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
