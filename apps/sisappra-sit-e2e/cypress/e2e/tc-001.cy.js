'use strict'

describe('Test jenis-kegiatan', () => {

  it('success get jenis-kegiatan', () => {
    cy.request(`${Cypress.env('apiUrl')}/jenis-kegiatan/`)
      .should((response) => {
        expect(response.status).to.eq(200)
      })
  })

})