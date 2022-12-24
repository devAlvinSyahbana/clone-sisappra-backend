"use strict";

const { reply200, reply400, defaultPageQueryString } = require("../std.schema");
const shared = {
  definitions: {
    jenisBantuanDto: {
      type: "object",
      properties: {
        id: {
          type: "number",
        },
        nama: {
          type: "string",
        },
        kode: {
          type: "string",
        },
        is_deleted: {
          type: "number",
        },
        deleted_at: {
          type: "string",
        },
        deleted_by: {
          type: "string",
        },
        created_by: {
          type: "string",
        },
        updated_by: {
          type: "string",
        },
        created_at: {
          type: "string",
        },
        updated_at: {
          type: "string",
        },
      },
      required: [],
    },
  },
};

const getSchema = {
  description: "Get Jenis Bantuan",
  tags: ["jenis-bantuan"],
  querystring: defaultPageQueryString,
  response: {
    200: reply200(shared.definitions.jenisBantuanDto),
  },
};

const getComboSchema = {
  description: "Get Jenis Bantuan in combobox mode",
  tags: ["jenis-bantuan"],
  querystring: {
    $filter: { type: "string" },
    $top: { type: "number" },
    $skip: { type: "number" },
    $select: { type: "string" },
    $orderby: { type: "string" },
  },
  response: {
    200: reply200({
      type: "object",
      properties: {
        value: { type: "number" },
        text: { type: "string" },
      },
    }),
  },
};

const postSchema = {
  description: "Add Jenis Bantuan",
  tags: ["jenis-bantuan"],
  body: {},
  response: {
    200: reply200(shared.definitions.jenisBantuanDto),
    400: reply400(),
  },
};

const deleteSchema = {
  description: "Delete Jenis Bantuan",
  tags: ["jenis-bantuan"],
  params: {
    id: { type: "number" },
  },
  response: {
    200: reply200(),
    400: reply400(),
  },
};

const putSchema = {
  description: "Update Jenis Bantuan",
  tags: ["jenis-bantuan"],
  params: {
    id: { type: "number" },
  },
  body: {},
  response: {
    200: reply200(shared.definitions.jenisBantuanDto),
    400: reply400(),
  },
};

module.exports = {
  getSchema,
  getComboSchema,
  postSchema,
  deleteSchema,
  putSchema,
};
