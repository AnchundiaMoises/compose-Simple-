const app = require('../index.js')
const request = require('supertest')


//TEST DE CONCEPTO AUTOS

describe('GET /concepto', ()=>{
    test('should respond whit a 200 status', async()=>{
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200)
    })
    test('should respond whit a JSON', async()=>{
        const response = await request(app).get('/').send();
        expect(response.body).toBeInstanceOf(Object)
    })   
})

//TEST DE  POST CONCEPTO AUTOS

describe('POST /concepto', ()=>{
    test('should respond whit a 200 status code', async()=>{
        const response = await request(app).post('/').send();
        expect(response.statusCode).toBe(200)
    })
    test('shouls respond whit a JSON', async()=>{
        const response = await request(app).post('/').send();
        expect(response.body).toBeInstanceOf(Object)
    })    
})

