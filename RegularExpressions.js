//Searches for the text with case sensitive:
let text = "Visit W3Schools";
console.log(text.search(/W3Schools/));

//Without case sensitive use- /i
console.log(text.search(/w3schools/i));

//replace()
console.log(text.replace(/W3schools/i, "Microsoft"));

let text1 = "This is a demo for global search is is";
console.log(text1.search(/is/g));

console.log(text1.replace(/is/g, "at"));

let text2 = "is this it" 
            "uefhuen is";
console.log(text2.match(/is/m));