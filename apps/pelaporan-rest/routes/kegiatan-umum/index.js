"use strict";

const { getSchema, postSchema, deleteSchema, putSchema } = require("./schema");

module.exports = async function(server, opts) {
  const DbSet = () => server.models.LaporanKegiatan;

  const GetJenisKegiatanById = async (id) => {
    const res = await server.rest.masterdata().get(`jenis-kegiatan/?$filter=id eq ${id}`).json();
    if (res.data != null && res.data.length > 0) return res.data[0];
    else return null;
  };

  const GetJenisPasalById = async (id) => {
    const res = await server.rest.masterdata().get(`jenis-perda-perkada/?$filter=id eq ${id}`).json();
    if (res.data != null && res.data.length > 0) return res.data[0];
    else return null;
  };

  const GetJenisPenyelesaian = async (id, jenisKegId = 0, jenisPenertiban= '*') => {
    // const res = await server.rest.masterdata().get(`jenis-penyelesaian/?$filter=id eq ${id} and jenis_kegiatan_id eq ${jenisKegId} and jenis_penertiban eq '${jenisPenertiban}'`).json();
    const res = await server.rest.masterdata().get(`jenis-penyelesaian/?$filter=id eq ${id}`).json();
    if (res.data != null && res.data.length > 0) return res.data[0];
    else return null;
  };

  const GetJenisUsaha = async (id) => {
    const res = await server.rest.masterdata().get(`jenis-usaha/?$filter=id eq ${id}`).json();
    if (res.data != null && res.data.length > 0) return res.data[0];
    else return null;
  };

  const GetJenisPenindakan = async (id) => {
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

  const ValidateForm = async (form, allowedJK = [], notAllowedJK= []) => {
    const errors = [];
    if (form.kegiatan__jenis_kegiatan_id <= 0)
      AddModeErrorReference(errors, "kegiatan__jenis_kegiatan_id");

    if (errors.length > 0) return errors;

    const jenisKegiatan = await GetJenisKegiatanById(form.kegiatan__jenis_kegiatan_id);

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

      const jenisPasal = await GetJenisPasalById(form.tindak_lanjut__administrasi__jenis_pasal_id)
      if(jenisPasal == null)
        AddModeErrorReference(errors, "tindak_lanjut__administrasi__jenis_pasal_id");

      if (errors.length > 0) return errors;
    }

    if(form.tindak_lanjut__administrasi__penyelesaian_id !== undefined) {
      if (form.tindak_lanjut__administrasi__penyelesaian_id <= 0)
        AddModeErrorReference(errors, "tindak_lanjut__administrasi__penyelesaian_id");

      if (errors.length > 0) return errors;

      const jenisPenyelesaian = await GetJenisPenyelesaian(form.tindak_lanjut__administrasi__penyelesaian_id)
      if(jenisPenyelesaian == null)
        AddModeErrorReference(errors, "tindak_lanjut__administrasi__penyelesaian_id");

      if (errors.length > 0) return errors;
    }

    if(form.tindak_lanjut__identitas_pelanggar__jenis_usaha_id !== undefined) {
      if (form.tindak_lanjut__identitas_pelanggar__jenis_usaha_id <= 0)
        AddModeErrorReference(errors, "tindak_lanjut__identitas_pelanggar__jenis_usaha_id");

      if (errors.length > 0) return errors;

      const jenisUsaha = await GetJenisUsaha(form.tindak_lanjut__identitas_pelanggar__jenis_usaha_id)
      if(jenisUsaha == null)
        AddModeErrorReference(errors, "tindak_lanjut__identitas_pelanggar__jenis_usaha_id");

      if (errors.length > 0) return errors;
    }

    if(form.tindak_lanjut__jenis_penindakan_id !== undefined) {
      if (form.tindak_lanjut__jenis_penindakan_id <= 0)
        AddModeErrorReference(errors, "tindak_lanjut__jenis_penindakan_id");

      if (errors.length > 0) return errors;

      const jenisPenindakan = await GetJenisPenindakan(form.tindak_lanjut__jenis_penindakan_id)
      if(jenisPenindakan == null)
        AddModeErrorReference(errors, "tindak_lanjut__jenis_penindakan_id");

      if (errors.length > 0) return errors;
    }

    return errors;
  };

  server.get("/", { schema: getSchema }, async function(request, reply) {
    return await server.odata.replyPaging(request, reply, DbSet());
  });

  server.post("/", { schema: postSchema, attachValidation: true }, async function(request, reply) {
    if (request.validationError) {
      return reply.code(400).send({ success: false, ...request.validationError });
    }

    const errors = await ValidateForm(request.body, [], ["SIDANG TIPIRING", "PENERTIBAN BANGUNAN", "KEGIATAN PPKM","LAPORAN MASYARAKAT","PENERTIBAN MINUMAN BERALKOHOL","PENGAMANAN"]);
    if (errors.length > 0) {
      return reply.code(400).send({ success: false, statusCode: 400, validation: errors, message: "form invalid" });
    }

    let record = server.entity.track(request.body).markCreated("unknown");

    const result = await DbSet().create(record);

    return reply.send({ success: true, data: [result.dataValues] });
  });

  server.delete("/:id", { schema: deleteSchema }, async function(request, reply) {
    const record = await DbSet().findOne({
      where: {
        id: request.params.id,
        ...server.dbfilters.notDeleted
      }
    });

    if (record == null)
      return reply.status(400).send({
        success: false,
        message: `ID (${request.params.id}) not found`,
        statusCode: 400
      });

    if (request.headers["x-mode"] && request.headers["x-mode"] === "TEST") {
      await DbSet().destroy({
        where: {
          id: request.params.id,
          ...server.dbfilters.notDeleted
        }
      });
    } else {
      server.entity.track(record).markDeleted("unknown");
      await record.save();
    }

    return reply.send({ success: true });
  });

  server.put("/:id", { schema: putSchema, attachValidation: true }, async function(request, reply) {
    const record = await DbSet().findOne({
      where: {
        id: request.params.id,
        ...server.dbfilters.notDeleted
      }
    });

    if (record == null)
      return reply.status(400).send({
        success: false,
        message: `ID (${request.params.id}) not found`,
        statusCode: 400
      });

    if (request.validationError) {
      return reply.code(400).send({ success: false, ...request.validationError });
    }

    const errors = await ValidateForm(request.body);
    if (errors.length > 0) {
      return reply.code(400).send({ success: false, statusCode: 400, validation: errors, message: "form invalid" });
    }

    record.set(request.body);

    server.entity.track(record).markModified("unknown");

    await record.save();

    return reply.send({ success: true, data: [record] });
  });
};
