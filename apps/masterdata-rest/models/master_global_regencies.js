const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MasterGlobalRegencies', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    province_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'master_global_regencies',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "master_global_regencies_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
