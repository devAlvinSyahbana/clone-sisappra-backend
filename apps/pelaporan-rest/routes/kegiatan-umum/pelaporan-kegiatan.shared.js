"use strict";

const GetJenisKegiatanById = async (server, id) => {
  const res = await server.rest.masterdata().get(`jenis-kegiatan/?$filter=id eq ${id}`).json();
  if (res.data != null && res.data.length > 0) return res.data[0];
  else return null;
};

const GetJenisPasalById = async (server, id) => {
  const res = await server.rest.masterdata().get(`jenis-perda-perkada/?$filter=id eq ${id}`).json();
  if (res.data != null && res.data.length > 0) return res.data[0];
  else return null;
};

const AddModeErrorReference = (errors, prop) => {
  errors.push({
    "instancePath": `/${prop}`,
    "schemaPath": `#/properties/${prop}/reference`,
    "keyword": "reference",
    "params": {},
    "message": `invalid reference of '${prop}'`
  });
};

const ValidateFormPelaporanKegiatan = async (server, form, allowedJK = [], notAllowedJK= []) => {
  const errors = [];
  if (form.kegiatan__jenis_kegiatan_id <= 0)
    AddModeErrorReference(errors, "kegiatan__jenis_kegiatan_id");

  if (errors.length > 0) return errors;

  const jenisKegiatan = await GetJenisKegiatanById(server, form.kegiatan__jenis_kegiatan_id);

  if(allowedJK.length > 0) {
    if (jenisKegiatan == null || !allowedJK.includes(jenisKegiatan.nama))
      AddModeErrorReference(errors, "kegiatan__jenis_kegiatan_id");
  }

  if (errors.length > 0) return errors;

  if(notAllowedJK.length > 0) {
    if (jenisKegiatan == null || notAllowedJK.includes(jenisKegiatan.nama))
      AddModeErrorReference(errors, "kegiatan__jenis_kegiatan_id");
  }

  if (errors.length > 0) return errors;

  if(form.tindak_lanjut__administrasi__jenis_pasal_id !== undefined) {
    if (form.tindak_lanjut__administrasi__jenis_pasal_id <= 0)
      AddModeErrorReference(errors, "tindak_lanjut__administrasi__jenis_pasal_id");

    if (errors.length > 0) return errors;

    const jenisPasal = await GetJenisPasalById(server, form.tindak_lanjut__administrasi__jenis_pasal_id)
    if(jenisPasal == null)
      AddModeErrorReference(errors, "tindak_lanjut__administrasi__jenis_pasal_id");

    if (errors.length > 0) return errors;
  }

  if(form.tindak_lanjut__administrasi__penyelesaian_id !== undefined) {
    if (form.tindak_lanjut__administrasi__penyelesaian_id <= 0)
      AddModeErrorReference(errors, "tindak_lanjut__administrasi__penyelesaian_id");

    if (errors.length > 0) return errors;

    const jenisPasal = await GetJenisPasalById(server, form.tindak_lanjut__administrasi__penyelesaian_id)
    if(jenisPasal == null)
      AddModeErrorReference(errors, "tindak_lanjut__administrasi__penyelesaian_id");

    if (errors.length > 0) return errors;
  }

  return errors;
};

module.exports = {
  ValidateFormPelaporanKegiatan
}