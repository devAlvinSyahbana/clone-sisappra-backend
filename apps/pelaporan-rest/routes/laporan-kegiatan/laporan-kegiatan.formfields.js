const { Field } = require("../../components/field.component");
module.exports = [
  Field({
    name: "kegiatan_id_jenis_kegiatan",
    type: "number",
    groupName: "kegiatan",
    required: true,
    max: null,
    min: null,
    refvalue: "masterdata:/jenis-kegiatan"
  }),
  Field({
    name: "kegiatan_jmlh_personil",
    type: "number",
    groupName: "kegiatan",
    required: true,
    max: null,
    min: null,
    refvalue: null
  })
];