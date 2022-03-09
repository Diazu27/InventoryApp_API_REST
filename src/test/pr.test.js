import supertest from "supertest";
import { app, server } from "../app";



const api = supertest(app);

test('Products are returned in JSON', async() => {
  
    await api
        .get('/api/products')
        .expect(200)
        .expect('Content-Type', /application\/json/)
        
});


afterAll(() => {
    server.close();
})