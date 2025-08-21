import { describe, it, expect } from '@jest/globals'
import { app } from '../../server'
import request from 'supertest'

const id_cart = '11bf4a2b-8704-4a37-ac27-0cbb4aed9eab'
const id_product = 'f71c61cb-fb12-431e-b16f-0dd78aa55a00'
const url = `/api/create/cartItem/${id_cart}/${id_product}`

describe('POST /api/create/cartItem/:id_cart/:id_product', () => {
  it('should create a cart item', async () => {
    const response = await request(app).post(url).send({
      quantity: 2
    })

    expect(response.statusCode).toBe(201)
  })

  it('should return an error if quantity is not provided', async () => {
    const reponse = await request(app).post(url).send({
      quantity: undefined
    })

    expect(reponse.statusCode).toBe(400)
  })
  
  it('should return an error if quantity is not a number', async () => {
    const response = await request(app).post(url).send({
      quantity: 'not a number'
    })

    expect(response.statusCode).toBe(400)
  })

  it('should return an error if id_cart or id_product is invalid', async () => {
    const response = await request(app).post('/api/create/cartItem/invalid_cart/invalid_product').send({
      quantity: 2
    })

    expect(response.statusCode).toBe(400)
  })

  it('should return an error if the cart does not exist', async () => {
    const response = await request(app).post('/api/create/cartItem/00000000-0000-0000-0000-000000000000/94cec6f0-fb66-4519-b714-f113826bc413').send({
      quantity: 2
    })

    expect(response.statusCode).toBe(400)
  })

  it('should return an error if the product does not exist', async () => {
    const response = await request(app).post('/api/create/cartItem/11bf4a2b-8704-4a37-ac27-0cbb4aed9eab/00000000-0000-0000-0000-000000000000').send({
      quantity: 2
    })

    expect(response.statusCode).toBe(400)
  })

  it('should return an error if the cart item already exists', async () => {
    const response = await request(app).post('/api/create/cartItem/11bf4a2b-8704-4a37-ac27-0cbb4aed9eab/94cec6f0-fb66-4519-b714-f113826bc413').send({
      quantity: 2
    })

    expect(response.statusCode).toBe(400)
  })

  it('should return an error if the cart item creation fails', async () => {
    const response = await request(app).post('/api/create/cartItem/11bf4a2b-8704-4a37-ac27-0cbb4aed9eab/94cec6f0-fb66-4519-b714-f113826bc413').send({
      quantity: 2
    })

    expect(response.statusCode).toBe(400)
    expect(response.body).toHaveProperty('error', 'Algo salio mal')
  })

  it('should return an error if the request body is invalid', async () => {
    const response = await request(app).post(url).send({
      invalidField: 'invalidValue'
    })

    expect(response.statusCode).toBe(400)
    expect(response.body).toHaveProperty('error', 'Algo salio mal')
  })

  it('should return an error if the request body is empty', async () => {
    const response = await request(app).post(url).send({
      quantity: null
    })

    expect(response.statusCode).toBe(400)
  })

  it('should return an error if the request body is not JSON', async () => {
    const response = await request(app).post(url).send('Algo salio mal')
    expect(response.statusCode).toBe(400)
  })

  it('should return an error if the request body is not a valid JSON object', async () => {
    const response = await request(app).post(url).send('{"quantity": "not a number"}')
    expect(response.statusCode).toBe(400)
    expect(response.body).toHaveProperty('error', 'Algo salio mal')
  })
})