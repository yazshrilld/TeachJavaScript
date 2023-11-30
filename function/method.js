const fileUpload = document.querySelector(".fileUp");
const image = document.querySelector(".images");

// console.log(fileUpload);

image.addEventListener("click", () => {
  fileUpload.click();
});

let yazid = ["12", "2", "92", "172", "52", "300000000000000000000000000002"];
// console.log("yazid: ", yazid);
// console.log("yazida: ", yazid)
const check = yazid.map((yaz) => yaz);
// console.log("yaz: ", check)
const incl = check.every((inc) => inc.includes("2"));
// console.log("yazincludes: ", incl);

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
// console.log({activities})

// console.log("myActivities: ", (activities[0][1]/3) * 100)
// activities.forEach(act => console.log("myAct", act))
// activities.forEach(act => console.log("myAct", act[2]))
// the forEach does not return any value, it gives indefined, but it can be use to perform an executable operation.

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
// console.log("Original Array: ", Ayazida)
Ayazida.splice(-3, 0);
// console.log("Ayazida: ", Ayazida)
Ayazida.splice(1, 1);
// console.log("myAyazidaReplace: ", Ayazida)
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

const myRows = [
  { id: 123, name: "Yazid" },
  { id: 124, name: "Yazida" },
  { id: 125, name: "Yazidas" },
  { id: 126, name: "AYazid" },
  { id: 127, name: "AYazida" },
  { id: 128, name: "AYazidas" },
  { id: 129, name: "AYazidus" },
];

let sliced = myRows.slice(0, 4);
// let sliced = rows.slice(0, 5) //checking to know if the data will return same result
// console.log("slicedBefore: ", sliced);
let mySpliceTest = myRows.splice(3, 1, "Blessing");
// console.log("slicedAfter: ", myRows);

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

let mammals = ["dolphin", "whale", "manatee"];

// Loop through each mammal
for (let mammal of mammals) {
  // console.log((mammal));
}

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

// const permissions = localStorage.getItem("permissions");

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

