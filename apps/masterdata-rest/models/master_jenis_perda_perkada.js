const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MasterJenisPerdaPerkada', {
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
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    judul: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    pasal: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    jenis_penertiban: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    jenis_pelanggaran: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    deskripsi: {
      type: DataTypes.STRING(128),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'master_jenis_perda_perkada',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "master_jenis_perda_perkada_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
