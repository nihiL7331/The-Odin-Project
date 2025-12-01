function add7(number) {
  return number + 7;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function lastLetter(str) {
  return str.charAt(str.length - 1);
}

console.log(add7(10));
console.log(multiply(3, 2));
console.log(capitalize("abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("aBcD"));
console.log(lastLetter("abcd"));
