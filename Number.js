let x = 10;
let y = 20;
console.log("The result is: "+ x + y);
console.log(+ x + y);

//isNaN to check whether it's NaN or not
let a = "Apple";
let b = 100;
console.log(isNaN(a/b));

//If we use NaN in mathematical operation, the result will be NaN
let c = NaN;
let d = 5;
console.log(c + d);

//or a string concatenation of NaN5
let e = "9";
console.log(c + e);

//Infinity 
let number = 99;
while(number != Infinity){
    number =  number * number;
    console.log(number);
}