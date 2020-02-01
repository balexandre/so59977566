const parser = require("./../../server/utilities/parser");

const { expect } = require("chai");

describe("Parser", () => {
  it("should parse integer", () => {
    const result = parser.input(1);
    expect(result).to.eql(1);
  });
    
  it("should parse float", () => {
    const result = parser.input(1.5);
    expect(result).to.eql(1.5);
  });
    
  it("should parse char", () => {
    const result = parser.input('a');
    expect(result).to.eql(0);
  });
});
