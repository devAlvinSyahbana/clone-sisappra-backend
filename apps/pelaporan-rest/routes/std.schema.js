'use strict'

module.exports = {
    defaultPageQueryString: {
        "$filter": {type: 'string'},
        "$top": {type: 'number'},
        "$page": {type: 'number'},
        "$select": {type: 'string'},
        "$orderby": {type: 'string'}
    },
    reply200: function (dataSchema = null) {
        let reply = {
            "type": "object",
            "properties": {
                "success": {
                    "type": "boolean"
                },
                "total_pages": {type: 'number'},
                "total_items": {type: 'number'},
                "current_page": {type: 'number'},
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "success"
            ]
        }

        if (dataSchema) {
            reply.properties.data = {
                "type": "array",
                "items": dataSchema
            }
        }

        return reply
    },
    reply400: function () {
        return {
            "type": "object",
            "properties": {
                "success": {
                    "type": "boolean"
                },
                "statusCode": {
                    "type": "number"
                },
                "message": {
                    "type": "string"
                },
                "validation": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "instancePath": {
                                "type": "string"
                            },
                            "schemaPath": {
                                "type": "string"
                            },
                            "keyword": {
                                "type": "string"
                            },
                            "params": {
                                "type": "object",
                                "properties": {
                                    "limit": {
                                        "type": "number"
                                    }
                                },
                                "required": []
                            },
                            "message": {
                                "type": "string"
                            }
                        },
                        "required": ["instancePath", "schemaPath", "keyword", "params", "message"]
                    }
                },
                "validationContext": {
                    "type": "string"
                }
            },
            "required": [
                "success",
                "statusCode"
            ]
        }
    }
}
