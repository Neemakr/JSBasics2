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

//MetaCharacters
const t = "Abc";

//[] - Matches any of the characters
console.log(t.match(/[abc]/));

// .(period) - matches any character except new line
console.log(t.match(/..../));

//^(caret) - starts with a certain character
console.log("Hello".match(/^H/));
console.log("Hello".match(/^He/));
console.log("Hello".match(/^e/));

//$(dollar) - ends with
console.log("Hello".match(/H$/));
console.log("Hello".match(/o$/));

//* - zero or more occurrences
console.log("mn".match(/ma*n/));
console.log("man".match(/ma*n/));
console.log("maan".match(/ma*n/));
console.log("maaaaaan".match(/ma*n/));
console.log("main".match(/ma*n/));
console.log("woman".match(/ma*n/));

// + - one or more occurrences
console.log("mn".match(/ma+n/));
console.log("man".match(/ma+n/));
console.log("maan".match(/ma+n/));
console.log("maaaaaan".match(/ma+n/));
console.log("main".match(/ma+n/));
console.log("woman".match(/ma+n/));

// ? - zero or one occurrence
console.log("mn".match(/ma?n/));
console.log("man".match(/ma?n/));
console.log("maan".match(/ma?n/));
console.log("maaaaaan".match(/ma?n/));
console.log("main".match(/ma?n/));
console.log("woman".match(/ma?n/));

//{n, m} - atleast n and atmost m occurrences
console.log("abc dat".match(/a{2,3}/));
console.log("abc daat".match(/a{2,3}/));
console.log("abc daaat".match(/a{2,3}/));
console.log("abc daaaat".match(/a{2,3}/));
console.log("abc12345".match(/[0-9]{4}/));

// | - alternation
console.log("abc".match(/a|b/))

//() - group any string
console.log("abcxz".match(/(a|b|c)xz/));