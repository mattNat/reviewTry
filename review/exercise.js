// Define a function called print that takes 1 argument — toPrint — and logs toPrint to the console. Now, invoke that function. (WD Lesson 2.2)

function print(toPrint) {
  console.log('The message is: ' + toPrint);
}

print('Hello Jon!');

// Write a function that accepts 1 integer as an argument. The function should return true if the number is divisible by either 3 or 5, and return false otherwise. (WD Lesson 2.3)

function test(num) {
  if (num % 3 === 0 || num % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

test(3)
test(7)
console.log(test(3));
console.log(test(7));

// Write a function that accepts an array of test scores as an argument. The function should return the number of test scores that are an 80 or higher. (WD Lesson 2.4)

function testScore(array) {
  let count = 0;
  array.forEach((element, index) => {
    // console.log(`${index}: ${element}`);
    if (element >= 80) {
      count++;
    }
  })
  return count;
}

let cool = [84, 70, 99, 69, 95];
testScore(cool);
console.log(testScore(cool));

// Write a function called makeOrder. It should take a table number, an array of order items, and an order status as arguments. It should return an object with the keys tableNumber, order, and status, and their associated values. (WD Lesson 2.6)
function makeOrder(tableNum, array, status) {
  return {
    tableNum: tableNum,
    order: array,
    status: status
  }
}
console.log(makeOrder(4, ['paella', 'fish', 'wine'], 'not cooked yet'));

// You've just been given a design and wireframe for a new web page. Share your screen and show me how you would go about setting this project up with Git and GitHub. (Git Lesson 2, 3)

// https://www.freecodecamp.org/challenges/get-set-for-our-algorithm-challenges
// reverse string function
function reverseString(str) {
  // str = str.split().reverse().join();
  return str.split('').reverse().join('');
}
console.log(reverseString('hello'));
reverseString('hello');

// factorialize function
function factorialize(num) {
  let count = 1;
  for (let i = 1; i <= num; i++) {
    count *= i;
  }
  return count;
}
console.log(factorialize(5));
factorialize(5);

// palindrome check function
function palindrome(str) {
  str = str.toLowerCase().replace(/\W/g, '').replace(/[^0-9a-z]/gi, '');
  if (str === str.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome('_eye'));

// find longest word in string
function findLongestWord(str) {
  let test = str.split(' ')
  let long = [{
    len: 0,
    word: null
  }];
  // console.log(test.length);
  for (let i = 0; i < test.length; i++) {
    const element = test[i];
    // console.log(element);
    if (element.length > long.len) {
      long.len = element.length;
      long.word = element;
    }
  }
  return long.len;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
findLongestWord("The quick brown fox jumped over the lazy dog");

// make em cap
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
function titleCase(str) {
  let test = str.split(' ')
  console.log(test);
  return str;
}

titleCase("I'm a little tea pot");