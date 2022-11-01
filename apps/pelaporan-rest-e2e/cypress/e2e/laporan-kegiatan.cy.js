'use strict'

describe('test api laporan-kegiatan', () => {

  it('success get laporan-kegiatan', () => {
    cy.request(`${Cypress.env('apiUrl')}/laporan-kegiatan/`)
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
    cy.request('POST', `${Cypress.env('apiUrl')}/laporan-kegiatan/`, {
      "jenis_kegiatan_id": 0,
      "jenis_personil": 0,
      "uraian_kegiatan": "stringstri",
      "tindak_lanjut_admin_jenis_pasal_id": 0,
      "tindak_lanjut_admin_penertiban_id": 0,
      "tindak_lanjut_admin_pelanggaran_id": 0,
      "tindak_lanjut_admin_perda_perkada_id": 0,
      "tindak_lanjut_penyelesaian_id": 0,
      "tindak_lanjut_identitas_no_bap": "stringstri",
      "tindak_lanjut_identitas_nama": "string",
      "tindak_lanjut_identitas_nama_usaha": "stringstri",
      "tindak_lanjut_identitas_alamat_usaha": "stringstri",
      "tindak_lanjut_identitas_nik": "stringstri",
      "tindak_lanjut_identitas_alamat": "stringstri",
      "tindak_lanjut_identitas_jenis_usaha_id": 0,
      "tindak_lanjut_penindakan_id": 0,
      "tindak_lanjut_jumlah_pelanggar": 0,
      "tindak_lanjut_denda_non_pengadilan": 0,
      "tindak_lanjut_denda_matauang": "string",
      "tindak_lanjut_denda_tgl_setor": "string",
      "tindak_lanjut_denda_bank": "string",
      "tindak_lanjut_denda_no_validasi": "string",
      "dokumentasi_files": [
        "string"
      ],
      "dokumentasi_keterangan": "string"
    })
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

        cy.request('DELETE', `${Cypress.env('apiUrl')}/laporan-kegiatan/${response.body.data[0].id}`)
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
    cy.request('POST', `${Cypress.env('apiUrl')}/laporan-kegiatan/`, {
      "jenis_kegiatan_id": 0,
      "jenis_personil": 0,
      "uraian_kegiatan": "stringstri",
      "tindak_lanjut_admin_jenis_pasal_id": 0,
      "tindak_lanjut_admin_penertiban_id": 0,
      "tindak_lanjut_admin_pelanggaran_id": 0,
      "tindak_lanjut_admin_perda_perkada_id": 0,
      "tindak_lanjut_penyelesaian_id": 0,
      "tindak_lanjut_identitas_no_bap": "stringstri",
      "tindak_lanjut_identitas_nama": "string",
      "tindak_lanjut_identitas_nama_usaha": "stringstri",
      "tindak_lanjut_identitas_alamat_usaha": "stringstri",
      "tindak_lanjut_identitas_nik": "stringstri",
      "tindak_lanjut_identitas_alamat": "stringstri",
      "tindak_lanjut_identitas_jenis_usaha_id": 0,
      "tindak_lanjut_penindakan_id": 0,
      "tindak_lanjut_jumlah_pelanggar": 0,
      "tindak_lanjut_denda_non_pengadilan": 0,
      "tindak_lanjut_denda_matauang": "string",
      "tindak_lanjut_denda_tgl_setor": "string",
      "tindak_lanjut_denda_bank": "string",
      "tindak_lanjut_denda_no_validasi": "string",
      "dokumentasi_files": [
        "string"
      ],
      "dokumentasi_keterangan": "string"
    }).then((resCreated) => {

      expect(resCreated.body.success).to.equal(true) // new entity created
      expect(resCreated.body.data).to.be.a('array')
      expect(resCreated.body.data.length).to.gt(0)

      cy.request('DELETE', `${Cypress.env('apiUrl')}/laporan-kegiatan/${resCreated.body.data[0].id}`)
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
    cy.request('POST', `${Cypress.env('apiUrl')}/laporan-kegiatan/`, {
      "jenis_kegiatan_id": 0,
      "jenis_personil": 0,
      "uraian_kegiatan": "stringstri",
      "tindak_lanjut_admin_jenis_pasal_id": 0,
      "tindak_lanjut_admin_penertiban_id": 0,
      "tindak_lanjut_admin_pelanggaran_id": 0,
      "tindak_lanjut_admin_perda_perkada_id": 0,
      "tindak_lanjut_penyelesaian_id": 0,
      "tindak_lanjut_identitas_no_bap": "stringstri",
      "tindak_lanjut_identitas_nama": "string",
      "tindak_lanjut_identitas_nama_usaha": "stringstri",
      "tindak_lanjut_identitas_alamat_usaha": "stringstri",
      "tindak_lanjut_identitas_nik": "stringstri",
      "tindak_lanjut_identitas_alamat": "stringstri",
      "tindak_lanjut_identitas_jenis_usaha_id": 0,
      "tindak_lanjut_penindakan_id": 0,
      "tindak_lanjut_jumlah_pelanggar": 0,
      "tindak_lanjut_denda_non_pengadilan": 0,
      "tindak_lanjut_denda_matauang": "string",
      "tindak_lanjut_denda_tgl_setor": "string",
      "tindak_lanjut_denda_bank": "string",
      "tindak_lanjut_denda_no_validasi": "string",
      "dokumentasi_files": [
        "string"
      ],
      "dokumentasi_keterangan": "string"
    }).then((resCreated) => {
      expect(resCreated.body.success).to.equal(true) // new entity created
      expect(resCreated.body.data).to.be.a('array')
      expect(resCreated.body.data.length).to.gt(0)

      cy.request('PUT', `${Cypress.env('apiUrl')}/laporan-kegiatan/${resCreated.body.data[0].id}`, {
        "jenis_kegiatan_id": 0,
        "jenis_personil": 0,
        "uraian_kegiatan": "stringstri",
        "tindak_lanjut_admin_jenis_pasal_id": 0,
        "tindak_lanjut_admin_penertiban_id": 0,
        "tindak_lanjut_admin_pelanggaran_id": 0,
        "tindak_lanjut_admin_perda_perkada_id": 0,
        "tindak_lanjut_penyelesaian_id": 0,
        "tindak_lanjut_identitas_no_bap": "stringstri",
        "tindak_lanjut_identitas_nama": "string",
        "tindak_lanjut_identitas_nama_usaha": "stringstri",
        "tindak_lanjut_identitas_alamat_usaha": "stringstri",
        "tindak_lanjut_identitas_nik": "stringstri",
        "tindak_lanjut_identitas_alamat": "stringstri",
        "tindak_lanjut_identitas_jenis_usaha_id": 0,
        "tindak_lanjut_penindakan_id": 0,
        "tindak_lanjut_jumlah_pelanggar": 0,
        "tindak_lanjut_denda_non_pengadilan": 0,
        "tindak_lanjut_denda_matauang": "string",
        "tindak_lanjut_denda_tgl_setor": "string",
        "tindak_lanjut_denda_bank": "string",
        "tindak_lanjut_denda_no_validasi": "string",
        "dokumentasi_files": [
          "string"
        ],
        "dokumentasi_keterangan": "string"
      })
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

          cy.request('DELETE', `${Cypress.env('apiUrl')}/laporan-kegiatan/${response.body.data[0].id}`)
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