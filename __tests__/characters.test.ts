import request from 'supertest'
import app from '../src/app';

beforeAll(async()=>{
})

describe('Characters Endpoints', function () {

  it('get character',async () => {
      const response = await request(app).get('/character/')
      expect(response.status).toBe(200)
      expect(response.body.data).toEqual({
        name:"kokun",
        images:["a"],
        race:"Saiyayin",
        birth:"21/03/1985"
    })
    
    });
})

afterAll(async()=>{
})