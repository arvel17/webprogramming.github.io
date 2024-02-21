var outDog = {
  "name" : "Camper",
  "legs" : 5,
  "tails" : 2,
  "friend" : ["everything!"]
};

//akses object pakai dot 
console.log(outDog.friend); //[ 'everything!' ]

//akses object pakai bracket
console.log(outDog["name"]); //Camper

var number = {
  1 : "arvel",
  2 : "arvel2",
  3 : "arvel3"
};
var playerNumber = number[1]; 
console.log(playerNumber);//arvel

number[1] = "kartawijaya"; //number[1] diganti jadi "kartawijaya"
console.log(number[1]); //kartawijaya

//delete property
delete number[1];
console.log(number);//{ '2': 'arvel2', '3': 'arvel3' }

var myObj = {
  gift : "pony",
  pet : "kitten", 
  bed : "sleigh"
};

function checkObj(checkProp){
  if (myObj.hasOwnProperty(checkProp)){ //hasOwnProperty buildin function
    return myObj[checkProp];//untuk mencari property didalam object apakah ada atau tidak
  }else{
    return "Not Found";
  }
};
console.log(checkObj("arvel"));//Not Found


//akses nested object
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack",
      list: [
        "bumper", 
        "footstep",
        "head lamp",
        "grill"
      ]
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);//maps

var outsideContents = myStorage.car.outside.list[0];  
console.log(outsideContents);//bumper

//deep copy suatu object 
//JSON.parse(JSON.stringify(nama_object));
//jadi kalau mau edit lewat copy an object, jangan langsung merubah di data asli
// Objek asli
var originalObject = {
  name: "John",
  age: 30,
  hobbies: ["reading", "cooking"]
};

// Membuat salinan objek menggunakan JSON.parse(JSON.stringify())
var copiedObject = JSON.parse(JSON.stringify(originalObject));

// Mengubah salinan objek
copiedObject.name = "Jane";
copiedObject.age = 25;
copiedObject.hobbies.push("gardening");

// Mencetak objek asli dan salinannya
console.log("Original Object:", originalObject);
console.log("Copied Object:", copiedObject);
