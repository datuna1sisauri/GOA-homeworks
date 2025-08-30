const output = document.getElementById("output");

function log(text) {
    output.textContent += text + "\n";
}

// 4–8: Using break
log("=== Tasks 4–8 (break) ===");

for (let i = 1; i <= 20; i++) {
    if (i === 13) break;
    log(i);
}

const colors = ["red", "green", "yellow", "blue", "purple"];
for (let color of colors) {
    if (color === "blue") break;
    log(color);
}

for (let i = 1; i <= 50; i++) {
    if (i % 4 === 0 && i % 5 === 0) break;
    log(i);
}

const word1 = "elephant";
for (let letter of word1) {
    if (letter === "a") break;
    log(letter);
}

let sum = 0;
let n = 1;
while (true) {
    sum += n;
    if (sum >= 100) break;
    n++;
}
log("Final sum: " + sum);

// 9–13: Using continue
log("\n=== Tasks 9–13 (continue) ===");

for (let i = 1; i <= 20; i++) {
    if (i === 13) continue;
    log(i);
}

const fruits = ["apple", "banana", "mango", "orange"];
for (let fruit of fruits) {
    if (fruit === "banana") continue;
    log(fruit);
}

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) continue;
    log(i);
}

const word2 = "developer";
for (let letter of word2) {
    if (letter === "e") continue;
    log(letter);
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) continue;
    log(i);
}

// 14–18: Arrow functions
log("\n=== Tasks 14–18 (Arrow Functions) ===");

const add = (a, b) => a + b;
log("Add: " + add(5, 3));

const greet = (name) => `Hello, ${name}!`;
log(greet("John"));

const doubleArray = (arr) => arr.map((num) => num * 2);
log("Doubled: " + doubleArray([1, 2, 3]).join(", "));

const isEven = (num) => num % 2 === 0;
log("Is 4 even? " + isEven(4));

const getLength = (str) => str.length;
log("Length of 'hello': " + getLength("hello"));