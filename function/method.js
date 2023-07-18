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
  "Solicitor": 1,
  "Customer Service Officer": 2,
  "Legal Officer": 3,
  "Team Lead, Legal Services": 4,
  "Application Developer": 4,
};

// console.log("SelectedRoles: ", ROLES_MAP['Team Lead, Legal Services'] = 400)

const student = {
  classTeacher: "Abdul Salam Jakande",
  classMemberNumber: 100
}

// alert(JSON.stringify(student))

// const books = JSON.parse(student)
// console.log(books)

const yazTest = 5;
// console.log("MyYazTest", yazTest)

if( yazTest === 5 ) {
  // console.log("They are equal")
} else {
  // console.log("They are not equal")
}

const permissions = localStorage.getItem("permissions")
console.log("MyPermission", permissions)
