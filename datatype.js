var a = 9; // initialize variable 
var b = 10;
var c = 'I am a ';

c = c + 'Human';
console.log(c); //I am a Human

//chat gpt -> var untuk global variable 
//let untuk local variable
//const untuk nilai yang paten tidak bisa diubah

//case sensitive 
var StudyJavaScrip;
var studyJavascript;
var studyjavascript;

//adding two number 
var sum = 10 + 10;
console.log(sum);

var difference = 30 - 10;
console.log(difference);

var product  = 200 * 0;
console.log(product);

var quotient = 50 / 10;
console.log(quotient);

//increment
var myVar = 87;
myVar++;
console.log(myVar);

//decrement
var yourVar = 87;
yourVar--;
console.log(yourVar);

//decimal number 
var decimal = 0.54;

//multiply two decimal 
var decimal1 = 0.239;
var decimal2 = 0.8486;
var multDecimal = decimal1 * decimal2;
console.log(multDecimal); 

//divide decimal
var pembagianDesimal = decimal / decimal2;
console.log(pembagianDesimal);

//finding a remainder 
var remainder;
remainder = 11 % 3;
console.log(remainder);

//augmented math operation 
var a = 3;
var b = 17;
var c = 12;

a = a + 12; // a+= 12;
b = 9 + b; // b += 9;
c = c + 7; // c +=7;

a = a - 12; // a -= 12;
b = 9 - b; // b -= 9;
c = c - 7; // c -=7;

a = a * 4; // a *= 4;
b = b * 5; // b *= 5;
c = c * 9; // c *= 9;

a = a / 12; // a /= 12;
b = b / 4; // b /= 4;
c = c / 10; // c /= 10;

//decalre string variable 
var  firstName = 'Arvel';
var lastName = 'Kartawijaya';

//escaping literal quotes
var myStr = "I am a \'single quoted\' string inside \'single quoted\'";
console.log(myStr); //I am a 'single quoted' string inside 'single quoted'

//kalau mau pakai double quotes bisa pakai single quotes untuk tandanya 
var myString = 'testing double quotes \"tes\"';
//kalau mau nampilkan single quotes dan double quotes sekaligus, bisa pakai
//````````

var mysting1 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(mysting1);

//concatenante sting +
var concatenante = firstName + lastName;

//concatenante sting +=
var ourStr = "I come first. ";
ourStr += "I come second. ";

console.log(ourStr);

//find length of string 
console.log(firstName.length);

//bracket notation seperti array untuk cari index string ke-n
console.log(firstName[0]);

//string immutability
var myStr1 = "Jello World";
myStr1[0] = "H"; //walaupun di ubah seperti ini tidak akan bisa 
myStr1 = "Hello World";
console.log(myStr1); // Jello World