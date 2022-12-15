"use strict";

const { reply200, reply400, defaultPageQueryString } = require("../std.schema");

const shared = {
  type: "object",
  definitions: {
    summaryLaporanReklameDto: {
      "title": "Laporan Reklame",
      "type": "object",
      "properties": {
        "id": {
          "type": "number"
        },
        "is_deleted": {
          "type": "number"
        },
        "deleted_at": {
          "type": "string"
        },
        "deleted_by": {
          "type": "string"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        },
        "nrk": {
          "type": "number"
        },
        "nama": {
          "type": "string"
        },
        "share_location": {
          "type": "string"
        },
        "alamat": {
          "type": "string"
        },
        "lokasi_tiang": {
          "type": "string"
        },
        "kawasan_kendali": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "ukuran": {
          "type": "string"
        },
        "pemilik_reklame": {
          "type": "string"
        },
        "konstruksi_reklame": {
          "type": "string"
        },
        "konten_iklan": {
          "type": "string"
        },
      },
      "required": [
        "id",
        "nrk",
        "nama",
        "share_location",
        "alamat",
        "lokasi_tiang",
        "kawasan_kendali",
        "status",
        "ukuran",
        "pemilik_reklame",
        "konstruksi_reklame",
        "konten_iklan",
      ],
    },
    pelaporanReklameForm: {
      "title": "Pelaporan Form Reklame",
      "type": "object",
      "properties": {
        "nrk": {
          "type": "number"
        },
        "nama": {
          "type": "string"
        },
        "share_location": {
          "type": "string"
        },
        "alamat": {
          "type": "string"
        },
        "lokasi_tiang": {
          "type": "string"
        },
        "kawasan_kendali": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "ukuran": {
          "type": "string"
        },
        "pemilik_reklame": {
          "type": "string"
        },
        "konstruksi_reklame": {
          "type": "string"
        },
        "konten_iklan": {
          "type": "string"
        },
      },
      "required": [
        "id",
        "nrk",
        "nama",

        "share_location",
        "alamat",
        "lokasi_tiang",
        "kawasan_kendali",
        "status",
        "ukuran",
        "pemilik_reklame",
        "konstruksi_reklame",
        "konten_iklan",
      ],
    },
  },
};

const getSchema = {
  description: "Get Laporan Reklame",
  tags: ["laporan-reklame"],
  querystring: defaultPageQueryString,
  response: {
    200: reply200(shared.definitions.summaryLaporanReklameDto),
  },
};

const postSchema = {
  description: "Add Laporan Reklame",
  tags: ["laporan-reklame"],
  body: shared.definitions.pelaporanReklameForm,
  response: {
    200: reply200(shared.definitions.summaryLaporanReklameDto),
    400: reply400(),
  },
};

const deleteSchema = {
  description: "Delete Laporan Reklame",
  tags: ["laporan-reklame"],
  params: {
    id: { type: "number" },
  },
  response: {
    200: reply200(),
    400: reply400(),
  },
};

const putSchema = {
  description: "Update Laporan Reklame",
  tags: ["laporan-reklame"],
  params: {
    id: { type: "number" },
  },
  body: shared.definitions.pelaporanReklameForm,
  response: {
    200: reply200(shared.definitions.summaryLaporanReklameDto),
    400: reply400(),
  },
};

module.exports = { getSchema, postSchema, deleteSchema, putSchema };
