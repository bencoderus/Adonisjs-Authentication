'use strict'

const {
  test,
  trait
} = use('Test/Suite')('Auth')
trait('Test/ApiClient')


test('make sure 2 + 2 is 4', async ({
  assert
}) => {
  assert.equal(2 + 2, 4)
})

test('test the homepage', async ({
  client
}) => {

  const response = await client.get('/').end()

  response.assertStatus(200)
})

test('test login', async ({
  client
}) => {
  let user = {
    email: "bencoderus@gmail.com",
    password: "wealth"
  }
  let response = await client.post('/login').header('accept', 'application/json').send(user).end()
  response.assertStatus(200)
})

test('test registration', async ({
  client
}) => {
  let user = {
    username: "Coderus",
    email: "devbenart@gmail.com",
    password: "112233"
  }

  let response = await client.post('/register').header('accept', 'application/json').send(user).end()
  response.assertStatus(200)
})
