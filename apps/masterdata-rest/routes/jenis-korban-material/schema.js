"use strict";

const { reply200, reply400, defaultPageQueryString } = require("../std.schema");
const shared = {
  definitions: {
    jenisKorbanMaterialDto: {
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
  description: "Get Jenis Korban Material",
  tags: ["jenis-korban-material"],
  querystring: defaultPageQueryString,
  response: {
    200: reply200(shared.definitions.jenisKorbanMaterialDto),
  },
};

const getComboSchema = {
  description: "Get Jenis Korban Material in combobox mode",
  tags: ["jenis-korban-material"],
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
  description: "Add Jenis Korban Material",
  tags: ["jenis-korban-material"],
  body: {},
  response: {
    200: reply200(shared.definitions.jenisKorbanMaterialDto),
    400: reply400(),
  },
};

const deleteSchema = {
  description: "Delete Jenis Korban Material",
  tags: ["jenis-korban-material"],
  params: {
    id: { type: "number" },
  },
  response: {
    200: reply200(),
    400: reply400(),
  },
};

const putSchema = {
  description: "Update Jenis Korban Material",
  tags: ["jenis-korban-material"],
  params: {
    id: { type: "number" },
  },
  body: {},
  response: {
    200: reply200(shared.definitions.jenisKorbanMaterialDto),
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
