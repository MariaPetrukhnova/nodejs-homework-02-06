// const login = require("../controllers/auth-ctrls/login");

// відповідь повина мати статус-код 200
// у відповіді повинен повертатися токен
// у відповіді повинен повертатися об'єкт user з 2 полями email и subscription з типом даних String
const mongoose = require("mongoose");
const request = require('supertest');
const app = require('../app');

describe('login', () => {
  it('should have status 200', async () => {
    mongoose.connect(process.env.DB_HOST)

    const res = await request(app)
      .post('/api/users/login')
      .send({
        email: "pin@mail.com",
        password: '123456',
      })
    
    mongoose.connection.close()
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty("token")
    expect(res.body?.user).toEqual({ email: expect.any(String), subscription: expect.any(String) })
  })
});