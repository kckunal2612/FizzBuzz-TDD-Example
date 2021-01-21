export default function fizzBuzz(input) {
  const multipleOf3 = input % 3 === 0;
  const multipleOf5 = input % 5 === 0;

  if (multipleOf3 && multipleOf5) {
    return "FizzBuzz";
  }

  if (multipleOf3) {
    return "Fizz";
  }

  if (multipleOf5) {
    return "Buzz";
  }

  return input;
}
