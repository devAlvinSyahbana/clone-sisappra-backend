const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LaporanTamuDaerah', {
    tanggal_kunjungan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    waktu_mulai_kunjungan: {
     type: DataTypes.STRING(16),
      allowNull: true
    },
    waktu_selesai_kunjungan: {
     type: DataTypes.STRING(16),
      allowNull: true
    },
    asal_instansi: {
       type: DataTypes.STRING(16),
      allowNull: true
    },
    jml_pengunjung: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maksud_dan_tujuan: {
       type: DataTypes.STRING(16),
      allowNull: true
    },
    pejabat_penerima_kunjungan: {
       type: DataTypes.STRING(16),
      allowNull: true
    },
    tempat_kunjungan: {
       type: DataTypes.STRING(16),
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
    },
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pelaksanaan: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'laporan_tamu_daerah',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "laporan_tamu_daerah_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
