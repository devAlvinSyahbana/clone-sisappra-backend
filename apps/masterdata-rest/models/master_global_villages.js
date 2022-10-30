const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MasterGlobalVillages', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    district_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'master_global_villages',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "master_global_villages_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
