const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
console.log(fruits.reverse());

const numbers = [100, 25, 50, 1, 2,];
numbers.sort();// will not work as 1 comes before 2
console.log(numbers);
numbers.sort(function(a, b){
    return a - b;
})
console.log(numbers);

//Descending order
numbers.sort(function(a, b){
    return b - a;
})
console.log(numbers);

//Math.max.apply(null, [1, 2, 3, 4]) is equivalent to Math.max(1, 2, 3, 4)
console.log(Math.max.apply(null, numbers));
//Math.min.apply()
console.log(Math.min.apply(null, numbers));

//Finding Max and Min using Home-made method
let len = numbers.length;
let Max = -Infinity;
while(len --){
    if(numbers[len] > Max){
        Max = numbers[len];
    }
}
console.log(Max);

//Finding the min
let min = Infinity;
let length = numbers.length;
while(length --){
    if(numbers[length] < min){
        min = numbers[length];
    }
}
console.log(min);