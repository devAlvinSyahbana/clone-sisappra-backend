const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LaporanTamuDaerah', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    is_deleted: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    deleted_by: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_by: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
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
      type: DataTypes.STRING(64),
      allowNull: true
    },
    jml_pengunjung: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maksud_dan_tujuan: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    pejabat_penerima_kunjungan: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tempat_kunjungan: {
      type: DataTypes.STRING(64),
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
