const calculator = require("./../../server/utilities/calculator");

const { expect } = require("chai");

describe("Calculator > SUM", () => {
  
    it("should sum 2 integers", () => {
    const result = calculator.sum(1, 2);
    expect(result).to.eql(3);
  });
    
  it("should sum 2 floats", () => {
    const result = calculator.sum(1.5, 2.5);
    expect(result).to.eql(4);
  });
    
  it("should not throw error summing chars", () => {
    const result = calculator.sum('a', 'b');
    expect(result).to.eql(0);
  });
    
  it("should sum number with char", () => {
    const result = calculator.sum(1, 'a');
    expect(result).to.eql(1);
  });
});
