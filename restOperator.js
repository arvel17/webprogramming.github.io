//rest operator digunakan untuk 
//mengumpulkan nilai-nilai yang tersisa dari sebuah 
//array atau parameter fungsi ke dalam satu array

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]


const numbers1 = [1, 2, 3, 4, 5];
const [first1, second1, ...rest1] = numbers1;

console.log(first1); // Output: 1
console.log(second1); // Output: 2
console.log(rest1); // Output: [3, 4, 5]