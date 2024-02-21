// var voxel = {x: 3.6, y: 7.4, z: 6.9 };

// var x = voxel.x; //cara biasa
// var y = voxel.y;
// var z = voxel.z;

//cara singkat
//const{x:a, y:b, z:c} = voxel;

//untuk nested object 
const LOCAL_FORECAST = {
  today: { min: 72, max : 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast){
  const{ tomorrow : {max : maxOfTomorrow}} = forecast;//mengambil data tomorrow yang max disimpan pada maxOfTomorrow
  return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST)); //84.6


const [z, x, , y] = [1, 2, 3, 4, 5, 6, 7];
console.log(z, x, y); //1, 2, 4