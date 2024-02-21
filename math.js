function randomFraction(){
  return Math.random();//untuk random angka desimal
}

console.log(randomFraction());

//Math.floor() untuk pembulatan 
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum(){
  return Math.floor(randomNumberBetween0and19);
}
console.log(randomWholeNum());

//min max beetween some value 
function randomRange(myMin, myMax){
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(10, 20);
console.log(myRandom);