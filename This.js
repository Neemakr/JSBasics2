//This in an object
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        let surname = 'Doe';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};
person.greet();

//This alone
let x = this;
console.log(x);

//This in a function
(function (){
    return this;
})();