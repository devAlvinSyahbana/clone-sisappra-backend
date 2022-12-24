"use strict";

const { reply200, reply400, defaultPageQueryString } = require("../std.schema");
const shared = {
  definitions: {
    kecamatanDto: {
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
        kode_kota: {
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
  description: "Get Kecamatan",
  tags: ["kecamatan"],
  querystring: defaultPageQueryString,
  response: {
    200: reply200(shared.definitions.kecamatanDto),
  },
};

const getComboSchema = {
  description: "Get Kecamatan in combobox mode",
  tags: ["kecamatan"],
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
  description: "Add Kecamatan",
  tags: ["kecamatan"],
  body: {},
  response: {
    200: reply200(shared.definitions.kecamatanDto),
    400: reply400(),
  },
};

const deleteSchema = {
  description: "Delete Kecamatan",
  tags: ["kecamatan"],
  params: {
    id: { type: "number" },
  },
  response: {
    200: reply200(),
    400: reply400(),
  },
};

const putSchema = {
  description: "Update Kecamatan",
  tags: ["kecamatan"],
  params: {
    id: { type: "number" },
  },
  body: {},
  response: {
    200: reply200(shared.definitions.kecamatanDto),
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
