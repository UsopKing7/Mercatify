import { describe, test, expect } from '@jest/globals'
import { app } from '../../server'
import request from 'supertest'

const url = '/api/login'
const email = 'nicolasguarachi888@gmail.com'
const password = 'nicolas_9090'
const registerUrl = '/api/register'

// test para ruta POST /api/login
describe('POST /api/login' , () => {
  test('Se espera que el codigo de estado sea un 200', async () => {
    const response = await request(app).post(url).send({
      email, password
    })

    expect(response.statusCode).toBe(200)
  })

  test('Se espera que lo enviado sea un objeto', async () => {
    const response = await request(app).post(url).send({
      email, password
    })

    expect(typeof response.body).toBe('object')
  })

  test('Se espera que lo sea un Content-Type application/json', async () => {
    const response = await request(app).post(url).send({
      email, password
    })

    expect(response.headers['content-type']).toMatch('json')
  })

  test('Se espera que lo enviado no este vacio', async () => {
    const response = await request(app).post(url).send({
      email: '', password: ''
    })

    expect(response.statusCode).toBe(400)
  })

  test('Se espera que el email no este vacio', async () => {
    const response = await request(app).post(url).send({
      email: '', password
    })

    expect(response.statusCode).toBe(400)
  })

  test('Se espera que el password no este vacio', async () => {
    const response = await request(app).post(url).send({
      email, password: ''
    })

    expect(response.statusCode).toBe(400)
  })
})

// test para ruta POST /api/register
describe('POST /api/register', () => {
    test('Debe responder con 201 si el usuario se registra correctamente', async () => {
    const response = await request(app).post(registerUrl).send({
      name: 'Nicolás',
      email: `test_${Date.now()}@gmail.com`, // Para evitar conflicto de duplicados
      password: '123123123'
    })

    expect(response.statusCode).toBe(201)
    expect(typeof response.body).toBe('object')
    expect(response.headers['content-type']).toMatch('json')
  })

  test('Debe responder con 400 si los campos están vacíos', async () => {
    const response = await request(app).post(registerUrl).send({
      name: '',
      email: '',
      password: ''
    })

    expect(response.statusCode).toBe(400)
  })

  test('Debe responder con 400 si falta el email', async () => {
    const response = await request(app).post(registerUrl).send({
      name: 'Nicolás',
      password: '123123123'
    })

    expect(response.statusCode).toBe(400)
  })

  test('Debe responder con 400 si falta el password', async () => {
    const response = await request(app).post(registerUrl).send({
      name: 'Nicolás',
      email: 'nicolas@gmail.com'
    })

    expect(response.statusCode).toBe(400)
  })
})