let obj1 = { name: "Person 1", age:5 };
let obj2 = {age:5, name: "Person 1" };

let obj1String = JSON.stringify(obj1, Object.keys(obj1).sort());
let obj2String = JSON.stringify(obj2, Object.keys(obj2).sort());

if (obj1String === obj2String) {
    console.log("Both objects have the same properties (regardless of order).");
} else {
    console.log("Objects have different properties.");
}