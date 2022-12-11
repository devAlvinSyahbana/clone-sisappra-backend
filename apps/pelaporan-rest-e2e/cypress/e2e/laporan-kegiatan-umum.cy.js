'use strict'

const newLaporanKegiatan = require('./data/laporan-kegiatan-umum.payload.json')

describe('test api laporan-kegiatan', () => {

  const ResourceUrl = () => `${Cypress.env('apiUrl')}/kegiatan-umum`

  const deleteHeader = { 'x-mode': 'TEST' };

  beforeEach(()=>{
    // cy.intercept(`${ResourceUrl()}`, (req)=>{
    //   req.headers['x-mode'] = 'TEST'
    // }).as('testmode')
  })

  it('success get laporan-kegiatan', () => {
    cy.request(`${ResourceUrl()}`)
      .should((response) => {
        expect(response.status).to.eq(200)
        // the server sometimes gets an extra comment posted from another machine
        // which gets returned as 1 extra object
        // expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
        expect(response.body.success).to.equal(true) // new entity created
        expect(response.body.data).to.be.a('array')
      })
  })

  it('success create laporan-kegiatan', () => {
    cy.request('POST', `${ResourceUrl()}`, newLaporanKegiatan)
      .should((response) => {
        expect(response.status).to.eq(200)
        // the server sometimes gets an extra comment posted from another machine
        // which gets returned as 1 extra object
        // expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')

        expect(response.body.success).to.equal(true) // new entity created
        expect(response.body.data).to.be.a('array')
        expect(response.body.data.length).to.gt(0)

          cy.request({
            method: 'DELETE',
            url: `${ResourceUrl()}/${response.body.data[0].id}`,
            headers: {
              ...deleteHeader
            },
            failOnStatusCode: false
          })
          .should((response) => {
            expect(response.status).to.eq(200)
            // the server sometimes gets an extra comment posted from another machine
            // which gets returned as 1 extra object
            // expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
          })
      })
  })

  it('success delete laporan-kegiatan', () => {
    cy.request('POST', `${ResourceUrl()}`, newLaporanKegiatan).then((resCreated) => {

      expect(resCreated.body.success).to.equal(true) // new entity created
      expect(resCreated.body.data).to.be.a('array')
      expect(resCreated.body.data.length).to.gt(0)

      cy.request({
        method: 'DELETE',
        url: `${ResourceUrl()}/${resCreated.body.data[0].id}`,
        headers: {
          ...deleteHeader
        },
        failOnStatusCode: false
      })
        .should((response) => {
          expect(response.status).to.eq(200)
          // the server sometimes gets an extra comment posted from another machine
          // which gets returned as 1 extra object
          // expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
          expect(response).to.have.property('headers')
          expect(response).to.have.property('duration')
        })
    })

  })

  it('success update laporan-kegiatan', () => {
    cy.request('POST', `${ResourceUrl()}`, newLaporanKegiatan).then((resCreated) => {
      expect(resCreated.body.success).to.equal(true) // new entity created
      expect(resCreated.body.data).to.be.a('array')
      expect(resCreated.body.data.length).to.gt(0)

      cy.request('PUT', `${ResourceUrl()}/${resCreated.body.data[0].id}`, newLaporanKegiatan)
        .should((response) => {
          expect(response.status).to.eq(200)
          // the server sometimes gets an extra comment posted from another machine
          // which gets returned as 1 extra object
          // expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
          expect(response).to.have.property('headers')
          expect(response).to.have.property('duration')
          expect(response.body.success).to.equal(true)
          expect(response.body.data).to.be.a('array')
          expect(response.body.data.length).to.gt(0)

          cy.request({
            method: 'DELETE',
            url: `${ResourceUrl()}/${response.body.data[0].id}`,
            headers: {
              ...deleteHeader
            },
            failOnStatusCode: false
          })
            .should((resDelete) => {
              expect(resDelete.status).to.eq(200)
              // the server sometimes gets an extra comment posted from another machine
              // which gets returned as 1 extra object
              // expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
              expect(resDelete).to.have.property('headers')
              expect(resDelete).to.have.property('duration')
            })
        })
    })
  })

})
