let pos = 42;
let absPos = Math.abs(pos);

let neg = -42;
let absNeg = Math.abs(neg);

let nums = [1, -2, 3, -4];
let absArray = nums.map(Math.abs);

let diff = Math.abs(10 - 25);

let distanceFromZero = Math.abs(-7);


let ceilPos = Math.ceil(3.1);

let ceilNeg = Math.ceil(-3.1);

let decimals = [1.2, 2.5, 3.7];
let ceilArray = decimals.map(Math.ceil);

let ceilDivision = Math.ceil(7 / 2);

let price = 19.99;
let tax = 0.08;
let totalCeil = Math.ceil(price * (1 + tax));


let floorPos = Math.floor(5.9);

let floorNeg = Math.floor(-5.9);

let floorArray = decimals.map(Math.floor);

let floorDivision = Math.floor(9 / 2);

let discountPrice = 49.99;
let discount = 0.15;
let totalFloor = Math.floor(discountPrice * (1 - discount));


let roundPos = Math.round(2.6);

let roundNeg = Math.round(-2.6);

let roundArray = decimals.map(Math.round);

let roundDivision = Math.round(10 / 3);

let taxedPrice = 14.95;
let totalRound = Math.round(taxedPrice * (1 + tax));


let maxTwo = Math.max(4, 9);

let maxThree = Math.max(4, 9, 2);

let someNums = [2, 5, 8, 1];
let manualMax = someNums.reduce((a, b) => a > b ? a : b);

let maxPos = Math.max(...[3, 7, 2, 9]);

let mixNums = [-5, 3, -1, 10, 0];
let maxMixed = Math.max(...mixNums);


let minTwo = Math.min(4, 9);

let minThree = Math.min(4, 9, 2);

let manualMin = someNums.reduce((a, b) => a < b ? a : b);

let minPos = Math.min(...[3, 7, 2, 9]);

let minMixed = Math.min(...mixNums);