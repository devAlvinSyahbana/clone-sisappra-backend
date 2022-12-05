'use strict'

const path = require('path')
const fileUpload = require('fastify-file-upload')
const AutoLoad = require('@fastify/autoload')
const fastifyCron = require('fastify-cron')

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {}

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  fastify.register(fileUpload, {
    useTempFiles: true,
    limits: { fileSize: 50 * 1024 * 1024 },
  });

  fastify.register(fastifyCron, {
    jobs: [
      {
        // Only these two properties are required,
        // the rest is from the node-cron API:
        // https://github.com/kelektiv/node-cron#api
        cronTime: '* * * * * *', // Every second

        // Note: the callbacks (onTick & onComplete) take the server
        // as an argument, as opposed to nothing in the node-cron API:
        onTick: async server => {
          console.log('tick')
        },
        startWhenReady: true
      }
    ]
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
