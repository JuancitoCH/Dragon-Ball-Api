import request from 'supertest'
import app from '../app';
import Prisma from '../config/db';
import CharacterInterface from '../interfaces/character.interface'

jest.setTimeout(10000)

beforeAll(async () => {
  Prisma.$connect()
})

describe('Characters Endpoints', function () {


  it('It should create a character', async () => {
    const character: CharacterInterface = {
      name: "Goku",
      lastname: "Son",
      birth: "23023023",
      race: "Saiyan",
      images: [],
      heigth: 180,
      // transformations:[]
    }
    const response = await request(app).post('/character/')
      .send(character)
    expect(response.status).toBe(201)
    expect(response.body.data).toEqual(
      expect.objectContaining({
        name: "Goku",
        lastname: "Son",
        birth: "23023023",
        race: "Saiyan",
        images: [],
        heigth: 180,
      }))

  });
  it('It should get all characters', async () => {
    const response = await request(app).get('/character/')
    expect(response.status).toBe(200)
    expect(response.body.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Goku",
          lastname: "Son",
        })
      ]))

  });
})

afterAll(async () => {
  Prisma.$disconnect()
})