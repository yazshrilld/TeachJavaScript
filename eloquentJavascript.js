// alert("Enter Passcode")

// let theNumber = Number(prompt("Pick a Number"))
// console.log("Your number is the square root of " + theNumber * theNumber)

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
// result = result * 2;
// }
// console.log("Result: ", result)
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

switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
