//Splice method modifies the original array
//Splice metjods returns the deleted values
const a = ["Apples", "Banana", "PineApple", "Kiwi"];
console.log(a.splice(0, 2, "Litchi"));
console.log(a);
//Used to delete items also
console.log(a.splice(1, 1));

//Slice()
const cars = ["BMW", "Ferrari", "Benz", "KIA"];
console.log(cars.slice(0, 2));