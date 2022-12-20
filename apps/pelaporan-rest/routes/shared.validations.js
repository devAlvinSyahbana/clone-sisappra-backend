'use strict'

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

const GetJenisPenyelesaian = async (server, id, jenisKegId = 0, jenisPenertiban = '*') => {
  // const res = await server.rest.masterdata().get(`jenis-penyelesaian/?$filter=id eq ${id} and jenis_kegiatan_id eq ${jenisKegId} and jenis_penertiban eq '${jenisPenertiban}'`).json();
  const res = await server.rest.masterdata().get(`jenis-penyelesaian/?$filter=id eq ${id}`).json();
  if (res.data != null && res.data.length > 0) return res.data[0];
  else return null;
};

const GetJenisUsaha = async (server, id) => {
  const res = await server.rest.masterdata().get(`jenis-usaha/?$filter=id eq ${id}`).json();
  if (res.data != null && res.data.length > 0) return res.data[0];
  else return null;
};

const GetJenisPenindakan = async (server, id) => {
  const res = await server.rest.masterdata().get(`jenis-penindakan/?$filter=id eq ${id}`).json();
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

const validateJenisKegiatan = async ({ server, form, errors, allowedJK, notAllowedJK }) => {
  if (form.kegiatan__jenis_kegiatan_id <= 0)
    AddModeErrorReference(errors, "kegiatan__jenis_kegiatan_id");

  if (errors.length > 0) return errors;

  const jenisKegiatan = await GetJenisKegiatanById(server, form.kegiatan__jenis_kegiatan_id);

  if (jenisKegiatan == null)
    AddModeErrorReference(errors, "kegiatan__jenis_kegiatan_id");

  if (allowedJK.length > 0) {
    if (!allowedJK.includes(jenisKegiatan.nama))
      AddModeErrorReference(errors, "kegiatan__jenis_kegiatan_id");
  }

  if (notAllowedJK.length > 0) {
    if (jenisKegiatan == null || notAllowedJK.includes(jenisKegiatan.nama))
      AddModeErrorReference(errors, "kegiatan__jenis_kegiatan_id");
  }

  return errors;
}
const validateJenisPasal = async ({ server, form, errors }) => {
  if (form.tindak_lanjut__administrasi__jenis_pasal_id !== undefined && !(form.kegiatan__jenis_kegiatan_id === 13 || form.kegiatan__jenis_kegiatan_id === 15)) {
    if (form.tindak_lanjut__administrasi__jenis_pasal_id <= 0)
      AddModeErrorReference(errors, "tindak_lanjut__administrasi__jenis_pasal_id");

    if (errors.length > 0) return errors;

    const jenisPasal = await GetJenisPasalById(server, form.tindak_lanjut__administrasi__jenis_pasal_id)
    if (jenisPasal == null)
      AddModeErrorReference(errors, "tindak_lanjut__administrasi__jenis_pasal_id");

    if (errors.length > 0) return errors;
  }
}

const validateJenisPenyelesaian = async ({ server, form, errors }) => {
  if (form.tindak_lanjut__administrasi__penyelesaian_id !== undefined && !(form.kegiatan__jenis_kegiatan_id === 13 || form.kegiatan__jenis_kegiatan_id === 15)) {
    if (form.tindak_lanjut__administrasi__penyelesaian_id <= 0)
      AddModeErrorReference(errors, "tindak_lanjut__administrasi__penyelesaian_id");

    if (errors.length > 0) return errors;

    const jenisPenyelesaian = await GetJenisPenyelesaian(server, form.tindak_lanjut__administrasi__penyelesaian_id)
    if (jenisPenyelesaian == null)
      AddModeErrorReference(errors, "tindak_lanjut__administrasi__penyelesaian_id");

    if (errors.length > 0) return errors;
  }
}

const validateJenisUsaha = async ({ server, form, errors }) => {
  if (form.tindak_lanjut__identitas_pelanggar__jenis_usaha_id !== undefined && !(form.kegiatan__jenis_kegiatan_id === 13 || form.kegiatan__jenis_kegiatan_id === 15)) {
    if (form.tindak_lanjut__identitas_pelanggar__jenis_usaha_id <= 0)
      AddModeErrorReference(errors, "tindak_lanjut__identitas_pelanggar__jenis_usaha_id");

    if (errors.length > 0) return errors;

    const jenisUsaha = await GetJenisUsaha(server, form.tindak_lanjut__identitas_pelanggar__jenis_usaha_id)
    if (jenisUsaha == null)
      AddModeErrorReference(errors, "tindak_lanjut__identitas_pelanggar__jenis_usaha_id");

    if (errors.length > 0) return errors;
  }
}

const validateJenisPenindakan = async ({ server, form, errors }) => {
  if (form.tindak_lanjut__jenis_penindakan_id !== undefined && !(form.kegiatan__jenis_kegiatan_id === 13 || form.kegiatan__jenis_kegiatan_id === 15)) {
    if (form.tindak_lanjut__jenis_penindakan_id <= 0)
      AddModeErrorReference(errors, "tindak_lanjut__jenis_penindakan_id");

    if (errors.length > 0) return errors;

    const jenisPenindakan = await GetJenisPenindakan(server, form.tindak_lanjut__jenis_penindakan_id)
    if (jenisPenindakan == null)
      AddModeErrorReference(errors, "tindak_lanjut__jenis_penindakan_id");

    if (errors.length > 0) return errors;
  }
}

module.exports = { GetJenisUsaha, GetJenisPenindakan, AddModeErrorReference, validateJenisKegiatan, validateJenisPasal, validateJenisPenyelesaian, validateJenisUsaha, validateJenisPenindakan }
