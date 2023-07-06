var a=10;
console.log("a=", a);
let a = 10;
var b=30;
function f() {
    if (true) {
        var b = 9
 
        // It prints 9
        console.log(b);
    }
 
    // It gives error as it
    // defined in if block
    console.log(b);
}
f()
 
// It prints 10
console.log(a)
console.log(b);

