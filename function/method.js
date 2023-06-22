let yazid = ['12','2','92','172','52','300000000000000000000000000002']
// console.table("yazid: ", yazid)
// console.log("yazida: ", yazid)
const check = yazid.map((yaz) => yaz)
// console.log("yaz: ", check)
const incl = check.every((include) => include.includes("2"))
// console.log("yazincludes: ", incl)

//Learning MultiDimensionalArrays

// let activities = []
let activities = [
    ['work', 9, 'school'], ['Eat', 1, 'food'],['Comute', 2, 'transportation'],['Play Game', 1,  35],['sleep', 7, 4]
]
// console.table(activities)

// console.log("myActivities: ", (activities[0][1]/24) * 100)
// activities.forEach(act => console.log("myAct", act))
// activities.forEach(act => console.log("myAct", act[2]))

const myLoad = (drYaz) => {
return[
    ['work', 9, 'good'], ['Eat', 1, 'shop'],['Comute', 2, 'mine']
]
}

// console.log("MyLoad", myLoad())

const yazYaz = {
    validate: [{
        school: "ECLC",
        class: "Primary 4",
        status: "Passed",
    }]
}
// console.log("myYazYaz: ", yazYaz.validate)
// console.log("myYazYaz: ", yazYaz.validate[0].status)

// Using The Splice Method

const Ayazida = ['Mon','Wed','Fri','Sun',]
Ayazida.splice(-3, 0,)
console.log("Ayazida: ", Ayazida)
Ayazida.splice(7, 0, "Sun")
console.log("myAyazida", Ayazida)
Ayazida.splice(0, 2) //Fri, sun, sun
console.log("TheOnlyAyazida: ", Ayazida)
Ayazida.splice(0, 2)//sun
console.log("TheOneAyazidaaas: ", Ayazida)

