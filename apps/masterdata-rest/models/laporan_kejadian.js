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
    bidang_wilayah: {
      type: DataTypes.STRING,
      allowNull: true
    },
    jumlah_kejadian: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    banjir: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hewan_buas_dan_berbisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kebakaran: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kecelakaan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pendampingan_kekerasan_pada_perempua_dan_anak: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kerusakan_konstruksi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kriminalitas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pembunuhan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    penemuan_mayat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    penyelamatan_orang: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pohon_tumbang: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tawuran: {
      type: DataTypes.STRING,
      allowNull: true
    },
    terorisme: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unjuk_rasa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    keterangan: {
      type: DataTypes.STRING,
      allowNull: true
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
