const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KepegawaianNonPns', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tempat_lahir: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tgl_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    jenis_kelamin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agama: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nik: {
      type: DataTypes.STRING,
      allowNull: true
    },
    no_kk: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status_perkawinan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    no_hp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sesuai_ktp_alamat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sesuai_ktp_rtrw: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sesuai_ktp_provinsi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sesuai_ktp_kabkota: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sesuai_ktp_kecamatan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sesuai_ktp_kelurahan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    domisili_alamat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    domisili_rtrw: {
      type: DataTypes.STRING,
      allowNull: true
    },
    domisili_provinsi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    domisili_kabkota: {
      type: DataTypes.STRING,
      allowNull: true
    },
    domisili_kecamatan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    domisili_kelurahan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_nptt_npjlp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_nip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_golongan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kepegawaian_tmtpangkat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    kepegawaian_pendidikan_pada_sk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kepegawaian_jabatan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kepegawaian_eselon: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kepegawaian_tempat_tugas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_subbag_seksi_kecamatan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_status_pegawai: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_no_rekening: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_no_karpeg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_no_kasirkasur: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_no_taspen: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_npwp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_no_bpjs_askes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_tmt_cpns: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    kepegawaian_sk_cpns: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_tmt_pns: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    kepegawaian_tgl_sk_pns: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    kepegawaian_sk_pns: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_no_sk_pangkat_terakhir: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_tgl_sk_pangkat_terakhir: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    kepegawaian_sk_pangkat_terakhir: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_diklat_pol_pp_dasar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_diklat_pol_pp_dasar_no_sertifikat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_diklat_pol_pp_dasar_tgl_sertifikat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    kepegawaian_diklat_pol_pp_dasar_file_sertifikat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_diklat_pol_pp_strutural: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_diklat_pol_pp_strutural_no_sertifikat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_diklat_pol_pp_strutural_tgl_sertifikat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    kepegawaian_diklat_pol_pp_strutural_file_sertifikat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_diklat_pol_pp_ppns: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_diklat_pol_pp_ppns_no_sertifikat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_diklat_pol_pp_ppns_tgl_sertifikat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    kepegawaian_diklat_pol_pp_ppns_file_sertifikat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_diklat_fungsional_pol_pp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_diklat_fungsional_pol_pp_no_sertifikat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kepegawaian_diklat_fungsional_pol_pp_tgl_sertifikat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    kepegawaian_diklat_fungsional_pol_pp_file_sertifikat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    foto: {
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
    kepegawaian_pangkat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kepegawaian_kelurahan: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kepegawaian_non_pns',
    schema: 'public',
    timestamps: false,
    freezeTableName: true,
    createdAt: true,
    indexes: [
      {
        name: "kepegawaian_non_pns_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
