// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY'];
// let arr2;
// (function(){
//   arr2 = [...arr1];
//   arr1[0] = 'change'
// })();
// console.log(arr2);

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY'];
let arr2;
(function(){
  arr2 = arr1;
  arr1[0] = 'change'
})();
console.log(arr2);


const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const total = sum(...numbers); // total is 6

const originalObj = { a: 1, b: 2, c: 3 };
const newObj = { ...originalObj, b: 5 }; // { a: 1, b: 5, c: 3 }
