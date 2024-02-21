// Penggunaan var
var x = 10;
if (true) {
    var x = 20;
    console.log(x); // Output: 20
}
console.log(x); // Output: 20

// Penggunaan let
let y = 10;
if (true) {
    let y = 20;
    console.log(y); // Output: 20
}
console.log(y); // Output: 10
