const containsDog = (sentence) => sentence.includes("dog");
console.log(containsDog("The quick brown fox jumps over the lazy dog"));

const isEmail = (str) => str.includes("@");
console.log(isEmail("example@domain.com"));
console.log(isEmail("example.com"));

const containsJava = (str) => str.includes("Java");
console.log(containsJava("JavaScript"));

const containsApple = (str) => str.includes("apple");
console.log(containsApple("pineapple"));

const containsNot = (sentence) => sentence.includes("not");
console.log(containsNot("This is not a test."));

const indexOfFox = (sentence) => sentence.indexOf("fox");
console.log(indexOfFox("The quick brown fox jumps over the lazy dog"));

const indexOfO = (str) => str.indexOf("o");
console.log(indexOfO("Hello world"));

const indexOf2025 = (str) => str.indexOf("2025");
console.log(indexOf2025("Happy New Year 2025!"));

const indexOfIs = (str) => str.indexOf("is");
console.log(indexOfIs("This is a simple test"));

const findAtIndex = (str) => str.indexOf("@");
console.log(findAtIndex("example@domain.com"));
console.log(findAtIndex("example.com"));

const lastIndexOfO = (str) => str.lastIndexOf("o");
console.log(lastIndexOfO("Hello world"));

const lastIndexOfA = (str) => str.lastIndexOf("a");
console.log(lastIndexOfA("banana"));

const lastIndexOfIs = (str) => str.lastIndexOf("is");
console.log(lastIndexOfIs("This is a test, and it is simple"));

const lastIndexOfDog = (str) => str.lastIndexOf("dog");
console.log(lastIndexOfDog("dog dog dog"));

const lastIndexOf2025 = (str) => str.lastIndexOf("2025");
console.log(lastIndexOf2025("Happy 2025, welcome 2025!"));

const repeatHa = () => "ha".repeat(3);
console.log(repeatHa());

const repeatStars = () => "*".repeat(10);
console.log(repeatStars());

const repeatDashedLine = () => "---".repeat(5);
console.log(repeatDashedLine());

const repeatWord = (word, n) => word.repeat(n);
console.log(repeatWord("apple", 3));

const repeatHello = () => "Hello ".repeat(4);
console.log(repeatHello());

const replaceFirstCat = (str) => str.replace("cat", "dog");
console.log(replaceFirstCat("The cat chased the cat"));

const replaceJavaWithType = (str) => str.replace("Java", "Type");
console.log(replaceJavaWithType("JavaScript is cool"));

const replaceSpaceWithHyphen = (str) => str.replace(" ", "-");
console.log(replaceSpaceWithHyphen("This is a test"));

const replaceAWithAt = (str) => str.replace("a", "@");
console.log(replaceAWithAt("banana"));

const replace2024With2025 = (str) => str.replace("2024", "2025");
console.log(replace2024With2025("Happy New Year 2024!"));

const replaceAllCatsWithDogs = (str) => str.replace(/cat/g, "dog");
console.log(
  replaceAllCatsWithDogs("The cat chased another cat and found a cat")
);

const replaceSpacesWithHyphens = (str) => str.replace(/ /g, "-");
console.log(replaceSpacesWithHyphens("I love JavaScript so much"));

const replaceAllAWithAt = (str) => str.replace(/a/g, "@");
console.log(replaceAllAWithAt("banana"));

const replaceAll2024With2025 = (str) => str.replace(/2024/g, "2025");
console.log(replaceAll2024With2025("2024 was great, but 2024 is over"));

const replaceDotsWithExclamations = (str) => str.replace(/\./g, "!");
console.log(replaceDotsWithExclamations("Wait. Stop. Go. Run!"));

const extractWorld = (str) => str.slice(6, 11);
console.log(extractWorld("Hello world"));

const first4Chars = (str) => str.slice(0, 4);
console.log(first4Chars("JavaScript"));

const removeFirstChar = (str) => str.slice(1);
console.log(removeFirstChar("Python"));

const last3Chars = (str) => str.slice(-3);
console.log(last3Chars("Banana"));

const firstHalf = (str) => str.slice(0, Math.floor(str.length / 2));
console.log(firstHalf("JavaScript"));