'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('jenis-kegiatan is loaded', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/example'
  })
  t.equal(res.payload, 'this is an jenis-kegiatan')
})

// inject callback style:
//
// test('jenis-kegiatan is loaded', (t) => {
//   t.plan(2)
//   const app = await build(t)
//
//   app.inject({
//     url: '/jenis-kegiatan'
//   }, (err, res) => {
//     t.error(err)
//     t.equal(res.payload, 'this is an jenis-kegiatan')
//   })
// })
