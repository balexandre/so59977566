const calculator = require("./../../server/utilities/calculator");

const { expect } = require("chai");

describe("Calculator > MULTIPLY", () => {
  
    it("should multiply 2 integers", () => {
    const result = calculator.multiply(1, 2);
    expect(result).to.eql(2);
  });
    
  it("should multiply 2 floats", () => {
    const result = calculator.multiply(1.5, 2.5);
    expect(result).to.eql(3.75);
  });
    
  it("should not throw error multiplying chars", () => {
    const result = calculator.multiply('a', 'b');
    expect(result).to.eql(0);
  });
    
  it("should multiply number with char", () => {
    const result = calculator.multiply(1, 'a');
    expect(result).to.eql(0);
  });
});
