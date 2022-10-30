const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LaporanKejadianKebakaran', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_tanggal_kejadian: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_waktu_kejadian: {
      type: DataTypes.TIME,
      allowNull: true
    },
    id_kota: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_kecamatan: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    id_kelurahan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_alamat_lengkap: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_jenis_kejadian: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_uraian_kejadian: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jumlah_personil_satpol_pp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jumlah_personil_instansi: {
      type: DataTypes.INTEGER,
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
    }
  }, {
    sequelize,
    tableName: 'laporan_kejadian_kebakaran',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "laporan_kejadian_kebakaran_pkey",
        unique: true,
        fields: [
          { name: "id_kecamatan" },
        ]
      },
    ]
  });
};
