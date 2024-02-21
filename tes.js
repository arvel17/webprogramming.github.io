//console.log("apakabar?");

/*var number = 5;
console.log(number);
*/

//data type
//undefined, null, boolean, string, symbol, number, and object

var myName = 'arvel kartawijaya';


myName = 10; //penulisan koma bisa di skip, tapi best practice pakai koma 
//masukin chat gpt masalah penggunaan koma 

let outName = 'kalbe';

const pi = 3.14; //nilainya konstan tidak bisa berubah 

a = 10;
b = a; 

console.log(myName);
console.log(outName);
console.log(pi);


const objek = {
  _nilai: 0,

  // Getter menggunakan arrow function
  get nilai() {
    return this._nilai;
  },

  //  Setter menggunakan arrow function
  // set nilai = (nilaiBaru) => {
  //   if (nilaiBaru >= 0) {
  //     this._nilai = nilaiBaru;
  //   } else {
  //     console.log("Nilai harus lebih besar dari atau sama dengan 0");
  //   }
  // }

  set nilai(nilaiBaru) {
    if (nilaiBaru >= 0) {
      this._nilai = nilaiBaru;
    } else {
      console.log("Nilai harus lebih besar dari atau sama dengan 0");
    }
  }
};

console.log(objek.nilai); // Output: 0
objek.nilai = 10;
console.log(objek.nilai); // Output: 0 (nilai tetap 0 karena setter tidak berfungsi)