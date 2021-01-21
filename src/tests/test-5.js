import fizzBuzz from "./fizzBuzz";

describe("fizzBuzz function", () => {
  test("should return Fizz if input is multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
    expect(fizzBuzz(10)).not.toBe("Fizz");
  });

  test("should return Buzz for input is multiple of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(11)).not.toBe("Buzz");
  });

});
