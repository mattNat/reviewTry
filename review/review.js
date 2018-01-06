let message = 'hello';
let willPass = true;
let paella = 900;
let x = 3;

const pi = 3.1416;


if (x === 1) {
  // do things here
} else if (x === 2) {
  // do some other things here
} else {
  // do this
}

// for loop
for (let i = 0; i < 5; i++) {
  console.log('i is currently: ' + i);
}

// while loop
let i = 0;

while (i < 10) {
  console.log(`i is: ${i}`);
  i++;
}

// functions
function helloWorld() {
  console.log("Hello World");
}

helloWorld();

// function takes an argument and prints to console
const hey = 'There is no cow level!';

function printMsg(msg) {
  console.log('You inputted: ' + msg);
}
printMsg(hey);

// array
const myArray = ["apple", "orange", "pear"];

// myArray.forEach((element, index) => console.log(`element ${index}: ${element}`));

// objects
const myObj = {
  fruit: "apple",
  drink: "water",
  dessert: "cookie"
};

// for (let key in myObj) {
//   console.log(`${key}: ${myObj[key]}`);
// }

Object.keys(myObj).forEach(key => console.log(`${key}: ${myObj[key]}`));

// advanced js
const myData = [
  {
    name: "Tom",
    age: 22,
    favoriteFood: ["pizza", "paella", "pasta"]
  },
  {
    name: "Jane",
    age: 42,
    favoriteFood: ["pizza", "paella", "pasta"]
  },
  {
    name: "Fred",
    age: 34,
    favoriteFood: ["pizza", "paella", "pasta"]
  }
];

myData.forEach((item, index) => {
  // console.log(`${item}: ${index}`);
  Object.keys(item).forEach(key =>
    console.log(`myData[${index}][${key}] is ${myData[index][1]}`));
})

console.log(myData[1].favoriteFood);