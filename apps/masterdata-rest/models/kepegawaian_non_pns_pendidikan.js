const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KepegawaianNonPnsPendidikan', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    jenis_pendidikan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nama_sekolah: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nomor_ijazah: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tgl_ijazah: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    jurusan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fakultas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    file_ijazah: {
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
    id_pegawai: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'kepegawaian_non_pns_pendidikan',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "kepegawaian_non_pns_pendidikan_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
