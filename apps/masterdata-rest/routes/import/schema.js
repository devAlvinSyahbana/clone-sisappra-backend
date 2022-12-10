'use strict'

const { reply200, reply400 } = require("../std.schema");
const formImportEntity = {
  "title": "Form Import Entity",
  "type": "object",
  "properties": {
    "file_minioResult": {
      "type": "object",
      "properties": {
        "Bucket": {
          "type": "string"
        },
        "Key": {
          "type": "string"
        },
        "ETag": {
          "type": "string"
        },
        "Size": {
          "type": "number"
        },
        "LastModified": {
          "type": "string"
        },
        "Location": {
          "type": "string"
        },
        "VersionID": {
          "type": "string"
        },
        "Expiration": {
          "type": "string"
        },
        "ExpirationRuleID": {
          "type": "string"
        }
      },
      "required": [
        "Bucket",
        "Key",
        "ETag",
        "Size",
        "LastModified",
        "Location",
        "VersionID",
        "Expiration",
        "ExpirationRuleID"
      ]
    },
    "entity": {
      "type": "string",
      "enum": ["MapPerdaJenisPenyelesaian", "MapPerdaJenisKegiatan", "MasterPerda"]
    }
  },
  "required": [
    "entity"
  ]
}

const postSchema = {
  "description": "Add Jenis Usaha",
  tags: ["imports"],
  body: formImportEntity,
  response: {
    200: reply200({}),
    400: reply400()
  }
}

module.exports = { postSchema }
