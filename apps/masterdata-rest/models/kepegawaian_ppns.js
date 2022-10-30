const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KepegawaianPpns', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    skpd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pejabat_ppns_nama: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pejabat_ppns_nip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pejabat_ppns_nrk: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pejabat_ppns_pangkat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pejabat_ppns_golongan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no_sk_ppns: {
      type: DataTypes.STRING,
      allowNull: true
    },
    no_ktp_ppns: {
      type: DataTypes.STRING,
      allowNull: true
    },
    masa_berlaku_ktp_ppns: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    wilayah_kerja: {
      type: DataTypes.STRING,
      allowNull: true
    },
    uu_yg_dikawal: {
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
    }
  }, {
    sequelize,
    tableName: 'kepegawaian_ppns',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "kepegawaian_ppns_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
