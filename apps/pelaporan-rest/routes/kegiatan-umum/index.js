"use strict";

const { getSchema, postSchema, deleteSchema, putSchema } = require("./schema");
const { ValidateFormPelaporanKegiatan } = require("./pelaporan-kegiatan.shared");


module.exports = async function(server, opts) {
  const DbSet = () => server.models.LaporanKegiatan;

  server.get("/", { schema: getSchema }, async function(request, reply) {
    return await server.odata.replyPaging(request, reply, DbSet());
  });

  server.post("/", { schema: postSchema, attachValidation: true }, async function(request, reply) {
    if (request.validationError) {
      return reply.code(400).send({ success: false, ...request.validationError });
    }

    const errors = await ValidateFormPelaporanKegiatan(server, request.body, [], ["SIDANG TIPIRING", "PENERTIBAN BANGUNAN", "KEGIATAN PPKM","LAPORAN MASYARAKAT","PENERTIBAN MINUMAN BERALKOHOL","PENGAMANAN"]);
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

    const errors = await ValidateFormPelaporanKegiatan(server, request.body);
    if (errors.length > 0) {
      return reply.code(400).send({ success: false, statusCode: 400, validation: errors, message: "form invalid" });
    }

    record.set(request.body);

    server.entity.track(record).markModified("unknown");

    await record.save();

    return reply.send({ success: true, data: [record] });
  });
};
