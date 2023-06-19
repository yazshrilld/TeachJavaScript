const json = '{"result":true,"count":"many"}';

const obj = JSON.parse(json);
console.log(obj.count);
//Json.Parse converts a string toan object({"result":true,"count":"many"}, while the '' signifis that they are the string)

// const json = '{"result":true, "count":42}';

