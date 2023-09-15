function sum(num1, num2) {
  if (!num1) {
    num1 = 0;
  }

  if (!num2) {
    num2 = 0;
  }

  if (typeof num1 === "string") {
    num1 = Number(num1) || 0;
  }

  if (typeof num2 === "string") {
    num2 = Number(num2) || 0;
  }

  return num1 + num2;
}

module.exports = { sum };
