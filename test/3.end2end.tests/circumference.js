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
describe("Endpoints > CIRCUMFERENCE", () => {
  
  it("should calculate the circumference", done => {
      const url = '/v1/circumference/10';
      postServerRequest(url, (err, res) => { 
          preCheckRequest(res, 200);
          expect(res.body.result).to.eq(62.83185307179586);
          done();
      });
  });
});
