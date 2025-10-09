const str0 = "Hello World";
console.log(str0.endsWith("World"));

const str1 = "filename.pdf";
console.log(str1.endsWith("pdf"));

const str2 = "https://example.com/";
console.log(str2.endsWith("/"));

function endsWithS(word) {
  return word.endsWith("s");
}

console.log(endsWithS("cats"));
console.log(endsWithS("dog"));

let str3 = "Javascript";
let result = str3.endsWith("Java", 4);
console.log(result);