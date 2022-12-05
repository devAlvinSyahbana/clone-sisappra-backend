'use strict'

const {
  v1: uuidv1,
  v4: uuidv4
} = require('uuid');

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.post('/commit/:id', async (req, reply) => {
    reply.send(req.params.id)
  })

  fastify.post('/upload', async function (req, reply) {
    // some code to handle file
    const files = req.raw.files
    console.log(files)
    let fileArr = []
    for(let key in files){
      if(Array.isArray(files[key])){
        files[key].forEach((v)=>{
          fileArr.push({
            name: v.name,
            mimetype: v.mimetype,
            tempPath: v.tempFilePath
          })
        })
      }
      else {
        fileArr.push({
          name: files[key].name,
          mimetype: files[key].mimetype,
          tempPath: v.tempFilePath
        })
      }
    }
    reply.send({id: uuidv4(), files: fileArr})
  })
}
