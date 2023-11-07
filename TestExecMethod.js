let str = "GeeksforGeeks is the computer science"
        + " portal for geeks.";
let regex = new RegExp("computer",);
let rex = regex.test(str);
console.log(rex);

const pattern = /e/;
console.log(pattern.test("The best things in life are free!"));

console.log(/e/.test("The best things in life are free!"))

console.log(/e/.exec("Krishna is the creator of the Universe"));