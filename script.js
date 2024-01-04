console.log('Hey there')
document.getElementById("demo").innerHTML="Hello " + "Dolly!";
// console.log(test)

let age=30;
let age1=age;

age=31;

console.log(`age=${age} age1=${age1}`);
let txt = "I can eat bananas all day";
let x = txt.slice(9, 17);
console.log(x)

let char='Hello';
console.log(char.charAt(0));
console.log(char.charCodeAt(2));//doesn't support negative number
console.log(char.at(-4));
console.log(char.at(2));

//Property access
//It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = "A" gives no error (but does not work!)
let newChar='Welcome';
console.log(newChar[0]);

let y='hey';
y[0]='A';
console.log(y)// Gives no error, but does not work


//There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

let words='Apple,Orange,Banana,Kiwi';
// let word=words.slice(0,7);
// console.log("word",word);
// let wordNew=words.slice(7);
// console.log(wordNew)


//Unlike other programming languages, JavaScript Does not support Function Overloading.
function sliceWords(direct,startPoint,endPoint){
    console.log("direct",direct)
    console.log("startPoint",startPoint)
    console.log("endPoint",endPoint)
    console.log("from direct ",words.slice(direct));
    console.log("from start and end",words.slice(startPoint,endPoint))
    console.log(words.slice(startPoint,endPoint))
}
sliceWords(6);
sliceWords(-6);
sliceWords(0,7,9);

// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);

let str1 = "Apple, Banana, Kiwi";
let part1 = str.substr(7);
console.log(part1)


let fruits="apple,banana,orange";
let fruitArr=fruits.split("a");
console.log(fruitArr);