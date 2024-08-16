const request = require('supertest');
const fs = require('fs');
const path = require('path');
const { app, server } = require('../../app');

describe('Video API', () => {
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
        const login = await request(app)
            .post('/signin')
            .send({
                email: email,
                password: 'aezakmi321'
            });
        
        token = login.body.data.access_token;
    });

    afterAll(done => {
        server.close(done);
    });

    // Get all video test
    it('should return all videos based on user membership_type', async () => {
        const res = await request(app)
            .get('/video')
            .set('Authorization', `Bearer ${token}`)
            .set('Accept', 'application/json');
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Get all videos');
    });

    // Get detail video
    it('should return detail video', async () => {
        const res = await request(app)
            .get('/video/1')
            .set('Authorization', `Bearer ${token}`)
            .set('Accept', 'application/json');
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Get detail video of ' + res.body.data.title);
    })
});