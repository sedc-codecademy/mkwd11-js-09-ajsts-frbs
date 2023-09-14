const { sum } = require("./index");

describe("METHOD sum", () => {
  it("should return a sum of 2 numbers, when called with 2 numbers", () => {
    const result = sum(1, 2);

    expect(result).toBe(3);
  });

  it("should return a sum even if called with one number", () => {
    const result = sum(1);

    expect(result).toBe(1);
  });

  it("should return a sum even if called with numbers as strings", () => {
    const result = sum("1", "2");

    expect(result).toBe(3);
  });

  it("should return a 0 when called with invalid strings", () => {
    const result = sum("a", "b");

    expect(result).toBe(0);
  });

  it.each([
    [1, 2, 3],
    [2, 2, 4],
    ["u", "ff", 0],
    [1, "2", 3],
    [false, undefined, 0],
    [4, null, 4],
  ])(
    "should return a sum, when number one is %i and number two is %i, sum to be %i",
    (num1, num2, result) => {
      const sumResult = sum(num1, num2);

      expect(sumResult).toBe(result);
    }
  );

  it.each`
    num1     | num2         | result
    ${1}     | ${2}         | ${3}
    ${2}     | ${2}         | ${4}
    ${"u"}   | ${"ff"}      | ${0}
    ${1}     | ${"2"}       | ${3}
    ${false} | ${undefined} | ${0}
    ${4}     | ${null}      | ${4}
  `(
    "should return a sum, when number one is %i and number two is %i, sum to be %i",
    ({ num1, num2, result }) => {
      const sumResult = sum(num1, num2);

      expect(sumResult).toBe(result);
    }
  );
});
