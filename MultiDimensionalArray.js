//Multidimensional array
const stu = [['Jack', 24], ['Sara', 23], ['Peter', 24]];
console.log(stu);

const student1 = ['Jack', 24];
const student2 = ['Sara', 23];
const student3 = ['Peter', 24];
const stud = [student1, student2, student3];
console.log(stud);

//Accessing the elements
console.log(stu[1]);
console.log(stu[0][1], stud[1][0]);

//Adding elements to outer array
stu.push(["Sanvi", 55]);
console.log(stu);

//inner array
stu[0][2] = ("Hyna");
console.log(stu);
stu[1].push("Pushpa");
console.log(stu);

//.splice
stu.splice(1, 0, ["Kelvin", 99]);
console.log(stu);

let cars = [["BMW", 2016], ["Swift", 2018], ["Ferrari", 2020], ["Harrier", 2022]];
//Deleting
//using pop
cars.pop();
console.log(cars);

//using pop for inner array
cars[2].pop();
console.log(cars);

//using splice()
cars.splice(1, 1);
console.log(cars);

//Iterating using forEach
stu.forEach((s) =>{
    s.forEach((value) => {
        console.log(value);
    })
});

//using for..of
for(let i of cars){
    for(let j of i){
        console.log(j);
    }
}