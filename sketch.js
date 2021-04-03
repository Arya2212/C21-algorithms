
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1=createSprite(200,200,50,60);
  gameObject1.shapeColor="yellow"

  gameObject2=createSprite(350,350,90,80);
  gameObject2.shapeColor="red"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "violet";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }
 
  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "violet";
    gameObject1.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    gameObject1.shapeColor = "yellow"
  }
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "violet";
    gameObject2.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    gameObject2.shapeColor = "red"
  }

  
//bounceOff(movingRect,fixedRect)
  drawSprites();
}



