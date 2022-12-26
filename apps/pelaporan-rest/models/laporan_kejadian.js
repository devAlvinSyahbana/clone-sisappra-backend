const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LaporanKejadian', {
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
    kejadian__tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    kejadian__waktu_start: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    kejadian__waktu_end: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    kejadian__kota_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kejadian__kecamatan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kejadian__kelurahan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kejadian__alamat: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    kejadian__jenis_kejadian_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kejadian__uraian_kejadian: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kejadian__jml_personil_satpolpp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kejadian__jml_personil_instansilain: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kejadian__ketinggian_air: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kejadian__pengungsi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kejadian__pengungsi_kk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kejadian__lokasi_penampungan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kejadian__lokasi_dapur_umum: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kejadian__jumlah_massa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kejadian__sumber_informasi_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kejadian__jenis_kekerasan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kejadian__tuntutan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kejadian__penanggung_jawab_unras: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tindak__penanggung_jawab: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tindak__jml_massa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tindak__tuntutan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tindak__sumber_info: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tindak__jenis_kekerasan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tindak__jenis_bantuan_satpolpp: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    tindak__jenis_bantuan_instansiterkait: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    tindak__korban_jiwa: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    tindak__korban_material: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    tindak__dokumentasi: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    }
  }, {
    sequelize,
    tableName: 'laporan_kejadian',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "laporan_kejadian_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
