//Weakset contains only objects
const set = new WeakSet();
console.log(set);
let obj = {
    name : "John",
    age : 55
}
set.add(obj);
console.log(set);

//add(), delete(), has()
console.log(set.has(obj));
console.log(set.delete());

//add other elements to weakSet it produces an error
set.add("Hello!");
console.log(set);
