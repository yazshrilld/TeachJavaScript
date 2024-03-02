// alert("Enter Passcode")

// let theNumber = Number(prompt("Pick a Number"))
// console.log("Your number is the square root of " + theNumber * theNumber)

// console.log(`My a \nNew line`);
// console.log("This is an \n Old line");

// let yazNumss = 0;
// while (yazNumss < 12) {
//   // console.log({ yazNumss });
//   yazNumss = yazNumss + 2;
// }

// let yazNumsses = 0;
// if (yazNumsses <= 12) {
//   // console.log({ yazNumsses });
//   yazNumsses = yazNumsses + 2;
// }

// let finalNumber = 1024;
// let yazzNums = 2;
// while (yazzNums <= finalNumber) {
//   // console.log({ yazzNums });
//   yazzNums = yazzNums * 2;
// }

// let results = 1;
// let counter = 0;
// while (counter < 10) {
//   results = results * 2;
//   counter = counter + 1;
// }
// console.log({results})
/////////////////////////************ */   THE LOOPING SYSTEM IN JAVASCRIPT  */************////////////////////
// let yaziidName;
// do {
// yaziidName = prompt("Who are you?");
// } while (!yaziidName);
// console.log(yaziidName);

// for (let number = 0; number <= 12; number = number + 3) {
//   // console.log("Number: ", number)
// }

// let myResult = 1;
// for (let counter = 0; counter < 10; myResult = myResult * 2) {
//   counter = counter + 1;
// }
// console.log("My Result: ", myResult);

// let result = 1;
// for (let counter = 0; counter < 10; counter = counter + 1) {
//   result = result * 2;
// }
// console.log("Result: ", result);
// → 1
// for ( let counter = 20; ; counter = counter + 1 ) {
//     if ( counter % 8 == 0 ) {
//         console.log(counter)
//         break;
//     }
// }

// for (let number = 0; number <= 12; number +=2) {
//   console.log("Number: ", number)
//   console.log("Check: ", 1 + 2)
// }

// number = number + 1 ;  number +=1;  number++ ;

// switch (prompt("What is the weather like?")) {
//   case "rainy":
//     console.log("Remember to bring an umbrella.");
//     break;
//   case "sunny":
//     console.log("Dress lightly.");
//   case "cloudy":
//     console.log("Go outside.");
//     break;
//   default:
//     console.log("Unknown weather type!");
//     break;
// }

// let abc = "#"
// console.log("Check: ", abc + abc + abc)

//
// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }

// let abc = "";
// for (let counts = 1; abc.length < 64; counts++) {
//   if ( abc.length % 2 === 0 ) {
//     abc = abc + " "
//   }
//   if (abc.length % 2 !== 0) {
//     abc = abc + "$"
//   }
//   abc = abc + "#"
//   console.log(`${abc}: ${abc.length}`)
// }

// let result = 1;
// for (let counter = 0; counter < 6; counter++) {
//   result *= 2;
// }
// console.log({ result });

// let results = 1;
// let counter = 0;
// while (counter < 10) {
//   results = results * 2;
//   counter = counter + 1;
// }
// console.log({results})

// let abc = "";
// for (let counts = 1; abc.length < 64; counts++) {
//   if (counts % 2 === 0 && abc.length === 64) {
//     abc = abc + " ";
//     if (abc.length > 5) {
//       abc = abc + "$";
//       console.log(`${abc}\n`);
//     } else {
//       console.log("Count: ", `${abc}: ${abc.length}`);
//     }
//     console.log("first: ", abc.length);
//   } else if (counts % 2 !== 0) {
//     abc = abc + "#";
//     // console.log(`${abc}\n`);
//     console.log("Count: ", `${abc}: ${abc.length}`);
//   }
// }

/////////////////////////************ */   CHAPTER -3: LEARNING FUNCTIONS  */************////////////////////

// const square = function (x) {
//   return x * x;
// };

// console.log("Square: ", square(5));

// function exam() {
//   const YazidMusa = "A name of a Great homo sapien born in 1964";
//   console.log("Great Man: ", YazidMusa);
// }

// exam();

// let x = 10;
// if (true) {
// let y = 20;
// var z = 30;
// x = 70
// console.log(x + y + z);
// }

// const halve = function (n) {
//   return n / 2;
// };
// let n = 10;
// console.log(halve(100));
// // → 50
// console.log(n);
// // → 10

// const power = (a, exp = 2) => {
//   let res = 1;
//   for (let num = 0; num < exp; num++) {
//     res = res * a;
//   }
//   console.log("Resultssss: ", res);
//   return res;
// };

// power(2);
// power(2, 6);

//example -1, we are testing the function parameter and scoping, local and global scope, and this is also closure
const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor; //this is also an example of closure, we can access factor from inside the ingredient function
    if (ingredientAmount > 1) {
      unit += "s";
    }
    // console.log(`${ingredientAmount} ${unit} ${name}`)
  };

  ingredient(1, "can", "chickpeas");
  ingredient(0.2, "cup", "tahini");
  ingredient(1, "cup", "lemon jiuce");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
// hummus(2)

//example -2, we are testing the function bindings
let launchMissiles = function () {
  // console.log("A tag")
};
if (true) {
  launchMissiles = function () {
    console.log("A name");
  };
}
// launchMissiles()

//example -3, we are testing the parameter and arguements in JavaScript
function deleted(a, b) {
  if (b === undefined) {
    // console.log(deleted(10))
  } else {
    return a - b;
  }
}
// console.log(deleted(10, 30))

//example -4, we are testing the parameter and arguements in JavaScript
const power = (a, exp = 2) => {
  let result = 1;
  for (let ab = 0; ab < exp; ab++) {
    result = result * a;
  }
  // console.log("Result: ", result)
};
// power(5)
// power(9, 5)

let x = 5

const parentFunction = () => {
  let myValue = 2

  // console.log(x)
  // console.log(myValue)

  const childFunction = () => {
    // console.log(x += 5)
    // console.log(myValue += 5)
  }

 return childFunction
}

const result = parentFunction()
result()
result()
result()
// console.log(x)

