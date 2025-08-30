function printAllArguments(...args) {
    console.log("All arguments:");
    for (let arg of args) {
        console.log(arg);
    }
}
printAllArguments(1, "hello", true, 42);

function countArguments(...args) {
    console.log("Number of arguments:", args.length);
}
countArguments(1, 2, 3, "test");

function sumNumericArguments(...args) {
    let sum = 0;
    for (let arg of args) {
        if (typeof arg === "number") {
        sum += arg;
        }
    }
    console.log("Sum of numeric arguments:", sum);
}
sumNumericArguments(10, "hello", 20, true, 30);

function printUntilZero(...args) {
    for (let arg of args) {
        if (arg === 0) {
        console.log("Found 0 — stopping.");
        break;
        }
        console.log(arg);
    }
}
printUntilZero(3, 5, 7, 0, 9);

function printOnlyNumbers(...args) {
    for (let arg of args) {
        if (typeof arg === "string") {
        continue;
        }
        console.log(arg);
    }
}
printOnlyNumbers(1, "skip", 2, "this", 3);

const multiply = function (x, y) {
  return x * y;
};
console.log("Multiplication:", multiply(5, 4));

setInterval(function () {
    console.log("Logging every 2 seconds...");
}, 2000);

document.getElementById("alertBtn").addEventListener("click", function () {
    alert("Button clicked!");
});

(function () {
    console.log("Hello, world!");
})();

(function (num) {
  console.log("Square:", num * num);
})(6);

(function (arr) {
    let sum = 0;
    for (let n of arr) {
        sum += n;
    }
    console.log("Sum of array:", sum);
})([1, 2, 3, 4, 5]);

function localScopeExample() {
    let localVar = "I'm local";
    console.log(localVar);
}
localScopeExample();

function outer() {
    let count = 0;
    console.log("Before inner:", count);

    function inner() {
        count += 5;
    }

    inner();
    console.log("After inner:", count);
}
outer();

function scopeTest() {
    if (true) {
        var a = 1;
        let b = 2;
        const c = 3;
        console.log("Inside block:", a, b, c);
    }

    console.log("Outside block, var:", a);
}
scopeTest();