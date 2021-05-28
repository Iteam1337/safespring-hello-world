const server = require('./server')
const request = require('supertest')

it('says hello', async () => {
  const res = await request(server).get('/')

  expect(res.statusCode).toEqual(200)
  expect(res.text).toEqual('Hello World')
})
