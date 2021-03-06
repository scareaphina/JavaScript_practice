//switch and case

let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}


// can do the same with if/else

if (role === "guest") console.log("Guest User");
else if (role === "moderator") console.log("Moderator");
else console.log("Unknown User");



// for loops

// for (initial expression, condition, increment expresion);
// executes as long as the condition is true

for (let i = 0; i <= 5; i++) {
  console.log("Hello World!", i);
}

for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}

// while loops
// while (condition) {statement; increment;}

let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// do-while loop
// always iterates at least once, even if the conditional statement at the end evaluates to false

let i = 9;

do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);

// for-in

const person = {
  name: "Mosh",
  age: 30,
};

for (let key in person)
console.log(key, person[key]);



const colors = ["red", "green", "blue"];

for (let index in colors)
console.log(index, colors[index]);

// // dot notation
// person.name
//
// // bracket notation - when we don't know ahead of time what property we will want to access
// person["name"]
