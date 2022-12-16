const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MasterStatusReklame', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted_by: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    updated_by: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nama: {
      type: DataTypes.STRING(64),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'master_status_reklame',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "master_status_reklame_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
