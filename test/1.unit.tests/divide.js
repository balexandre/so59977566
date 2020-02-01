const calculator = require("./../../server/utilities/calculator");

const { expect } = require("chai");

describe("Calculator > DIVIDE", () => {
  
    it("should divide 2 integers", () => {
    const result = calculator.divide(1, 2);
    expect(result).to.eql(0.5);
  });
    
  it("should divide 2 floats", () => {
    const result = calculator.divide(1.5, 2.5);
    expect(result).to.eql(0.6);
  });
    
  it("should not throw error dividing chars", () => {
    const result = calculator.divide('a', 'b');
    expect(result).to.eql(0);
  });
    
  it("should divide number with char", () => {
    const result = calculator.divide(1, 'a');
    expect(result).to.eql(0);
  });
});
