// 4-8) do...while loops

// 4. Print 1 to 5
let i = 1;
do {
    console.log("1-5 loop:", i);
    i++;
} while (i <= 5);

// 5. Even numbers from 2 to 10
let n = 2;
do {
    console.log("Evens 2–10:", n);
    n += 2;
} while (n <= 10);

// 6. 10 down to 1
let dec = 10;
do {
    console.log("10 to 1:", dec);
    dec--;
} while (dec >= 1);

// 7. Ask user until > 100
let num;
do  {
    num = parseFloat(prompt("Enter a number greater than 100:"));
} while (isNaN(num) || num <= 100);
console.log("You entered:", num);

// 8. Sum 1 to 10
let sum = 0,
    k = 1;
do {
    sum += k;
    k++;
} while (k <= 10);
console.log("Sum 1–10:", sum);

// 9-13) for...of loops

const nums = [3, 6, 9, 12];
for (const x of nums) {
    console.log("for…of element:", x);
}

const str = "Hello";
for (const ch of str) {
    console.log("for…of char:", ch);
}

let total = 0;
for (const x of nums) {
    total += x;
}
console.log("Total via for…of:", total);

for (const x of nums) {
    if (x % 2 === 0) console.log("for…of even:", x);
}

const names = ["Alice", "Bob", "Charlie"];
for (const name of names) {
    console.log("Name via for…of:", name);
}

// 14-18) for...in loops

const obj = {
    name: "Alice",
    age: 30,
    city: "Paris",
    profession: "Engineer",
};

for (const key in obj) {
    console.log("for…in key:", key);
}

for (const key in obj) {
    console.log("for…in value:", obj[key]);
}

let propCount = 0;
for (const key in obj) {
    propCount++;
}
console.log("Property count:", propCount);

const searchKey = "age";
let exists = false;
for (const key in obj) {
    if (key === searchKey) {
        exists = true;
        break;
    }
}
console.log(`Key "${searchKey}" exists?`, exists);

let keyList = "";
for (const key in obj) {
    keyList += key + ", ";
}
keyList = keyList.slice(0, -2);
console.log("All keys:", keyList);