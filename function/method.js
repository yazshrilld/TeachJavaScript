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
console.log("Small-letter: ", YazidSmallLetter);
let YazidCaps = YazidSmallLetter[0].toUpperCase();
console.log("capital-letter: ", YazidCaps);

// console.log(score + 5)

function createData(cName, cNum, cType, cReason, status, date, action) {
  return { cName, cNum, cType, cReason, status, date, action };
}
console.log(
  "MyData: ",
  createData("A-Eye", "A-Eye", "A-Eye", "A-Eye", "A-Eye", "A-Eye", "A-Eye")
);
// console.log(createData.status);

const rows = [...Array(20).keys()].map((row) =>
  createData(
    "Yazid Musa Itopa",
    "Lagos",
    "Ogba",
    "03-02-2021, 5:00PM",
    "₦20000",
    "completed",
    "View more"
  )
);

let sliced = rows.slice(1, 4);
// let sliced = rows.slice(0, 5) //checking to know if the data will return same result
console.log("sliced: ", sliced);

sliced.map((row) => {
  console.log("MyRow: ", row[0].cNum);
});
