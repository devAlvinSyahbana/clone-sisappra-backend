"use strict";

const {
  getSchema,
  postSchema,
  deleteSchema,
  putSchema,
  getComboSchema,
} = require("./schema");

module.exports = async function (server, opts) {
  const DbSet = () => server.models.MasterTempatPelaksanaan;

  server.get("/", { schema: getSchema }, async function (request, reply) {
    return await server.odata.replyPaging(request, reply, DbSet());
  });

  server.get(
    "/combobox",
    { schema: getComboSchema },
    async function (request, reply) {
      let query = server.odata.query(request.query);

      // make columns value & text
      query.attributes = [
        [server.db.col("id"), "value"],
        [server.db.col("nama"), "text"],
      ];

      const data = await DbSet().findAll(query);

      return reply.send({ success: true, data: data });
    }
  );

  server.post(
    "/",
    { schema: postSchema, attachValidation: true },
    async function (request, reply) {
      if (request.validationError) {
        return reply
          .code(400)
          .send({ success: false, ...request.validationError });
      }

      let record = { ...request.body };

      server.entity.track(record).markCreated("unknown");

      const actCreated = await DbSet().create(record);

      const data = actCreated.dataValues;

      return reply.send({ success: true, data: [data] });
    }
  );

  server.delete(
    "/:id",
    { schema: deleteSchema },
    async function (request, reply) {
      const record = await DbSet().findOne({
        where: {
          id: request.params.id,
          ...server.dbfilters.notDeleted,
        },
      });

      if (!record)
        return reply.status(400).send({
          success: false,
          message: `ID (${request.params.id}) not found`,
          statusCode: 400,
        });

      if (request.headers["x-mode"] && request.headers["x-mode"] === "TEST") {
        await DbSet().destroy({
          where: {
            id: request.params.id,
            ...server.dbfilters.notDeleted,
          },
        });
      } else {
        server.entity.track(record).markDeleted("unknown");
        await record.save();
      }

      return reply.send({ success: true });
    }
  );

  server.put(
    "/:id",
    { schema: putSchema, attachValidation: true },
    async function (request, reply) {
      const record = await DbSet().findOne({
        where: {
          id: request.params.id,
          ...server.dbfilters.notDeleted,
        },
      });

      if (record == null)
        return reply.status(400).send({
          success: false,
          message: `ID (${request.params.id}) not found`,
          statusCode: 400,
        });

      if (request.validationError) {
        return reply
          .code(400)
          .send({ success: false, ...request.validationError });
      }

      record.set(request.body);

      server.entity.track(record).markModified("unknown");

      await record.save();

      return reply.send({ success: true, data: [record] });
    }
  );
};
