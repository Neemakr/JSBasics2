//Double Equals:
num1=100
num2='100'
if(num1==num2){
    console.log("Double equaals only compares the value and not the data type")
}

//Triple Equals:
num1=100
num2='100'
if(num1===num2){
    console.log("Double equaals only compares the value and not the data type")
}
else{
    console.log("Triple equaals value and the data type")
}

console.log("Compares value", num1==num2);
console.log("Compares valueand data type", num1===num2);

//AND( && ) 

function f1(data){
    if(data == 100 && typeof data =='number'){
        console.log("If block is executed")
    }
    else{
        console.log("Else block is executed")
    }
}
f1(100)

//OR( , or ||)
function f2(data){
    console.log(data == 100, typeof data == 'number')
    if(data == 100 || typeof data == 'number'){
        console.log("if block is executed")
    }
    else{
        console.log("else block is executed")
    }
}
f2(200)

//Ternary operator
var a = 10
function f3(){
    let result = (a>30) ? "Yes" : "No"
    console.log(result)
}
f3()
