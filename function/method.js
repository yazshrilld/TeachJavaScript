let yazid = ["12", "2", "92", "172", "52", "300000000000000000000000000002"];
// console.table("yazid: ", yazid)
// console.log("yazida: ", yazid)
const check = yazid.map((yaz) => yaz);
// console.log("yaz: ", check)
const incl = check.every((inc) => inc.includes("2"));
// console.log("yazincludes: ", incl)

//Learning MultiDimensionalArrays

// let activities = []
let activities = [
  ["work", 9, "school"],
  ["Eat", 1, "food"],
  ["Comute", 2, "transportation"],
  ["Play Game", 1, 35],
  ["sleep", 7, 4],
];
// console.table(activities)

// console.log("myActivities: ", (activities[0][1]/24) * 100)
// activities.forEach(act => console.log("myAct", act))
// activities.forEach(act => console.log("myAct", act[2]))

const myLoad = (drYaz) => {
  return [
    ["work", 9, "programming"],
    ["Eat", 1, "food"],
    ["Comute", 2, "transportation"],
  ];
};

// console.log("MyLoad", myLoad())

const yazYaz = {
  validate: [
    {
      school: "KodingSchool",
      class: "JavaScript",
      status: "Junior Developer/ Intermediate Developer",
    },
  ],
};
// console.log("myYazYaz: ", yazYaz.validate)
// console.log("myYazYaz: ", yazYaz.validate[0].status)

// Using The Splice Method

const Ayazida = ["Mon", "Wed", "Fri", "Sun"];
Ayazida.splice(-3, 0);
// console.log("Ayazida: ", Ayazida)
Ayazida.splice(6, 0, "Sunday");
// console.log("myAyazida", Ayazida)
Ayazida.splice(0, 2); //Fri, sun, sun
// console.log("TheOnlyAyazida: ", Ayazida)
Ayazida.splice(0, 5); //sun
// console.log("TheOneAyazidaaas: ", Ayazida)

let myYazid = "/dashboards";
// console.log(myYazid.slice(1))
let score = 5 * 43;
//work on the console

let YazidSmallLetter = "Yazid";
// console.log("Small-letter: ", YazidSmallLetter);
let YazidCaps = YazidSmallLetter[0].toUpperCase();
// console.log("capital-letter: ", YazidCaps);

// console.log(score + 5)

function createData(cNum, cType, cReason, status, date, action) {
  return { cNum, cType, cReason, status, date, action };
}
// console.log(
//   "MyData: ",
//   createData("A-Eyes", "A-Eyes", "A-Eyes", "A-Eyes", "A-Eyes", "A-Eyes", "A-Eyes")
// );
// console.log(createData.status);

const rows = [...Array(40).keys()].map((row) =>
  createData(
    "Yazid Musa Itopa",
    "Lagos",
    "Victoria Island",
    "03-02-2021",
    "₦200000",
    "completed",
    "View more"
  )
);

// let sliced = rows.slice(1, 4) && console.log("Yazid oooooooo");
// let sliced = rows.slice(0, 5) //checking to know if the data will return same result
// console.log("sliced: ", sliced);

// sliced.map((row) => {
//   console.log("MyRow: ", row[0].cNum);
// });

const myView = {
  DL: {
    names: "Yazid",
    url: "/Yazid",
  },
  IP: {
    names: "AYazida",
    url: "/Yazida",
  },
  NIN: {
    names: "Bola",
    url: "/Bola",
  },
  VC: {
    names: "Yakubu",
    url: "/Yakubu",
  },
};

// console.log("I am testing for myView Identity:", myView.DL.names)

// if (myView.NIN.names === "Ajibola") {
//   console.log("The logic will work");
// } else {
//   console.log("too many names");
// }

// console.log("///.........NEXT LINE TEST.........//")
if (myView.NIN.names === "Ajibola" && myView.VC.names === "Ajoikunmehn") {
  // console.log("My name is yazid")
} else {
  // console.log("Mixing up somewhere")
}

myView.NIN["names"] = "Bus Collections";
//  console.log("new: ", myView)

const addValidatedAccount = () => {
  setUser((prevS) => ({
    ...prevS,
    validatedUsers: [
      ...prevS.validatedUsers,
      { ...jo[0], identity: formData.selected },
    ],
  }));

  const clonedJo = [...jo];
  clonedJo.splice(0, 1);
  setJo(clonedJo);
};

const myPassword = "YazidMusa";

// let b = new Buffer.from(*password);

// var base64data = b.toString("base64")

let string = "abctopitify";

// Encode the String
let encodedString = btoa(string); // Outputs: "SGVsbG8gV29ybGQh"

if (encodedString === "YWJjdG9waXRpZnk=") {
  // console.log("Yes they are equal")
} else {
  // console.log("No, not equal")
}

