

describe("A suite", function() {
  var service = Service();

  describe('plus', function(){
    var sum = service.sum(1, 5);

    it("it should add when a < 5", function() {
      expect(sum).toEqual(6);
    });

    sum = service.sum(5, 5);
    it("it should add when a >= 5", function() {
      expect(sum).toEqual(15);
    });
  });

  describe('minus', function(){
    var minus = service.minus(10, 5);

    it("it should subtract", function() {
      expect(minus).toEqual(5);
    })
  });

  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("true is true", function() {
    expect(true).toBe(true);
  });
});


