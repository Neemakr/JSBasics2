const cars = new Set(["a", "bat", "c"]);
console.log(cars);

// Set with multiple types of value
const set2 = new Set([1, 'hello', {count : true}]);
console.log(set2);

// Set with duplicate values
const set3 = new Set([1, 1, 2, 2]);
console.log(set3); // Set {1, 2}

//Accessing the elements- use .values()
const set1 = new Set(['1', '2', '3']);
console.log(set1.values());

//.keys - same as .values()
const animals = new Set(["Hen", "Chicken"]);
console.log(animals.keys());

//.entries() - it doesn't have keys so it returns [value, value] instead of [key, value] 
console.log(animals.entries());

//Use has() method to see if an element is present in a set or not
console.log(set1.has('3'));

//Creating set and adding the values using Add() 
const letters = new Set();
letters.add("A");
letters.add("B");
letters.add("C");
console.log(letters);

//Create set
const letter = new Set();
//create variables
const a = "a";
const b = "b";
const c = "c";
//Add variables
letter.add(a);
letter.add(b);
letter.add(c);
console.log(letter);

//Deleting:
cars.delete('c');
console.log(cars.values());

//Remove all the elements in set
const set = new Set(['Neema', '24', 'Chikb'])
set.clear();
console.log(set.values());

// looping through Set
const set4 = new Set([1, 2, 3]);
for (let i of set4) {
    console.log(i);
}

//using ForEach()
const set5 = new Set(['11', '111', '1111', '11111']);
set5.forEach(myfunction);
function myfunction(k){
    console.log(k);
}

//Using ForEach()
const set6 = new Set(['10', '20', '30']);
set6.forEach(function(item){
    console.log(item);
})

//A set has no keys 
const set7 = new Set([22, 222, 2222, 22222]);
for(let j in set7){
    console.log(set[j]);
}

console.log(set7 instanceof Set);
console.log(set7 instanceof Object);

const set8 = new Set();
const obj = {
    name : "Yash",
    age : 89
}
console.log(set8.add(obj));