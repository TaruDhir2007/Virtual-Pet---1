var dog, happyDog, database, foodS, foodStock
var dogImg, happyDogImg;
function preload()
{
happyDogImg = loadImage("../images/dogImg1.png");
dogImg = loadImage("../images/Dog.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 250, 50, 50);
  dog.addImage("Dog Image", dogImg)
  foodStock = database.ref('Food')
  foodStock.on('value', readStock)
}


function draw() {  
  background(46, 139, 87)

 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  drawSprites();
  text("Food Left" + foodStock, 350, 100);
  text("PRESS UP ARROW TO FEED HEDWIG", 250, 100);
}
 function readStock(data){
   foodS = data.val();
 }
 function writeStock(x){
   database.ref('/').update({
     Food : x
   })
  }

