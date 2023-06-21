const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//Every

//Determine if every number is greater than or equal to 0
function isBigEnough(value){
    return function(element){
        return(element >= value);
    }
}
var filtered = [1,2,3,4,5,6,7,8,9,10,0].filter(isBigEnough(0)); 

console.log(filtered)
 
//determine if every word shorter than 8 characters

function wordWithEight(words){
    return words.filter(word => word.length <8);
}

const result = wordWithEight(panagram); 
console.log(result);

//Filter

//filter the array for numbers less than 4
function lessThanFour(value){
    return function(element){
        return(element <= value);
    }
}
var filtered =[1,2,3,4,5,6,7,8,9,10,0].filter(lessThanFour(4));
console.log(filtered);

//filter words that have an even length

function wordWithEight(words){
    return words.filter(word => word.length % 5 === 0);
}

const result = wordWithEight(panagram); 
console.log(result);
 
//Find
//Find the first value divisible by 5

function divisibleByFive(numbers){
    return numbers.filter(number => number % 5 === 0);
}
const result = divisibleByFive(nums);

console.log(result);

//find the first word that is longer than 5 characters

function wordWithFive(words){
    return words.filter(word => word.length >= 5);
}

const result = wordWithFive(panagram); 
console.log(result);

//Find Index
//find the index of the first number that is divisible by 3
function divisibleByFive(numbers){
    return numbers.find(number => number %3 === 0);
}
const result = divisibleByFive(nums);
console.log(result);


//find the index of the first word that is less than 2 characters long
let index = -1; 

for (let i=0; i< panagram.length; i++){
    if (panagram[i].length < 2){
        index =i;
        break;
    }
}

console.log(index);


// For Each
// console.log each value of the nums array multiplied by 3
const multiplyNums = nums.map(num => num * 3);
console.log(multiplyNums)


// console.log each word with an exclamation point at the end of it
const exclaimPanagram = panagram.map(word => word + '!')
console.log(exclaimPanagram)

// Thought Questions
// What happened to the original array?



// Can you store the values from a forEachmethod in a new array?
//yes you can. 
const multiplyNums = nums.map(num => num * 3);
console.log(multiplyNums) //spread syntax(?)
const newArray = [...multiplyNums]



// Map
// make a new array of each number multiplied by 100
const multpNum =nums.map(number => number * 100)
console.log(multpNum)

// make a new array of all the words in all uppercase
const upperCase = panagram.map(word => word.toUpperCase());
console.log(upperCase);


// Thought Questions
// What happened to the original array?

// Can you store the values from a mapmethod in a new array?




// Some
// Find out if some numbers are divisible by 7
const multNums = nums.map(num => num % 7 ===0);
console.log(multNums)


// Find out if some words have the letter a in them
const theLetter = panagram.some(word => word.includes('a'));
console.log(theLetter);