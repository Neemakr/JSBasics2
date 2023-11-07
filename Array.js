//Creating an Array
const A = ["Eat", "Sleep"];
//Spaces and lines are not important
const cars = ["BMW",
    "Mustang"
]
//first create an array then add the elements
const books = [];
//const books = new Array();
books[0] = "Ikigai";
books[1] = "Harry Potter";
//Method 2
const A2 = new Array("Eat", "Sleep");

const Arr = [40];
console.log(Arr);
const Arr1 = new Array(40);
console.log(Arr1);
console.log(Arr1[0]);

const student = ['Neema', '24'];
console.log(Array.isArray(student));

const fruits = ['Banana', 'Apple'];
console.log(fruits instanceof Array);
console.log(fruits instanceof Object);

//toString
console.log(fruits.toString());
console.log(fruits.join("*"));

//Adding a value to the array
A2.push("Exercise");
console.log(A2);

//Using Unshift
A2.unshift("Wakeup");
console.log(A2);

//pop 
A2.pop();
console.log(A2);

//shift
A2.shift();
console.log(A2);

const B = [40];
console.log(B);
const B2 = new Array(40);
console.log(B2);

console.log(student.length);

const arr = ['h', 'e'];
arr.name = "John";
console.log(arr);
console.log(arr.length);

//Duplicate values
const a = [1, 1, 2, 3];
console.log(a);

const keys = ["key1", "key2", "key3", "key4"]
keys.splice(0, 2, "keyyyy");
console.log(keys);

const books1 = ['book1', 'book2', 'book3', 'book4'];
const books2 = books1.slice(0,2);
console.log(books1.concat(books2));

//Deleting an Array
const bikes = ["Himalayan", "Enfield", "Harley", "Kawasaki"];
delete bikes[0];
console.log(bikes);

let x = [[1,2], [3,4], 5, [6,7], 8, [9,10]];
let y = x.flat();
console.log(y);