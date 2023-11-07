const cars = [
    {
        type : "Volvo", year : 2016
    },
    {
        type : "Saab", year:2001
    },
    {
        type : "BMW", year:2010
    }
];
console.log(cars);

//Sorting
console.log("After Sorting the numbers(year property) first")
cars.sort(function(a, b){
    return a.year - b.year;
});
console.log(cars);

//Sorting the type
cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if(x < y) return -1;
    if(x > y) return 1;
    return 0;
});
console.log(cars);