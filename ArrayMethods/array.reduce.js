//Display the output YM, UN, EC.
const developers = [
  { name: "Yazid Musa", class: "Junior Dev" },
  { name: "Uzor Nwachukwu", class: "Intermediate Dev" },
  { name: "Ezenwa Chigozies", class: "Senior Dev" },
];

const roleLevels = developers.reduce(
  (preValue, currentValue, index, originalArray) => {
    let splitNames = currentValue.name.split(" ");
    let partNames = `${splitNames[0][0]}${splitNames[1][0]}`;
    if (index === originalArray.length - 1) {
      partNames += ".";
    } else {
      partNames += ", ";
    }

    return `${preValue}${partNames}`;
  },
  ""
);

console.log(roleLevels);

let yaz = "Yazid";
let names = 10 + 1;
let namesa = (yaz += 1);
console.log({ names });
console.log({ names, namesa });
