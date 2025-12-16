
function hasPositiveNumber(arr) {
  return arr.some(num => num > 0);
}

function hasEvenNumber(arr) {
  return arr.some(num => num % 2 === 0);
}

function hasLongString(arr) {
  return arr.some(str => typeof str === 'string' && str.length > 5);
}

function hasFalsyValue(arr) {
  return arr.some(val => !val);
}

function isPrime(n) {
  if (n <= 1 || !Number.isInteger(n)) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function hasPrimeNumber(arr) {
  return arr.some(isPrime);
}

let arr1 = [10, 20, 30, 40, 50];
arr1.forEach(el => console.log(el));

arr1.forEach((el, i) => console.log("Index:", i, "Value:", el));

let sum = arr1.reduce((a, b) => a + b, 0);
console.log(sum);

let arr2 = ["apple", "banana", "cherry"];
arr2.forEach(str => console.log(str.toUpperCase()));

let people = [{name: "Alice"}, {name: "Bob"}];
people.forEach(person => console.log(person.name));


let nums = [1, 2, 3, 4];
let squares = nums.map(n => n * n);
console.log(squares);

let doubled = nums.map(n => n * 2);
console.log(doubled);

let strings = ["hello", "world", "js"];
let uppercased = strings.map(s => s.toUpperCase());
console.log(uppercased);

let people2 = [{name: "Alice", age: 25}, {name: "Bob", age: 30}];
let names = people.map(p => p.name);
console.log(names);

let plusTen = nums.map(n => n + 10);
console.log(plusTen);
