//while
var i = 100;
while(i > 10){
  i--;
  console.log(i);//99-10
}


var ourArray = [];
for(var i = 0; i < 5; i++){
  ourArray.push(i);
  console.log(ourArray[i]);// 0,1,2,3,4
}

for(var i = 10; i > 0; i -= 2){
  ourArray.push(i);
}

var myArray = [1,5,7,9];
var myTotal = 0;
for(var i = 0; i < myArray.length; i++){
  myTotal += myArray[i]; //0+1 1+5 6+7 13+9
}
console.log(myTotal); //22

//nested for loop
function multiplyAll(arr){
  var product = 1;
  for(var i = 0; i < arr.length; i++){
    for( var j = 0; j < arr[i].length; j++){
      product *= arr[i][j];
    }
  }
  return product;
}
 var product = multiplyAll([[2,6], [5,8], [6,8,4]]);
 console.log(product);//92160



 //do-while
var i = 0;

do {
  console.log("Perulangan ke-" + i);
  i++;
} while (i < 5); 

// Output:
// Perulangan ke-0
// Perulangan ke-1
// Perulangan ke-2
// Perulangan ke-3
// Perulangan ke-4
