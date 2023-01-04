"use strict";

const { reply200, reply400, defaultPageQueryString } = require("../std.schema");

const shared = {
  type: "object",
  definitions: {
    summaryLaporanReklameDto: {
      title: "Laporan Reklame",
      type: "object",
      properties: {
        id: {
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
        share_location: {
          type: "string",
        },
        alamat: {
          type: "string",
        },
        lokasi_tiang: {
          type: "string",
        },
        kawasan_kendali: {
          type: "number",
        },
        ukuran: {
          type: "string",
        },
        longtitude: {
          type: "string",
        },
        pemilik_reklame: {
          type: "string",
        },
        konstruksi_reklame: {
          type: "string",
        },
        jenis_reklame: {
          type: "number",
        },
        status_reklame: {
          type: "number",
        },
        konten_iklan: {
          type: "string",
        },
        kota: {
          type: "number",
        },
        waktu_pengawasan: {
          type: "string",
        },
        kecamatan: {
          type: "number",
        },
        kelurahan: {
          type: "number",
        },
        tgl_pengecekan: {
          type: "string",
        },
        tindak_dokumentasi: {
          type: "array",
          items: {
            type: "object",
            properties: {
              file_uploadResult: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    bucket: {
                      type: "string",
                    },
                    key: {
                      type: "string",
                    },
                  },
                  required: ["bucket", "key"],
                },
              },
            },
            required: ["file_uploadResult"],
          },
        },
      },
      required: [
        "id",
        "share_location",
        "alamat",
        "lokasi_tiang",
        "kawasan_kendali",
        "ukuran",
        "pemilik_reklame",
        "konstruksi_reklame",
        "konten_iklan",
        "tgl_pengecekan",
        "kota",
        "jenis_reklame",
        "status_reklame",
        "kecamatan",
        "kelurahan",
        "waktu_pengawasan",
        "tindak_dokumentasi",
      ],
    },
    pelaporanReklameForm: {
      title: "Pelaporan Form Reklame",
      type: "object",
      properties: {
        share_location: {
          type: "string",
        },
        longtitude: {
          type: "string",
        },
        alamat: {
          type: "string",
        },
        lokasi_tiang: {
          type: "string",
        },
        kawasan_kendali: {
          type: "number",
        },
        ukuran: {
          type: "string",
        },
        pemilik_reklame: {
          type: "string",
        },
        konstruksi_reklame: {
          type: "string",
        },
        jenis_reklame: {
          type: "number",
        },
        status_reklame: {
          type: "number",
        },
        waktu_pengawasan: {
          type: "string",
        },
        konten_iklan: {
          type: "string",
        },
        tgl_pengecekan: {
          type: "string",
        },
        kota: {
          type: "number",
        },
        kecamatan: {
          type: "number",
        },
        kelurahan: {
          type: "number",
        },
        tindak_dokumentasi: {
          type: "array",
          items: {
            type: "object",
            properties: {
              file_uploadResult: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    bucket: {
                      type: "string",
                    },
                    key: {
                      type: "string",
                    },
                  },
                  required: ["bucket", "key"],
                },
              },
            },
            required: ["file_uploadResult"],
          },
        },
      },
      required: [
        "share_location",
        "alamat",
        "lokasi_tiang",
        "kawasan_kendali",
        "ukuran",
        "pemilik_reklame",
        "konstruksi_reklame",
        "konten_iklan",
        "kota",
        "kecamatan",
        "kelurahan",
        "tindak_dokumentasi",
        "status_reklame",
        "jenis_reklame",
        "tgl_pengecekan",
        "waktu_pengawasan",
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