const myYazDentity = {
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

const log_1 = Object.keys(myYazDentity);
const log_2 = myYazDentity;
// console.log("Log_1: ", log_1)
// console.log("Log_2: ", log_2)
// console.log("Log_2: ", log_2["2"])
// log_2.map((itm) => {
//   console.log(itm)
// });

// {
//   data.filter((item) => {
//     return search.toLowerCase() === "" ? item : item.companyName.toLowerCase().includes(search)
//   })
// }

let YazCorpSearch = "Done";
// console.log("YazCorpSearch: ", YazCorpSearch.length)

const YAZ = `otp/send/otpUrl=https://www.providusbank.com?musa.yazid49@gmail.com`;
const YAZI = `otp/send/musa.yazid49@gmail.com?otpUrl=https://www.providusbank.com`;
// console.log("Check: ", YAZ === YAZI)
const array1 = [5, 123, 8, 130, 44];

const isLargeNumber = (element) => element > 13;
const value = array1.findIndex(isLargeNumber);

// console.log("Value: ", array1[value]);

const array2 = [5, 12, 8, 130, 44];

const found = array2.some((element) => element > 10);

const idea = "My Name Is Yazid";
// console.log("idea: ", idea.split())

const originalString =
  "Javascript is a programming language. I'm learning javascript.";

// Search string for "javascript" and replace with "JavaScript"
const newString = originalString.replace(/javascript/gi, "JaLvaScrIpt");

// console.log(newString);

// console.log(found);
// Expected output: true

//Notes On Finding Values Inside An Array->
// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// If you need the index of the found element in the array, use findIndex().
// If you need to find the index of a value, use indexOf(). (It's similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
// If you need to find if a value exists in an array, use includes(). Again, it checks each element for equality with the value instead of using a testing function.
// If you need to find if any element satisfies the provided testing function, use some().

// console.log("result: ", 0 > 0);

const STAFF_ROLE = [
  "Application Developer",
  "Customer Service Officer",
  "Legal Officer",
  "Team Lead, Legal Services",
];
const role = "Internal Control";
// console.log("Check: ", STAFF_ROLE.includes(role));

// const testDetails= "EMMA2050@" || "Eohio"

// Working with object inintilizer, view notes on WeLearnJavaScript

const person1 = {};
person1["firstname"] = "Mario";
person1["lastname"] = "Rossi";

// console.log("Dot: ", `${person1.firstname}`);
// console.log("Bracket: ", `${person1['firstname']}`);
// Expected output: "Mario"

let i = 0;

let b = 5 + ++i;
// console.log("b: ", b);

const a = {
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
};

// console.log("a_foo: ", a);

const items = ["A", "B", "C"];
// console.log({items});

// const [ x, y, z] = items
// console.log({x, y, z});

const yazNewObj = {
  [items]: "Hello",
};

const yazNewObjs = {
  yaxid: "Hello",
};

// console.log("Yaz: ", {yazNewObj, yazNewObjs});

// console.log(`I am Yazid and I am ${yazNewObj !== "" ? JSON.stringify(yazNewObj[items]) : `not an item`}`);

const identity = {
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

const aValue = identity["DL"].value;
// console.log({aValue});

const userArrayDetails = {
  BVN: "abc",
  FirstName: "def",
  expiryDate: "ghi" || "",
  identity: "jkl",
  issueDate: "mno" || "",
  licenseNumber: "pqr",
};

// console.log({userArrayDetails});

const NIN_DUMMY_DATA = [
  {
    status: "TRUE",
    data: {
      status_code: 200,
      message: "NIN Verification Completed Successfully",
      status: "Success",
      results: {
        request_reference: "Kp6kcj011740536_22",
        nin_number: "26712426791",
        document_no: "",
        verification_status: "VERIFIED",
        service_type: "NIN Verification",
        personal_info: {
          title: "",
          first_name: "YAZID",
          middle_name: "TOPA",
          last_name: "MUSA",
          full_name: "YAZID TOPA MUSA",
          maiden_name: "",
          gender: "m",
          email: "",
          phone_number: "07061889992",
          date_of_birth: "26-09-1994",
          formatted_date_of_birth: "September 26, 1994",
          height: "",
          marital_status: "",
          image_url: "https://api.blusalt.net/_/2svSkBOVA",
          image_base64:
            "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",
          religion: "",
          signature: "https://api.blusalt.net/_/6ojN0VYER",
          signature_base64: "",
          native_language: "",
          other_language: "",
        },
        next_of_kin: {
          firstname: "",
          surname: "",
          address: "",
          lga: "",
          town: "",
          state: "",
        },
        residential_info: {
          address: "1 ARAROMI STREET SHOGUNLE, IKEJA. LAGOS",
          lga_of_residence: "Oshodi-Isolo",
          state_of_residence: "Lagos",
          residence_status: "",
        },
        indigene_info: {
          lga_of_origin: "",
          place_of_origin: "",
          state_of_origin: "",
          lga_of_birth: "",
          state_of_birth: "",
          country_of_birth: "",
        },
        education_profession: {
          educational_level: "",
          employment_status: "",
          profession: "",
        },
        documentUrl: "https://api.blusalt.net/_/2F6lVStc6/pdf",
      },
    },
  },
];

// console.log({NIN_DUMMY_DATA});
const errMessage = "I am a boy from edo state";
// console.log({errMessage});
if (errMessage.includes("boy")) {
  // console.log("true");
} else {
  console.log("false");
}

const errorArray = [1, 2, 3, 4, 5, 6, 7, 8];
if (errorArray.includes(2)) {
  // console.log("it includes");
} else {
  // console.log("does not include")
}

const information = {
  date: errMessage,
  year: 2022,
  account: "Savings",
  responseStatus: true,
};
// const pars = JSON.parse(information)

const stringifi = JSON.stringify(information);

// console.log({pars, stringifi});
let errorMessages = `⛔️ Whoops, looks like something went wrong 👉️Invalid value "undefined" for header "clientid"`;

const truncateStr = (str) => {
  return str.length > 70 ? str.substring(0, 50) + "..." : str;
};

errorMessages = truncateStr(errorMessages);
// console.log({errorMessages});

// if (err) {
//   console.log({err});
//   const _dataError = err?.response;
//   const _errCode_500 = err?.response?.data?.data[0]?.code;
//   const _errCode_406 = err?.response?.status;
//   if (_dataError) {
//     setTimeout(() => {
//       setTextContent(
//         <p className="text-danger" style={{ textOverflow: "ellipsis" }}>
//           {truncateStr(_dataError?.data?.data[0]?.message)}
//         </p>
//       );
//     }, 1500);
//   } else if (_errCode_406) {
//     setTimeout(() => {
//       setTextContent(
//         <p className="text-danger" style={{ textOverflow: "ellipsis" }}>
//           {truncateStr(err?.response?.data?.message)}
//         </p>
//       );
//     }, 1500);
//   }  else if (_errCode_500) {
//     setTimeout(() => {
//       setTextContent(
//         <p className="text-danger" style={{ textOverflow: "ellipsis" }}>
//           {truncateStr(err?.response?.data?.data[0]?.message)}
//         </p>
//       );
//     }, 1500);
//   }

//   // if(err.response) {
//   //   const _dataError = err?.response?.data?.data[0];
//   //   console.log("errCode: ", `${_dataError?.message}`);
//   // }
// }

//The indexOf is checking the string, if the search value is present in the string, if the value is present, it will return the value, else, it will return -1
var format = new Intl.NumberFormat("en-GB");
const txAmount = 134458130;
// console.log(`$${format.format(txAmount)}`);

//Here we are trying to achieve a setTimeout to loop through a couple of times and stop after the maximum retry is reached
// let maxRetry = 0;
// const loopRun = () => {
//   if(maxRetry < 5) {
//     // console.log("I will keep on running")
//     maxRetry++;
//     setTimeout(loopRun, 1000);
//   } else {
//     // console.log("I have completed 5 loops")
//   }
// }

// loopRun()

const logRow = {
  referenceNumber: 1100924,
  customerName: "Musa Yazid",
  accountNumber: 3291233455,
  lienAmount: 800,
  debitAmount: 4,
  status: "Approved",
  code: 11,
};

const logColumn = {
  id: "debitAmount",
  label: "Reference Number",
  minWidth: 90,
};

// console.log("Log Row: ", logRow);
// console.log("Log Column: ", logColumn);
// console.log("Debit Amount: ", logRow[logColumn.id]);

const rowArray = [123, "oladele", 5900335850, 12000, 12000, 200];

// console.log("Row Array Value: ", rowArray[1]);

const colsArray = [
  "REFERENCE",
  "NAME",
  "ACCOUNT",
  "LIEN_AMOUNT",
  "DEBIT_AMOUNT",
  "CHARGES",
];

// console.log("Debit Amount: ", Object.keys(rowArray) === Object.values(colsArray));
// console.log("Debit Amount: ", Object.keys(rowArray));
// console.log("Debit Amount: ", rowArray[123] === Object.values(colsArray));

const yazArrays = [
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqr",
  "stu",
  "vwx",
  "yz",
];

const [first, ...rest] = yazArrays;
// console.log({yazArrays, first, rest})

const namesYaz = "REFERENCE";
// console.log(namesYaz.toLowerCase())

const yazNum = [
  "bisi",
  "ishola",
  "micheal",
  "amah",
  "faith",
  "ojukwu",
  "ambrose",
  "efe",
  "ade",
];
const abc = "amah";
const view = yazNum.filter((a) => a === abc); //this outputs all the array items except amah, because as it loops through the array from the first element at index 0, itwhen it gets to the element that is
//Note that The filter method originally is to display the truthy value, but we can display both true and false. The filter array method displays some array data weda the conditional is true or false, so but it depends on you, what you want to display, if you want to display the true, you write the conditional that gives true, but if you want to display the false, you write the conditional that displays the false.
// console.log({ view });
const fred = "amah";
const abcd = "amah";
// console.log(fred === abcd)

const yazNums = [
  "bisi",
  "ishola",
  "micheal",
  "amah",
  "faith",
  "ojukwu",
  "ambrose",
  "efe",
  "ade",
];
const abcs = "amad";
const views = yazNums.filter((a) => a === abcs); //this outputs all the array items except amah, because as it loops through the array from the first element at index 0, itwhen it gets to the element that is
//Note that The filter method originally is to display the truthy value, but we can display both true and false. The filter array method displays some array data weda the conditional is true or false, so but it depends on you, what you want to display, if you want to display the true, you write the conditional that gives true, but if you want to display the false, you write the conditional that displays the false.
// console.log({ view });
const freds = "amad";
const abcds = "amad";
// console.log(freds === abcds)

//This is a pure function BECAUSE ITS VARIABLES ARE WITHIN
const baddssss = (ass, bss) => {
  return ass + bss;
};

// console.log(baddssss(5, 6));

//This is not a pure function BECAUSE ITS VARIABLES ARE OUTSIDE
let cdy = 5;
let cdx = 7;
const addssss = (bass, bss) => {
  return bass + bss;
};

// console.log(addssss(cdy, cdx));

const add = (a, b) => {
  return a + b
}

const logMessage = (message) => {
  // console.log(message);
}

logMessage("Hello")
logMessage(add(2, 3))
logMessage(add("a", 3))