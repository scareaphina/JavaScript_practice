//playing around with alerts and simple string fiddling

var name = prompt("What is your name?");

var firstChar = name.slice(0,1);

var nameIntCaps = firstChar.toUpperCase();

var restOfName = name.slice(1,name.length);

var nameFullLower = restOfName.toLowerCase();

var newName = nameIntCaps + nameFullLower;

alert("Hello " + newName + "!");

// a simple tweet character counter

var tweet = prompt("Compose your tweet!");

var remaining = 140 - tweet.length;

var tweetUnder140 = tweet.slice(0,140);

alert(tweetUnder140);

alert("You have written " + tweet.length + " characters. You have " + remaining + " characters left.");

// number stuff

var dogAge = prompt("How old is your dog?");

var humanage = ((dogAge - 2) * 4) + 21;

alert ("Your dog is " + humanage + " in human years.")

// random little example of using functions in other functions

function getMilk(money, costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

console.log("Buy " + calcBottles(money, costPerBottle) + " bottles of milk.");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

return calcChange(money, 1.5);

}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle)
return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Hello Master, here is your $" + getMilk(10, 3) + " change. And your milk.");

// an itty BMI calculator

function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / Math.pow(height, 2));
  return "Your BMI is " + bmi + ".";
}

bmiCalculator(65, 1.8);

// pseudorandom number generator

var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

// using random numbers to make a little love tester

var person1 = prompt("Please enter your name.");
var person2 = prompt("Please enter the name of your crush.");

var loveTester = Math.random() * 100;
loveScore = Math.floor(loveTester) + 1;

if (loveScore > 90) {
  alert(person1 + ", your love score with " + person2 + " is " + loveScore + "%!!"
 + " You love each other as much as Kanye loves Kanye!")
} else {
  alert(person1 + ", your love score with " + person2 + " is " + loveScore + "%")
}