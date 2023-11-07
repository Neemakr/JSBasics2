let arr = [1, 2, 3, 4];
arr.forEach(function(number, i, a){
    console.log(number = a[i]);
});

//Map()
let arr1 = arr.map(function(value, index, arr){
    return value * 2;
});
console.log(arr1);

//FlatMap() - flattens the array
let arr2 = arr.flatMap((x) => x * 4);
console.log(arr2);

//Filter() - filters based on condition
let arr3 = arr.filter(function(value){
    return value > 3;
})
console.log(arr3);

//Reduce() - reduce it to a single value
let arr4 = arr.reduce(function(total, value, index, array){
    total += value;
    return total;
})
console.log(arr4);

let arr5 = arr.reduce(myFunction, 100);
function myFunction(total, value, index, array){
    total += value;
    return total;
}
console.log(arr5);

let arr6 = arr.reduce(function(){

})
console.log(arr6);

//Every - checks if all the values passes a test and return true or false
let arr7 = arr.every(myfunc);
function myfunc(value){
    return value > 2;
}
console.log(arr7);

//Some()
let arr8 = arr.some(function(value){
    return value > 2;
});
console.log(arr8);

let fruits = ["Apple", "Mango", "Banana", "Apple"]
//indexOf()
console.log(arr.indexOf(3, 1));
console.log(fruits.indexOf("Apple", 0));
console.log(fruits.lastIndexOf("Apple", 1));

//from()
let myArr = Array.from("ABCDEF");
console.log(myArr);

//.keys
for(let key of fruits.keys()){
    console.log(key);
}
/*Also can be written as
let key = fruits.keys()
for(let x of key){
    console.log(x);
}
*/

//.entries()
for(let x of fruits.entries()){
    console.log(x);
}