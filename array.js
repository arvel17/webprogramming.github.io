var ourArray = ["John", 23]; //array biasa
var myArray = ["Arvel", 21];

var nestedArray = [["the universe", 1000], ["everything", 101010]];
//akses array 
console.log(nestedArray[0]); //[ 'the universe', 1000 ]
console.log(nestedArray[0].join(', ')); // the universe, 1000 (supaya tidak ada kurung pakai .join(', '))

//modify array  
var modigyArray = [18, 29, 40];
modigyArray[0] = 17;
console.log(modigyArray.join(' , '));

//multidimentional array
var multiDimensiArray = [[1,2,3], [3,4,5], [4,5,6], [[11,12,13], 23, 46]];
console.log(multiDimensiArray[3][0][0]);// 11

//push function 
var tes = [1, 2, 3, 4, 5];
console.log(tes.push(500)); //yang di print adalah panjang dari array
console.log(tes); // [ 1, 2, 3, 4, 5, 500 ]

//pop function
console.log(tes.pop()); //500
console.log(tes); //[ 1, 2, 3, 4, 5 ]
console.log(tes.pop()); // 5
console.log(tes);// [ 1, 2, 3, 4 ]

//shift
var tes2 = ["arvel", "arvel1", "arvel2"];
var removedFromOurArray = tes2.shift(); //element pertama akan dihapus
console.log(removedFromOurArray); //arvel

//unshift
tes2.unshift("arvel10"); //menambahkan element 
console.log(tes2);  //[ 'arvel10', 'arvel1', 'arvel2' ]

