import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
require('ts-node')

// Replace this with your actual API server URL
const API_URL = 'http://localhost:3000';

chai.use(chaiHttp);

describe('API Tests', () => {
  it('should get a 200 response for the / endpoint', async () => {
    // const res = await chai.request(API_URL).get('/')
    // expect(res).to.have.status(200);
    // expect(res.body).to.be.an('object');
  });

  it('should post data and get a 201 response', async () => {
    // const res = await chai.request(API_URL).post('/data').send({ key: 'value' });
    // expect(res).to.have.status(201);
    // expect(res.body).to.have.property('key', 'value');
  });

});
