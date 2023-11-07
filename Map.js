//create a map
const map = new Map();
console.log(map);

//insert item to map
const map1 = new Map();
map1.set('info', {name : 'Jack', age : 26});
map1.set("lastName", "Doe");
console.log(map1);
console.log(map1.get('info'));
console.log(map1.get("lastName"));

const map2 = new Map([
    ["Apples", 500],
    ["Bananas", 300]
])
console.log(map2);
console.log(map2.get("Apples"));

//insert items into a map
const map3 = new Map();
map3.set("Apples", 500);
map3.set("Bananas", 100);
map3.set("Oranges", 800);
console.log(map3.get('Oranges'));

//map.size
console.log(map1.size);
console.log(map2.size);
console.log(map3.size);

//delete an item
map2.delete("Apples");
console.log(map2);

//delete a map completely
map1.clear();
console.log(map1.get('info'));

//Has
const fruits = new Map([
    ["Apples", 200],
    ["Grapes", 600],
    ["Kiwi", 800]
]);
console.log(fruits.has("Kiwi"));
fruits.delete("Grapes");
console.log(fruits.has("Grapes"));

//Maps are objects
console.log(typeof(fruits));

//Instanceof
console.log(fruits instanceof Map);
console.log(fruits instanceof Object);

//ForEach
fruits.forEach(myFunction);
function myFunction(key, value){
    console.log(value, key);
}

fruits.forEach(function(key, value){
    console.log(value, key);
});

for(let r of fruits){
    console.log(r);
}

//Map entries
for(let x of fruits.entries()){
    console.log(x);
}

//Map.keys()
for(let i of fruits.keys()){
    console.log(i);
}

//Map.values()
for (let j of fruits.values()){
    console.log(j);
}

//for..in - since keys can be directly accessed this doesn't work. 
for (let k in fruits){
    console.log(`${k} => ${fruits[k]}`);
}

//Objects as keys
//Create object
const apple = {
    name : 'Apples'
}
const banana = {
    name : 'Bananas'
}
const fruit = new Map([
    [apple, 5000],
    [banana, 6000]
]);

const Banana = {
    name : "Banana"
}
fruit.set(Banana);

console.log(fruit);
//We will not access it as a string (in "" - double quotes) 
console.log(fruit.get(apple));

//WeakMap()
const weakMap = new WeakMap();
const obj = {
    name : "Daniel",
    age : 55
};
weakMap.set(obj, 90);
console.log(weakMap);