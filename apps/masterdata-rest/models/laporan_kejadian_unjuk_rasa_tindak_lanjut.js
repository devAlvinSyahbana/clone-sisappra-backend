const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LaporanKejadianUnjukRasaTindakLanjut', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
      type: DataTypes.DATE,
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
    jumlah_masa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tuntutan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    penanggung_jawab_unras: {
      type: DataTypes.STRING,
      allowNull: true
    },
    jenis_bantuan_satpol_pp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    jenis_bantuan_instansii_terkait: {
      type: DataTypes.STRING,
      allowNull: true
    },
    korban_jiwa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    jumlah_korban_pria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jumlah_korban_wanita: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'laporan_kejadian_unjuk_rasa_tindak_lanjut',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "laporan_kejadian_unjuk_rasa_tindak_lanjut_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
