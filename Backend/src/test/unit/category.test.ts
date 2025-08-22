import { describe, it, expect } from '@jest/globals'
import { app } from '../../server'
import request from 'supertest'

const id_category = 'c148af51-fd0d-461b-be15-ab1943000c90'
const id_product = '94cec6f0-fb66-4519-b714-f113826bc413'

const urlCreate = '/api/create/category'
const urlAddProduct = `/api/add/product/category/${id_category}/${id_product}`

describe('POST /api/create/category', () => {
  it('should create a category', async () => {
    const response = await request(app).post(urlCreate).send({
      name: 'Tegnology'
    })
    expect(response.statusCode).toBe(201)
  })

  it('should return an error if name is not provided', async () => {
    const response = await request(app).post(urlCreate).send({
      name: undefined
    })

    expect(response.statusCode).toBe(400)
  })

  it('should return an error if name is not a string', async () => {
    const response = await request(app).post(urlCreate).send({
      name: 12345
    })

    expect(response.statusCode).toBe(400)
  })

/*   it('should return an error if category already exists', async () => {
    const response = await request(app).post(urlCreate).send({
      name: 'Tegnology'
    })

    expect(response.statusCode).toBe(400)
  }) */

  it('should return an error if category name is too short', async () => {
    const response = await request(app).post(urlCreate).send({
      name: 'Te'
    })

    expect(response.statusCode).toBe(400)
  })

  it('should return an error if category name is too long', async () => {
    const response = await request(app).post(urlCreate).send({
      name: 'T'.repeat(256)
    })

    expect(response.statusCode).toBe(400)
  })

  it('should return an error if categotry name contains special characters', async () => {
    const response = await request(app).post(urlCreate).send({
      name: 'Tegnology@2023'
    })

    expect(response.statusCode).toBe(400)
  })

  it('should return an error if category name contains numbers', async () => {
    const response = await request(app).post(urlCreate).send({
      name: 'Tegnology123'
    })

    expect(response.statusCode).toBe(400)
  })

  it('should return an error if category name contains spaces', async () => {
    const response = await request(app).post(urlCreate).send({
      name: 'Tegnology 2023'
    })

    expect(response.statusCode).toBe(400)
  })

  it('should return an error if category name is empty', async () => {
    const response = await request(app).post(urlCreate).send({
      name: ''
    })

    expect(response.statusCode).toBe(400)
  })

  it('should return an error if category name is null', async () => {
    const response = await request(app).post(urlCreate).send({
      name: null
    })

    expect(response.statusCode).toBe(400)
  })
})

describe('POST /api/add/product/:id_category/:id_product', () => {
  it('should add a product to a category', async () => {
    const response = await request(app).post(urlAddProduct)
    expect(response.statusCode).toBe(201)
  })

  it('should return an error if category ID is invalid', async () => {
    const response = await request(app).post('/api/add/product/invalid_id/' + id_product)
    expect(response.statusCode).toBe(404)
  })

  it('should return an error if product ID is invalid', async () => {
    const response = await request(app).post(`/api/add/product/${id_category}/invalid_id`)
    expect(response.statusCode).toBe(404)
  })

  it('should return an error if category does not exist', async () => {
    const response = await request(app).post('/api/add/product/non_existent_category/' + id_product)
    expect(response.statusCode).toBe(404)
  })

  it('should return an error if product does not exist', async () => {
    const response = await request(app).post(`/api/add/product/${id_category}/non_existent_product`)
    expect(response.statusCode).toBe(404)
  })

  it('should return an error if category ID is not provided', async () => {
    const response = await request(app).post('/api/add/product//invalid_id')
    expect(response.statusCode).toBe(404)
  })

  it('should return an error if product ID is not provided', async () => {
    const response = await request(app).post(`/api/add/product/${id_category}/`)
    expect(response.statusCode).toBe(404)
  })

  it('should return an error if category ID is null', async () => {
    const response = await request(app).post('/api/add/product/null/' + id_product)
    expect(response.statusCode).toBe(404)
  })

  it('should return an error if product ID is null', async () => {
    const response = await request(app).post(`/api/add/product/${id_category}/null`)
    expect(response.statusCode).toBe(404)
  })

  it('should return an error if category ID is empty', async () => {
    const response = await request(app).post('/api/add/product//')
    expect(response.statusCode).toBe(404)
  })
})

describe('GET /api/list/products/category/:id_category', () => {
  it('should list products in a category', async () => {
    const response = await request(app).get(`/api/list/products/category/${id_category}`)
    expect(response.statusCode).toBe(200)
  })

  it('should return an content-type application/json', async () => {
    const response = await request(app).get(`/api/list/products/category/${id_category}`)
    expect(response.headers['content-type']).toMatch('json')
  })

  it('should return an array', async () => {
    const response = await request(app).get(`/api/list/products/category/${id_category}`)
    expect(Array.isArray(response.body)).toBe(true)
  })
})
