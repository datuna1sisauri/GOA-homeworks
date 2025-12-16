
const strings = ["Banana", "Apple", "Avocado", "Orange"];
console.log(strings.find(str => str.startsWith("A")));

const users = [{name: "Alice", age: 28}, {name: "Bob", age: 35}, {name: "Charlie", age: 22}];
console.log(users.find(user => user.age > 30));

const words = ["hi", "hello", "amazing", "code"];
console.log(words.find(word => word.length > 5));

const products = [{name: "Pen", price: 10}, {name: "Notebook", price: 25}, {name: "Eraser", price: 5}];
console.log(products.find(product => product.price < 20));

const students = [{name: "Anna", grade: "B"}, {name: "Mark", grade: "A"}, {name: "Sara", grade: "C"}];
console.log(students.find(student => student.grade === "A"));


const nums1 = [3, 5, -2, 8];
console.log(nums1.findIndex(n => n < 0));

const actions = ["run", "jumping", "sit", "standing"];
console.log(actions.findIndex(str => str.endsWith("ing")));

const userList = [{name: "Tom", isActive: false}, {name: "Jane", isActive: true}, {name: "Sam", isActive: false}];
console.log(userList.findIndex(user => user.isActive));

const nums2 = [7, 13, 20, 25];
console.log(nums2.findIndex(n => n % 10 === 0));

const fruits = ["apple", "grape", "peach", "mango"];
console.log(fruits.findIndex(fruit => fruit.length === 5));


const nums3 = [20, 150, 90, 200, 50];
console.log([...nums3].reverse().find(n => n > 100));

const phrases = ["code", "logic", "test", "data", "tree"];
console.log([...phrases].reverse().find(str => str.includes("e")));

const userAges = [{age: 30}, {age: 19}, {age: 24}, {age: 28}];
console.log([...userAges].reverse().find(user => user.age < 25));

const nums4 = [2, 4, 6, 9, 10];
console.log([...nums4].reverse().find(n => n % 2 !== 0));

const vocab = ["apple", "sky", "orange", "grape", "ice"];
console.log([...vocab].reverse().find(word => /^[aeiou]/i.test(word)));


const nums5 = [10, 60, 45, 55, 30];
console.log(nums5.lastIndexOf([...nums5].reverse().find(n => n > 50)));

const strList = ["Start", "Begin", "Simple", "Stop", "Stand"];
console.log(strList.lastIndexOf([...strList].reverse().find(str => str.startsWith("S"))));

const users2 = [
  {name: "Anna", isActive: true},
  {name: "Ben", isActive: false},
  {name: "Cara", isActive: true}
];
console.log(users2.lastIndexOf([...users2].reverse().find(user => user.isActive)));

const nums6 = [3, 6, 10, 15, 8];
console.log(nums6.lastIndexOf([...nums6].reverse().find(n => n % 3 === 0)));

const wordList = ["love", "time", "code", "apple", "hi"];
console.log(wordList.lastIndexOf([...wordList].reverse().find(word => word.length === 4)));