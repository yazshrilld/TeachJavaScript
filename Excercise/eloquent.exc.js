// ///** EXCERCISE ONE -LOOPING A TRIANGLE**///
// //My Solution, solved within 3mins
// // let abc = ""
// // for (let counts = 1; abc.length < 7; counts++) {
// //   abc = abc + "#"
// //   console.log("Count: ", `${abc}: ${abc.length}`)
// // }
// //Eloquent Solution
// // for (let line = "#"; line.length < 8; line += "#")
// //   console.log(line);

// ///** EXCERCISE TWO -FIZZBUZZ**///
// //My Solution, solved within 23mins  I learnt that preference matters alot, the && operaors should be used before any qother operator
// // let abc = 1;
// // for (let counts = 0; counts < 100; counts++) {
// //   if (abc % 3 === 0 && abc % 5 === 0) {
// //     console.log(`FizzBuzz: ${abc} count`);
// //     abc += 1;
// //   } else if (abc % 3 === 0) {
// //     console.log(`Fizz: ${abc} count`);
// //     abc += 1;
// //   } else if (abc % 5 === 0) {
// //     console.log(`Buzz: ${abc} count`);
// //     abc += 1;
// //   } else {
// //     console.log(`${abc}: ${abc} count`);
// //     abc += 1;
// //   }
// // }
// //Eloquent Solution
// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }
