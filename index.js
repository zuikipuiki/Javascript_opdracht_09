// 1. Checking if number is big

let checkNumber = function(number) {
 let value = a
if (value > 100) {
 return true;
}
 return false;
};

console.log(checkNumber(a = "159"));
console.log(checkNumber(a = "19"));
console.log(checkNumber(a = "109"));
console.log(checkNumber(a = "100"));
console.log(checkNumber(a = "99"));


// Bouncer at a club

// Checking how many ppl can enter
let peopleNumber = function (peopleEntered) {
let amount = peopleEntered
if (amount > 100) {
 return "The club is full now. Come back other time"
}
return "Come in, you are still Welcome!"
};

//console.log(peopleNumber(amount = "158"));
//console.log(peopleNumber(amount = "58"));

// 2. Checking the age 
let age = function (peopleAge) {
 let ageNumber = peopleAge
 if (ageNumber >=  18) {
  return "Welcome dear guest"
 }
 return "This club is only for adults."
};

console.log(age(peopleAge = "17"), peopleNumber(amount = "98"));
//console.log(age(peopleAge = "27"));
//console.log(age(peopleAge = "18"));

// Hoe krijg ik een statment voor jongeren onder 18 dat ongeacht het peopleNumer mogen ze aslnog niet in?


// 3. Calculating the Average of 5 numbers


let numbers = [12, 15, 16, 20, 45]
let total = numbers.reduce((sum, current) => sum + current, 0);
let averageNumber = total/numbers.length;

console.log(averageNumber);
console.log(Math.round(averageNumber));

