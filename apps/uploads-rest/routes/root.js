'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.post('/upload', async function (req, reply) {
    // some code to handle file
    const files = req.raw.files
    console.log(files)
    let fileArr = []
    for(let key in files){
      fileArr.push({
        name: files[key].name,
        mimetype: files[key].mimetype
      })
    }
    reply.send(fileArr)
  })
}
