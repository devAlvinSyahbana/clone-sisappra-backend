const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SaranaPrasarana', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    jenis_sarana_prasarana: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status_sarana_prasarana: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kondisi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    keterangan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    file_dokumentasi: {
      type: DataTypes.STRING,
      allowNull: true
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
    sapras_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sarana_prasarana',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "sarana_prasarana_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
