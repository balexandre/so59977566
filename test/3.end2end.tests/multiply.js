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
describe("Endpoints > MULTIPLY", () => {
  
  it("should multiply 2 integers", done => {
      const url = '/v1/multiply/1/2';
      postServerRequest(url, (err, res) => { 
          preCheckRequest(res, 200);
          expect(res.body.result).to.eq(2);
          done();
      });
  });
  
  it("should multiply 2 floats", done => {
      const url = '/v1/multiply/1.5/2.5';
      postServerRequest(url, (err, res) => { 
          preCheckRequest(res, 200);
          expect(res.body.result).to.eq(3.75);
          done();
      });
  });
  
  it("should not throw error multiplying chars", done => {
      const url = '/v1/multiply/a/b';
      postServerRequest(url, (err, res) => { 
          preCheckRequest(res, 200);
          expect(res.body.result).to.eq(0);
          done();
      });
  });
  
  it("should multiply number with char", done => {
      const url = '/v1/multiply/1/a';
      postServerRequest(url, (err, res) => { 
          preCheckRequest(res, 200);
          expect(res.body.result).to.eq(0);
          done();
      });
  });
});
