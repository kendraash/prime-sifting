describe("primeSifting", function() {
  it("returns true for the prime numbers 7 or 1", function() {
    expect(primeSifting(1)).to.equal(true);
  });

  it("returns true for a two digit prime number", function() {
    expect(primeSifting(29)).to.equal(true);
  });

  it("returns true for a three digit prime number", function() {
    expect(primeSifting(389)).to.equal(true);
  });

  it("returns true for a six digit prime number", function() {
    expect(primeSifting(100411)).to.equal(true);
  });

  it("returns false for a non prime number", function() {
    expect(primeSifting(35)).to.equal(false);
  });

});
