// function sum_100() {
//   var sum = 0;
//   var num = 1;
//   while (num <= 2) {
//     // console.log("Sum: ", sum)
//     // console.log("Num: ", num)
//     sum += num;
//     num++;
//   }
//   // return console.log("Total Sum: ", sum);
// }

// sum_100();

// function calcYaz() {
//   let yaznumss = 0;
//   while (yaznumss < 12) {
//     // console.log("Yaz: ", yaznumss)
//     yaznumss += 2;
//   }
// }

// calcYaz();

// function padIt(str, n) {
//   while (n > 0) {
//     console.log("Check N_1: ", n);

//     if (n % 2 === 0) {
//       str = str + "*";
//       console.log("Check_str_Even: ", str);
//     } else {
//       str = "*" + str;
//       console.log("Check_str_Odd: ", str);
//     }
//     console.log("Check N_2: ", n);
//     n--;
//     console.log("Check N_3: ", n);
//   }
//   console.log("Check N_final: ", n);
//   return console.log("Final String: ", str);
// }

// padIt("a", 1);
// padIt("a", 2);
// padIt("a", 3);
// padIt("a", 4);
// padIt("a", 5);

// function pickIt(arr) {
//   let odd = [];
//   let even = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       even.push(arr[i]);
//     } else {
//       odd.push(arr[i]);
//     }
//   }
//   console.log([odd, even])
//   return [odd, even];
// }


// pickIt([1, 2]);
// pickIt([1, 2, 3]);
// pickIt([3, 2, 1]);
// pickIt([10,20,30])

function myObj(objc) {
  for(let myValue in objc) {
    // console.log(myValue)
  }
}

function myObjc(objc) {
  for(let myValue in objc) {
    // console.log(objc[myValue])
  }
}

function myObjce(objc) {
  for(let myValue of objc) {
    // console.log("Valsx: ", myValue)
  }
}

function showArrayValues(arr){
  for (var value of arr){
    // console.log("Vals: ", value);
  }
}

var arr=["one","two","three"];
showArrayValues(arr)

let newObjects = {
  shape: "figure-8",
  age: 26,
  love: true,
  Godly: "true",
}

let newArrayss = ["shape","figure-8","age",26,"love",true,"Godly","true",100]

// myObj(newObjects);
myObjce(newArrayss);

let  mysnum=25;
var a=mysnum.toString(2)
var b=mysnum
console.log("Array: ", [a, b])