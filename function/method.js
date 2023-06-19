let yazid = ['12','2','92','172','52','3000000000000000000000000000000000000000000000000002']
// console.table("yazid: ", yazid)
// console.log("yazid: ", yazid)
const check = yazid.map((yaz) => yaz)
// console.log("yaz: ", check)
const incl = check.every((inc) => inc.includes("2"))
// console.log("yazincl: ", incl)

//Learning MultiDimensionalArrays

// let activities = []
let activities = [
    ['work', 9, 'good'], ['Eat', 1, 'shop'],['Comute', 2, 'mine'],['Play Game', 1,  3],['sleep', 7, 8]
]
// console.table(activities)

console.log("myActivities: ", (activities[0][1]/24) * 100)
// activities.forEach(act => console.log("myAct", act))
// activities.forEach(act => console.log("myAct", act[2]))

const myLoad = (yazid) => {
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
console.log("myYazYaz: ", yazYaz.validate)
console.log("myYazYaz: ", yazYaz.validate[0].status)