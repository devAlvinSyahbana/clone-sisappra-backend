const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MasterGlobalDistricts', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    regency_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'master_global_districts',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "master_global_districts_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
