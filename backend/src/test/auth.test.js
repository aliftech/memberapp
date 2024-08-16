const request = require('supertest');
const fs = require('fs');
const path = require('path');
const { app, server } = require('../../app');

let email = null;

function generateRandomEmail() {
  const timestamp = Date.now();
  email = `johndoe${timestamp}@example.com`;
  const dataFilePath = path.join(__dirname, 'data.json');
  // Read the data.json file
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

  // Update the email in data.json
  data.email = email;

  // Write the updated data back to data.json
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  return email;
}

describe('Auth API', () => {
  beforeAll(() => {
    generateRandomEmail(); // Call the function to set the email
  });
  
  afterAll(done => {
    // Close the server after tests
    server.close(done);
  });

  // signup test
  it('should create a new user', async () => {
    const res = await request(app).post('/signup').send({
      firstname: "John",
      lastname: "Doe",
      email: email,
      membership_type: "A",
      password: "aezakmi321",
      confirm_password: "aezakmi321"
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toEqual('Your account have been created');
  });

  // signin test
  it('should login successfully', async () => {
    const res = await request(app).post('/signin').send({
      email: email,
      password: "aezakmi321"
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("Login success");
  });
});