//best practice 
//const PI = 3.14;
//console.log(PI); // Output: 3.14

// Jika kita mencoba untuk mengubah nilai variabel const, akan terjadi error
PI = 3.14159; // Error: Assignment to constant variable

const S = [5,6,7]; //ini mengunci nama variable, bukan isinya
function editInPlace(){//isi dari const masih bisa diganti
  S[0] = 3;
  S[1] = 4;
  S[2] = 9;
  //S = [3, 4, 9]; akan error karena tidak bisa reassign
  return S;
}
console.log(editInPlace());

//object.freeze
const PI = {
  value: 3.14
};

Object.freeze(PI);

// Mencoba mengubah nilai properti objek yang dibekukan
PI.value = 3.14159; // Ini tidak akan mengubah nilai properti value

console.log(PI.value); // Output: 3.14

// Mencoba menghapus properti objek yang dibekukan
delete PI.value; // Ini tidak akan menghapus properti value

console.log(PI.value); // Output: 3.14

// Mencoba menambahkan properti baru ke objek yang dibekukan
PI.radius = 5; // Ini tidak akan menambahkan properti baru

console.log(PI.radius); // Output: undefined
