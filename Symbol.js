const a = Symbol();
console.log(a);

const b = Symbol('Heyy');
console.log(b);

console.log(b.description);
console.log(b.constructor);

//Adding a symbol to an object - should use [] brackets
let i = Symbol("id");
const person = {
    name : "Neema",
    age : 24,
    [i] : 123
}
console.log(person);
console.log(person[i]);
console.log(person.name);

//Symbols are not included in for..in loop - it doesn't iterate
for(let i in person){
    console.log(person[i]);
}

//Unique value
const x = Symbol('Hi');
const y = Symbol('Hi');
console.log(x === y);

//Methods
let sm1 = Symbol.for('Hello');
let sm2 = Symbol.for('Hello');
console.log(Symbol.keyFor(sm1));
console.log(Symbol.keyFor(sm2));
console.log(sm1 === sm2);

//Use of Symbol
let id = Symbol("id");
console.log(id.description)
const Person = {
    name : "John",
    age : 24
}
//Add symbol as a key
Person[id] = 'Hi';
console.log(Person[id]);

const PErson = {
    s1 : Symbol('Minor'),
    s2 : Symbol('Major')
}
console.log(PErson);
PErson.s1 = Symbol('My ghjghb');
console.log(PErson);