const namess = "yazid";
const name2 = "itopa";

// const role = [
//   "Team Lead, Legal Services",
//   "Legal Officer",
//   "Customer Service Officer",
//   "Application Developer",
// ];

// console.log("roles", role);
// role.map((rl) => {
//   console.log("MappedRoles: ", rl);
//   if (rl.includes("Team")) {
//     console.log("Highest Admin");
//   } else if (rl.includes("Customer")) {
//     console.log("Lowest User");
//   } else {
//     console.log("Admin");
//   }
// });

const testName = "Yazid";
testName.split("").map((tst) => {
  // console.log("fromTestName: ", tst);
});

const roles = [
  "Team Lead, Legal Services",
  "Legal Officer",
  "Customer Service Officer",
  "Application Developer",
];

const ROLES_MAP = {
  Solicitor: 1,
  "Customer Service Officer": 2,
  "Legal Officer": 3,
  "Team Lead, Legal Services": 4,
  "Application Developer": 4,
};

// console.log("SelectedRoles: ", ROLES_MAP['Team Lead, Legal Services'] = 400)

const student = {
  classTeacher: "Abdul Salam Jakande",
  classMemberNumber: 100,
};

// console.log("MyStudent: ", student['classTeacher']) //this method will be succesful
// console.log("MyStudent: ", student['classTeachers']) //this method will fail

// alert(JSON.stringify(student))

// const books = JSON.parse(student)
// console.log(books)

const yazTest = 5;
// console.log("MyYazTest", yazTest)

if (yazTest === 6) {
  // console.log("They are equal")
} else {
  // console.log("They are not equal")
}

const permissions = localStorage.getItem("permissions");

// console.log("MyPermission", permissions)

const NewYaz = [0];
const ans = NewYaz[NewYaz.length - 1];
// console.log("ans: ", ans)
// console.log("Length: ", NewYaz.length)

const checks = NewYaz.every((it) => {
  it !== "";
});
//  console.log("checks: ", checks)

const ya = ["a", "b", "c", "d", "e"];
const token = ya.join("-");
// console.log("Token: ", token);

const handleSubmit = (values, { setSubmitting }) => {
  alert(JSON.stringify(values, null, 2));
  setSubmitting(false); //this resets the form
};

const myYazDentity =  {
  DL: {
    name: "DL",
    payloadName: "driversLicence",
    value: "Driver's License",
    label: "Driver's License ",
    uploadLabel: "Driver's License",
    url: "/verifyDriverlicense",
    payloadKey: "DriverLicense_number",
  },
  IP: {
    name: "IP",
    value: "International Passport",
    label: "International Passport",
    uploadLabel: "International Passport",
    url: "/verifyPassport",
    payloadKey: "passport_number",
  },
  NIN: {
    name: "NIN",
    value: "National Identification Number",
    label: "National Identification Number",
    uploadLabel: "National Identification Number",
    url: "/verifyNIN",
    payloadKey: "NIN_number",
  },
  VC: {
    name: "VC",
    value: "Voters Card",
    label: "Voters Card",
    uploadLabel: "Voters Card",
    url: "/verifyPVC",
    payloadKey: "PVC_number",
  },
};

const log_1 = Object.keys(myYazDentity)
const log_2 = Object.values(myYazDentity)
// console.log("Log_1: ", log_1)
// console.log("Log_2: ", log_2)
// console.log("Log_2: ", log_2[2].name)
log_2.map((itm) => {
  // console.log(itm)
} )

// {
//   data.filter((item) => {
//     return search.toLowerCase() === "" ? item : item.companyName.toLowerCase().includes(search)
//   })
// }

let YazCorpSearch = "Done"
// console.log("YazCorpSearch: ", YazCorpSearch.length)

const YAZ = `otp/send/otpUrl=https://www.providusbank.com?musa.yazid49@gmail.com`
const YAZI = `otp/send/musa.yazid49@gmail.com?otpUrl=https://www.providusbank.com`
// console.log("Check: ", YAZ === YAZI)
const array1 = [5, 123, 8, 130, 44];

const isLargeNumber = (element) => element > 13;
const value = array1.findIndex(isLargeNumber)


// console.log("Value: ", array1[value]);

const array2 = [5, 12, 8, 130, 44];

const found = array2.some((element) => element > 10);

// console.log(found);
// Expected output: true

//Notes On Finding Values Inside An Array->
// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// If you need the index of the found element in the array, use findIndex().
// If you need to find the index of a value, use indexOf(). (It's similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
// If you need to find if a value exists in an array, use includes(). Again, it checks each element for equality with the value instead of using a testing function.
// If you need to find if any element satisfies the provided testing function, use some().

console.log("result: ", 0 > 0);