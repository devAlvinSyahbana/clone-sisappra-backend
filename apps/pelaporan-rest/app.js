'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')
const allModels = require('./models/init-models')

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {}

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  fastify.register(require("sisappra-db"), {
    sequelizeConfig: {
      instance: 'db',
      autoConnect: true,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      dialect: process.env.DB_DIALECT,
      caseModel: 'p',
      caseProp: 'o'
    },
    allModels
  })

  fastify.register(require("@fastify/cors"))
  fastify.register(require("@fastify/multipart"), { attachFieldsToBody: 'keyValues' })

  fastify.register(require("sisappra-client"), {
    masterdataBaseUrl: 'http://localhost:3001'
  })

  fastify.register(require("sisappra-odata"))

  // OPEN API
  fastify.register(require("@fastify/swagger"), {
    routePrefix: '/oas',
    openapi: {
      info: {
        title: 'Pelaporan API',
        description: 'PELAPORAN API',
        version: '0.0.0'
      },
      host: `${process.env.FASTIFY_ADDRESS}:${process.env.PORT}`,
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
      components: {
        securitySchemes: {
          apiKey: {
            type: 'apiKey',
            name: 'apiKey',
            in: 'header'
          }
        }
      }
    },
    hideUntagged: true,
    exposeRoute: true
  })
  
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
