// ------------------------
// 2-6: String Splitting
// ------------------------

const dateParts = "2025-08-17".split("-");
console.log("Date parts:", dateParts); // ["2025", "08", "17"]

const words = "one two three four five".split(" ");
console.log("Words:", words); // ["one", "two", "three", "four", "five"]

const person = "John,Doe,25,Developer".split(",");
console.log("Person:", person); // ["John", "Doe", "25", "Developer"]

const chars = "abc".split("");
console.log("Characters:", chars); // ["a", "b", "c"]

const sentence = "JavaScript is fun".split(" ");
console.log("Second word:", sentence[1]); // "is"

// ------------------------
// 7-11: startsWith Checks
// ------------------------

function startsWithHello(str) {
  return str.startsWith("Hello");
}
console.log("Starts with Hello:", startsWithHello("Hello world")); // true

function checkImageFile(filename) {
  return filename.startsWith("img_") ? "Image file" : "Not an image file";
}
console.log("File check:", checkImageFile("img_photo.png")); // "Image file"

function startsWithOnceUpon(str) {
  return str.startsWith("Once upon");
}
console.log("Starts with Once upon:", startsWithOnceUpon("Once upon a time")); // true

function startsWithAt(str, subStr, position) {
  return str.startsWith(subStr, position);
}
console.log("Starts at position:", startsWithAt("JavaScript is fun", "is", 11)); // true

function countDoctors(names) {
  return names.filter((name) => name.startsWith("Dr.")).length;
}
console.log(
  "Doctor count:",
  countDoctors(["Dr. Smith", "Mr. Adams", "Dr. Brown"])
); // 2

// ------------------------
// 12-16: Trimming Strings
// ------------------------

function trimString(str) {
  return str.trim();
}
console.log("Trimmed:", trimString("  Hello World  ")); // "Hello World"

function trimStartOnly(str) {
  return str.trimStart();
}
console.log("Trim start:", trimStartOnly("   Hello")); // "Hello"

function trimEndOnly(str) {
  return str.trimEnd();
}
console.log("Trim end:", trimEndOnly("Hello   ")); // "Hello"

function cleanUsernames(usernames) {
  return usernames.map((name) => name.trim());
}
console.log(
  "Clean usernames:",
  cleanUsernames(["  alice  ", " bob", "charlie  "])
); // ["alice", "bob", "charlie"]

function isInputEmpty(input) {
  return input.trim() === "";
}
console.log("Is input empty:", isInputEmpty("     ")); // true

// ------------------------
// 17-21: Array Validations
// ------------------------

function allPassed(students) {
  return students.every((student) => student.score >= 50);
}
console.log(
  "All passed:",
  allPassed([
    { name: "Alice", score: 60 },
    { name: "Bob", score: 70 },
  ])
); // true

function allEven(numbers) {
  return numbers.every((num) => num % 2 === 0);
}
console.log("All even:", allEven([2, 4, 6])); // true

function allValidEmails(emails) {
  return emails.every((email) => email.includes("@"));
}
console.log(
  "Valid emails:",
  allValidEmails(["test@example.com", "hello@world.com"])
); // true

function allAdults(ages) {
  return ages.every((age) => age >= 18);
}
console.log("All adults:", allAdults([19, 25, 30])); // true

function allPricesUnder100(prices) {
  return prices.every((price) => price < 100);
}
console.log("Prices under 100:", allPricesUnder100([99, 20, 50])); // true