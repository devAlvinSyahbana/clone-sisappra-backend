"use strict";

const { reply200, reply400, defaultPageQueryString } = require("../std.schema");
const shared = {
  definitions: {
    bidangWilayahDto: {
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
        kategori: {
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
      required: [
        "id"
      ],
    },
    bidangWilayahForm: {
      "type": "object",
      "properties": {
        "nama": {
          "type": "string"
        },
        "kode": {
          type: "string",
        },
        "kategori": {
          type: "string",
        },
      },
      "required": [
        "nama",
      ]
    }
  },
};

const getSchema = {
  description: "Get Bidang Wilayah",
  tags: ["bidang-wilayah"],
  querystring: defaultPageQueryString,
  response: {
    200: reply200(shared.definitions.bidangWilayahDto),
  },
};

const getComboSchema = {
  description: "Get Bidang Wilayah in combobox mode",
  tags: ["bidang-wilayah"],
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
  description: "Add Bidang Wilayah",
  tags: ["bidang-wilayah"],
  body: shared.definitions.bidangWilayahForm,
  response: {
    200: reply200(shared.definitions.bidangWilayahDto),
    400: reply400(),
  },
};

const deleteSchema = {
  description: "Delete Bidang Wilayah",
  tags: ["bidang-wilayah"],
  params: {
    id: { type: "number" },
  },
  response: {
    200: reply200(),
    400: reply400(),
  },
};

const putSchema = {
  description: "Update Bidang Wilayah",
  tags: ["bidang-wilayah"],
  params: {
    id: { type: "number" },
  },
  body: shared.definitions.bidangWilayahForm,
  response: {
    200: reply200(shared.definitions.bidangWilayahDto),
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
