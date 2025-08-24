import { it, expect, describe, jest } from '@jest/globals'
import { app } from '../../server'
import request from 'supertest'

jest.mock('../../shared/constants/redis', () => ({
  redis: { get: jest.fn(), set: jest.fn(), del: jest.fn() }
}))

const id_user = 'e8f007bc-0cf8-4993-9a44-a576da561cc1'
// const url = `/api/create/order/${id_user}`

describe('POST /api/order/:id_user', () => {
/*   it('should create an order', async () => {
    const response = await request(app).post(url)
    console.log(response.body)
    expect(response.statusCode).toBe(201)
  }) */

  it('should return an error if id_user is invalid', async () => {
    const response = await request(app).post('/api/create/order/invalid_id')
    expect(response.statusCode).toBe(400)
  })

  it('should return an error if id_user is not provided', async () => {
    const response = await request(app).post('/api/create/order/')
    expect(response.statusCode).toBe(404)
  })

  it('should return an error if id_user is null', async () => {
    const response = await request(app).post('/api/create/order/null')
    expect(response.statusCode).toBe(400)
  })

  it('should return an error if id_user is empty', async () => {
    const response = await request(app).post('/api/create/order//')
    expect(response.statusCode).toBe(404)
  })

  it('should return an error if id_user is not provided', async () => {
    const response = await request(app).post('/api/create/order/')
    expect(response.statusCode).toBe(404)
  })
})