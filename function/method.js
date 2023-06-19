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
    ['work', 9], ['Eat', 1],['Comute', 2],['Play Game', 1],['sleep', 7]
]
console.table(activities)

console.log("myActivities: ", (activities[1]/24))