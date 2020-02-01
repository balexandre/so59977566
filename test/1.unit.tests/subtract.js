const calculator = require("./../../server/utilities/calculator");

const { expect } = require("chai");

describe("Calculator > SUBTRACT", () => {
  
  it("should subtract 2 integers", () => {
    const result = calculator.subtract(1, 2);
    expect(result).to.eql(-1);
  });
    
  it("should subtract 2 floats", () => {
    const result = calculator.subtract(1.5, 2.5);
    expect(result).to.eql(-1);
  });
    
  it("should not throw error subtracting chars", () => {
    const result = calculator.subtract('a', 'b');
    expect(result).to.eql(0);
  });
    
  it("should subtract number with char", () => {
    const result = calculator.subtract(1, 'a');
    expect(result).to.eql(1);
  });
});
