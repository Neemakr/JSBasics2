//This alone refers to global object(window)
let x = this;
console.log(x);

//This in a function refers to global object(window)
function greet(){
    console.log(this);
};
greet();

//This in a constructor function object which we create for the constructor
function y(){
    this.name = "Vicky",
    console.log(this);
}
//this refers to obj so only obj.name gives Vicky as a result
let obj = new y();

//This in an object refers to the object it lies within
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        let surname = 'Doe';
        console.log('The name is' + ' ' + this.name + ' ' + surname); 
        console.log(this);
    }
};
person.greet();

//This inside an inner function
function z(){
    function a(){
        console.log(this);
    }
    a();
}
z();

//doubt - function inside a constructor
function b(){
    this.name = "King",
    this.greet = function(){
        function hi(){
            console.log(this);
        }
        hi();
    }
}
const bb = new b();
bb.greet();

//this inside an object
const o = {
    name : "Queen",
    greet(){
        console.log(this);
        console.log(this.name);
        function innerfunc(){
            console.log(this);
            console.log(this.name);
        }
        innerfunc();
    }
}
o.greet();

//this inside an arrow function
let howareyou = () => {
    console.log(this + "=> this inside an arrow function");
}
howareyou();