var fixedRect, movingRect;
var ob1, ob2

var game1, game2, game3, game4

function setup() {
  createCanvas(windowWidth,windowHeight);
  movingRect = createSprite(200,200,80,50);
fixedRect = createSprite(600, 200, 50, 50)
fixedRect.shapeColor = "red"
movingRect.shapeColor = "red"
ob1 = createSprite(100,0,60,60);
ob1.shapeColor = "indigo";
ob2 = createSprite(100, 800, 50, 50)
ob2.shapeColor = "blue";
ob1.velocityY = 5;
ob2.velocityY = -5;


game1 = createSprite(100, 100, 50, 50)
game1.shapeColor = "yellow"

game2 = createSprite(200, 100, 50, 50)
game2.shapeColor = "yellow"

game3 = createSprite(300, 100, 50, 50)
game3.shapeColor = "yellow"

game4 = createSprite(400, 100, 50, 50)
game4.shapeColor = "yellow"
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;


if(isTouching(movingRect,game1)){
  game4.shapeColor = "blue"
fixedRect.shapeColor = "blue"
}else{
  game4.shapeColor = "red"
  fixedRect.shapeColor = "red"
}

bounceoff()

  drawSprites();
}