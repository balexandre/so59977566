const calculator = require("./../../server/utilities/calculator");

const { expect } = require("chai");

describe("Calculator > CIRCUMFERENCE", () => {
  
  it("should calculate the circumference", () => {
    const result1 = calculator.multiply(10, 2);
    const result2 = calculator.multiply(result1, Math.PI);
    expect(result2).to.eql(62.83185307179586);
  });
});
