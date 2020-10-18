//Create variables here
var dog, happyDog, database, foodS, foodStock;
var player;
function preload()
{
  //load images here
  dog = loadImage("Dog.png")
  happyDog = loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  player=createSprite(200,200);
  player.addImage(dog)
  player.scale = 0.5;

}


function draw() {  
background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    player.addImage(happyDog)
  }
  drawSprites();
  //add styles here
  textSize()

}
function readStock(data) {
foodS = data.val()

}
function writeStock(x) {
if(x<=0){
  x=0
}
else {
  x=x-1;
}
  database.ref('/').update({
Food:x

})
}

