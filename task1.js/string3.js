
var str = "Hello world \"samia\" samia samia ";
let newStr = str.replace(/samia/i, "faris");
let newStr2= str.replaceAll("samia", "faris");
console.log(newStr);
console.log(newStr2);

var str5 = "hello";
var str8="HeLLO"
console.log(str5.toUpperCase());
console.log(str5.toLowerCase());

var str6 = "ABCDEF"
console.log(str6.at(-1));
console.log(str6.charAt(-1));

console.log(str5.length);
console.log(str6.length);

var str9 = "  Hello World    ";
console.log(str9.trimEnd());
console.log(str9.trimStart());


console.log(str9.length);
console.log(str9);
var withoutSpace = str9.trim()
console.log((str9.trim()).length);


var yStr = "please locate where you locate";
console.log(yStr.indexOf("Locate"));
console.log(yStr.lastIndexOf("locate"));

console.log(yStr.search(/locate/i));

