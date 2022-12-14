const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LaporanKejadianKekerasanPadaPerempuanDanAnak', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    deleted_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tanggal_kejadian: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    waktu_kejadian: {
      type: DataTypes.TIME,
      allowNull: true
    },
    id_kota: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_kecamatan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_kelurahan: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    alamat_lengkap: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jenis_kegiatan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    uraian_kejadian: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jumla_personil_satpol_pp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jumlah_personil_instansi_lain: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'laporan_kejadian_kekerasan_pada_perempuan_dan_anak',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "kekerasan_pada_perempuan_dan_anak_pkey",
        unique: true,
        fields: [
          { name: "id_kelurahan" },
        ]
      },
    ]
  });
};
