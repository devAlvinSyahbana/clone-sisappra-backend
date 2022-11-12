const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MasterJenisPenyelesaian', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "master_jenis_penyelesaian_uq"
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
      type: DataTypes.STRING,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    jenis_kegiatan_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "master_jenis_penyelesaian_uq"
    },
    jenis_penertiban: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: "master_jenis_penyelesaian_uq"
    }
  }, {
    sequelize,
    tableName: 'master_jenis_penyelesaian',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "master_jenis_penyelesaian_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "master_jenis_penyelesaian_uq",
        unique: true,
        fields: [
          { name: "jenis_kegiatan_id" },
          { name: "jenis_penertiban" },
          { name: "nama" },
        ]
      },
    ]
  });
};
