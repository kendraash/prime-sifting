describe("primeSifting", function() {
  it("returns true for the prime numbers 7 or 1", function() {
    expect(primeSifting(1)).to.equal(true);
  });

  it("returns true for a two digit prime number", function() {
    expect(primeSifting(29)).to.equal(true);
  });
});
