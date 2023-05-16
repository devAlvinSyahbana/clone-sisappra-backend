"use strict";

const { reply200, reply400, defaultPageQueryString } = require("../std.schema");
const shared = {
  definitions: {
    pelaksanaDto: {
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
        id_tempat_pelaksanaan: {
          type: "number",
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
    pelaksanaForm: {
      "type": "object",
      "properties": {
        "nama": {
          "type": "string"
        },
        "kode": {
          type: "string",
        },
        "id_tempat_pelaksanaan": {
          type: "number",
        },
      },
      "required": [
        "nama",
      ]
    }
  },
};

const getSchema = {
  description: "Get Pelaksana",
  tags: ["pelaksana"],
  querystring: defaultPageQueryString,
  response: {
    200: reply200(shared.definitions.pelaksanaDto),
  },
};

const getComboSchema = {
  description: "Get Pelaksana in combobox mode",
  tags: ["pelaksana"],
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
  description: "Add Pelaksana",
  tags: ["pelaksana"],
  body: shared.definitions.pelaksanaForm,
  response: {
    200: reply200(shared.definitions.pelaksanaDto),
    400: reply400(),
  },
};

const deleteSchema = {
  description: "Delete Pelaksana",
  tags: ["pelaksana"],
  params: {
    id: { type: "number" },
  },
  response: {
    200: reply200(),
    400: reply400(),
  },
};

const putSchema = {
  description: "Update Pelaksana",
  tags: ["pelaksana"],
  params: {
    id: { type: "number" },
  },
  body: shared.definitions.pelaksanaForm,
  response: {
    200: reply200(shared.definitions.pelaksanaDto),
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
