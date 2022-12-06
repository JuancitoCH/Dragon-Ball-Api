import request from 'supertest'
import app from '../app';
import Prisma from '../config/db';
import CharacterInterface from '../interfaces/character.interface'

jest.setTimeout(10000)

beforeAll(async () => {
  Prisma.$connect()
})

describe('Characters Endpoints', function () {
  let characters: Array<CharacterInterface> = []

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
      .set("Authorization",`Basic ${process.env.TEST_BASIC_KEY_ENCODED}`)
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
    expect(response.body.data[response.body.data.length - 1]).toEqual(
      expect.objectContaining({
        name: "Goku",
        lastname: "Son",
      })
    )
    characters = response.body.data
    // expect.arrayContaining([
  });
  it('It should get error at create a character', async () => {
    const character: any = {
    }
    const response = await request(app).post('/character/')
      .send(character)
    expect(response.status).toBe(400)
    expect(response.body).toEqual(
      expect.objectContaining({
        success: false,
        error: {
          message: expect.stringContaining("Invalid"),
        },
      }))
    const response2 = await request(app).post('/character/')
      .send({
        name: 2,
        lastname: 2,
        birth: 2,
        race: 2,
        images: "a",
        heigth: "hola",
        transformations: [2]
      })
    expect(response2.status).toBe(400)
    expect(response2.body).toEqual(
      expect.objectContaining({
        success: false,
        error: {
          message: expect.stringContaining("Invalid"),
        },
      }))

    const response3 = await request(app).post('/character/')
      .send({
        name: "Goku",
        lastname: "Son",
        birth: "23023023",
        race: "Saiyan",
        images: [],
        heigth: 180,
      })
    expect(response3.status).toBe(400)
    expect(response3.body).toEqual(
      expect.objectContaining({
        success: false,
        error: {
          message: expect.stringContaining("Invalid"),
        },
      }))
  });

  it("It Should delete one Character", async () => {
    const response = await request(app).delete('/character/' + characters[characters.length - 1].id)
      .set("Authorization",`Basic ${process.env.TEST_BASIC_KEY_ENCODED}`)
    expect(response.status).toBe(200)
    expect(response.body.data).toEqual(
      expect.objectContaining({
        name: "Goku",
        lastname: "Son",
      })
    )
  })

})

afterAll(async () => {
  Prisma.$disconnect()
})