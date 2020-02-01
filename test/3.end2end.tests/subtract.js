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
describe("Endpoints > SUBTRACT", () => {
  
  it("should subtract 2 integers", done => {
      const url = '/v1/subtract/1/2';
      postServerRequest(url, (err, res) => { 
          preCheckRequest(res, 200);
          expect(res.body.result).to.eq(-1);
          done();
      });
  });
  
  it("should subtract 2 floats", done => {
      const url = '/v1/subtract/1.5/2.5';
      postServerRequest(url, (err, res) => { 
          preCheckRequest(res, 200);
          expect(res.body.result).to.eq(-1);
          done();
      });
  });
  
  it("should not throw error subtracting chars", done => {
      const url = '/v1/subtract/a/b';
      postServerRequest(url, (err, res) => { 
          preCheckRequest(res, 200);
          expect(res.body.result).to.eq(0);
          done();
      });
  });
  
  it("should subtract number with char", done => {
      const url = '/v1/subtract/1/a';
      postServerRequest(url, (err, res) => { 
          preCheckRequest(res, 200);
          expect(res.body.result).to.eq(1);
          done();
      });
  });
});
