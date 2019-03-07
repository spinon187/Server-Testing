const request = require('supertest');
const server = require('./server');
const db = require('./dbConfig');

describe('server.js', () => {
    describe('create route', () => {
        it('should return 201', async () => {
            const res = await request(server).post({name: 'something'});
            expect(res.status).toBe(201);
        });
        it('should return 500', async () => {
            const res = await request(server).post({name: null});
            expect(res.status).toBe(500);
        });
    });
    describe('delete route', () => {
        it('should return 200', async ()=> {
            const res = await request(server).delete({id: 1});
            expect(res.status).toBe(200);
        })
        it('should return 500', async ()=> {
            const res = await request(server).delete({id: 'C'});
            expect(res.status).toBe(500);
        })
    })

})