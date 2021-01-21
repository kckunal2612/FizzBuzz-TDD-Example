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

  test("should return FizzBuzz for input is multiple of both 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
    expect(fizzBuzz(20)).not.toBe("FizzBuzz");
  });

  test("should return the number if input is neither multiple of 3 nor multiple of 5", () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(4)).toBe(4);
  });

});
