function myFunc(a,b){
  console.log(a - b);
}

var globalVar = "Ini adalah variabel global";

function func1() {
    console.log(globalVar); 
}

function func2() {
    console.log(globalVar); 
}

function func3() {
  var localVar = "Ini adalah variabel lokal";
  console.log(localVar); 
}

function func4() {
  // console.log(localVar); // Error: localVar is not defined
}

//best practice kurangi penggunaaan global variable, lebih di sarakan 
//pakai local, tapi jangan lupa dengan penggunaan memory

function myLocalScoope(){
  var myVar = 5;
  console.log(myVar);
}
myLocalScoope();

var globalVariable = "hello";

function localFunction(){
  var globalVariable = "world"; //local variable lebih prioritas
  return globalVariable;
}

console.log(localFunction()); // world
console.log(globalVariable); //hello

//kalau function ga ada return, return nya bakalan 
//undefined

//fungsi JSON.stringfy() digunakan untuk merubah suatu array jadi format JSON
var testArr = [1,2,3,4,5,6,7];
console.log(testArr); //[1, 2, 3, 4, 5, 6, 7]
console.log(JSON.stringify(testArr)); //[1,2,3,4,5,6,7]

//boolean 
function boolean(){
  return false;
}

function trueOrFalse(wasThatTrue){ //tidak perlu menyatakan fungsi itu boolean untuk bisa menggunakan tipe data boolean. Anda tidak perlu mendeklarasikan tipe data secara khusus.
  if(wasThatTrue){
    return "ya benar";
  }
  return "salah";
}

console.log(trueOrFalse(false))


function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
//chat gpt example

//check equals
function testEqual(val){
  if(val == 12){
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual(12));
// untuk perbandingan yang ketat bisa mengunakan ===
//strict equality operator
console.log(5 === 5); // Output: true, karena nilai dan tipe data keduanya adalah angka
console.log("5" === 5); // Output: false, karena nilai sama tetapi tipe datanya berbeda (string vs number)
console.log(5 === '5'); // Output: false, karena tipe datanya sama tetapi nilainya berbeda

//strict not equality
console.log(5 !== 5);     // Output: false, karena nilai dan tipe data keduanya sama (number)
console.log("5" !== 5);   // Output: true, karena nilai sama tetapi tipe datanya berbeda (string vs number)
console.log(5 !== '5');   // Output: true, karena tipe datanya sama tetapi nilainya berbeda
console.log(10 !== 7);    // Output: true, karena nilai dan tipe data keduanya berbeda

//function tanda > < 

//function tanda  <= >= 

// Fungsi untuk memeriksa apakah angka lebih besar dari 10
function isGreaterThanTen(number) {
  return number > 10;
}

console.log(isGreaterThanTen(15));  // Output: true, karena 15 lebih besar dari 10
console.log(isGreaterThanTen(5));   // Output: false, karena 5 tidak lebih besar dari 10

// Fungsi untuk memeriksa apakah angka kurang dari 100
function isLessThanHundred(number) {
  return number < 100;
}

console.log(isLessThanHundred(50));   // Output: true, karena 50 kurang dari 100
console.log(isLessThanHundred(150));  // Output: false, karena 150 tidak kurang dari 100

// Fungsi untuk memeriksa apakah angka lebih besar dari atau sama dengan 20
function isGreaterThanOrEqualTwenty(number) {
  return number >= 20;
}

console.log(isGreaterThanOrEqualTwenty(25));  // Output: true, karena 25 lebih besar dari atau sama dengan 20
console.log(isGreaterThanOrEqualTwenty(15));  // Output: false, karena 15 tidak lebih besar dari atau sama dengan 20

// Fungsi untuk memeriksa apakah angka kurang dari atau sama dengan 50
function isLessThanOrEqualFifty(number) {
  return number <= 50;
}

console.log(isLessThanOrEqualFifty(40));   // Output: true, karena 40 kurang dari atau sama dengan 50
console.log(isLessThanOrEqualFifty(60));   // Output: false, karena 60 tidak kurang dari atau sama dengan 50

// operator &&
// operator ||
function chained(value){
  if(value < 5){
    return "Tiny";
  }else if(value < 10){
    return "Small";
  }else if(value < 15){
    return "Medium";
  }else if(value < 20){
    return "Large";
  }else if(value >= 20){
    return "Huge";
  }
}
console.log(chained(8));

//switch case 
function switchCase(value){
  var answer = "";
  switch(value){
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gama";
      break;
    default:
      answer = "hello";
  }
  return answer;
}

//switch case sequential
function sequential(value){
  var answer = "";
  switch(value){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Medium";
    case 7:
    case 8:
    case 9:
      answer = "High";
      break
  }
  return answer; 
}

//counting card function 
var count = 0;
function cc(card){
  switch(card){
    case 2:
    case 3:
    case 4: 
    case 5: 
    case 6:
      count ++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count --;
      break;
  }
  var holdbet = "Hold"
  if(count > 0){
    holdbet = "Bet";
  }
  return count + " " + holdbet;
}