const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require("./../../server/server");

chai.use(chaiHttp);

const { server, serverPort } = app;
const { expect } = chai;

// helpers
const preCheckRequest = (res, statusCodeToCheck) => {
    expect(res.status).to.be.eql(statusCodeToCheck);
    expect(res.type).to.be.eql('application/json');
};
const postServerRequest = (url, response) => {
  chai
    .request(server)
    .get(url)
    .end(response);
};

// tests
describe("Endpoints > DIVIDE", () => {
  
  it("should divide 2 integers", done => {
      const url = '/v1/divide/1/2';
      postServerRequest(url, (err, res) => { 
          preCheckRequest(res, 200);
          expect(res.body.result).to.eq(0.5);
          done();
      });
  });
  
  it("should divide 2 floats", done => {
      const url = '/v1/divide/1.5/2.5';
      postServerRequest(url, (err, res) => { 
          preCheckRequest(res, 200);
          expect(res.body.result).to.eq(0.6);
          done();
      });
  });
  
  it("should not throw error dividing chars", done => {
      const url = '/v1/divide/a/b';
      postServerRequest(url, (err, res) => { 
          preCheckRequest(res, 200);
          expect(res.body.result).to.eq(0);
          done();
      });
  });
  
  it("should divide number with char", done => {
      const url = '/v1/divide/1/a';
      postServerRequest(url, (err, res) => { 
          preCheckRequest(res, 200);
          expect(res.body.result).to.eq(0);
          done();
      });
  });
});
