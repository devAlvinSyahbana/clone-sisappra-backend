const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LaporanKegiatanJenisPelanggaranBangunan', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false
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
      allowNull: true,
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
    }
  }, {
    sequelize,
    tableName: 'laporan_kegiatan_jenis_pelanggaran_bangunan',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "laporan_kegiatan_jenis_pelanggaran_bangunan_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
