const request = require('supertest');
const fs = require('fs');
const path = require('path');
const { app, server } = require('../../app');

describe('Article API', () => {
    let token;

    beforeAll(async () => {
        // Define the path to the data.json file
        const dataFilePath = path.join(__dirname, 'data.json');

        // Read the data.json file synchronously
        const rawData = fs.readFileSync(dataFilePath, 'utf8');

        // Parse the JSON data
        const data = JSON.parse(rawData);

        // Access the email field
        const email = data.email;
        // Obtain the token by signing in
        const loginRes = await request(app)
            .post('/signin')
            .send({
                email: email,
                password: 'aezakmi321'
            });

        token = loginRes.body.data.access_token;
    });

    afterAll(done => {
        server.close(done);
    });

    // Get all articles test
    it('should return all articles based on user membership_type', async () => {
        const res = await request(app)
            .get('/article')
            .set('Authorization', `Bearer ${token}`)
            .set('Accept', 'application/json');

        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Get all articles');
    })

    // Get detail article
    it('should return detail article', async () => {
        const res = await request(app)
            .get('/article/1')
            .set('Authorization', `Bearer ${token}`)
            .set('Accept', 'application/json');
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Get detail article of ' + res.body.data.title);
    })
});