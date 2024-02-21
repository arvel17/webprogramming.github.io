const magic = ()=> new Date();
//best practice untuk arrow function adalah menggunakan const
//tidak cocok untuk penggunaan getter setter yang kompleks
//function biasa
// function magic(){
//   return new Date();
// }

//function biasa
// function createPerson(name, age) {
//   return { name: name, age: age };
// }
// console.log(createPerson("Alice", 30)); // Output: { name: 'Alice', age: 30 }

//arrow function
const createPerson = (name, age) => ({ name: name, age: age });
console.log(createPerson("Alice", 30)); // Output: { name: 'Alice', age: 30 }


// Fungsi tanpa parameter
const sayHello = () => {
  console.log("Hello!");
}

// Fungsi dengan satu parameter
const greet = name => {
  console.log(`Hello, ${name}!`);
}

// Fungsi dengan beberapa parameter
const add = (a, b) => {
  return a + b;
}

// Fungsi dengan hanya satu pernyataan
const multiply = (a, b) => a * b;



//penggunaan map, filter, dan reduce
const numbers = [1, 2, 3, 4, 5];

// Menggandakan semua elemen dalam array
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Mengambil hanya angka genap dari array
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output : [2, 4];

// Menghitung jumlah dari semua elemen dalam array
const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total); // Output: 15




//callback function setTimeout, setInterval,fetch
setTimeout(()=>{
  console.log("delay");
}, 1000);

//set interval untuk menjalankan sebuah function secara 
//berulang dengan interval waktu tertentu
const intervalHello = () => {
  console.log("Hello, world!");
}
const intervalId = setInterval(intervalHello, 1000);

//fetch
fetch('https://api.example.com/data')
  .then(response => {
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
    return response.json(); //ubah jadi format json 
  })
  .then(data => {
    console.log(data); //data diubah jadi object js
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });