var expect = chai.expect;

describe("FizzBuzz", function() {
  it("should return 1 when supplied with 1", function() {
    var fizzBuzz = new FizzBuzz(1);
    expect(fizzBuzz.toString()).to.equal("1");
  });
});