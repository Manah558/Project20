var bg, bgImg;
var tom, tomResting, tomWalking, tomCollided;
var jerry, jerryStanding, jerryMoving, jerryCollided;


function preload() {
  bgImg=loadImage("garden.png");  
  tomResting=loadAnimation("cat1.png");
  tomWalking=loadAnimation("cat2.png","cat3.png");
  tomCollided=loadAnimation("cat4.png");
  jerryStanding=loadAnimation("mouse1.png");
  jerryMoving=loadAnimation("mouse2.png","mouse3.png");
  jerryCollided=loadAnimation("mouse4.png");
}


function setup(){
  createCanvas(windowWidth, windowHeight);

  bg=createSprite(windowWidth/2-200,windowHeight/2,windowWidth, windowHeight);
  bg.addImage(bgImg);
  bg.scale=1.5;

  tom=createSprite(windowWidth-600,windowHeight-150,50,50);
  tom.scale=0.2;
  tom.addAnimation("Resting",tomResting);
  tom.addAnimation("Walking",tomWalking);
  tom.addAnimation("Collided",tomCollided);

  jerry=createSprite(200,windowHeight-150,50,50);
  jerry.scale=0.2;
  jerry.addAnimation("Standing",jerryStanding);
  jerry.addAnimation("Moving",jerryMoving);
  jerry.addAnimation("Collided",jerryCollided);
}


function draw() {
  background(255);

  if (keyDown("LEFT_ARROW")){
    tom.velocityX=-5;
    tom.changeAnimation("Walking",tomWalking);
    jerry.changeAnimation("Moving",jerryMoving);
  }

  if (tom.x - jerry.x < (tom.width-jerry.width)/2){
    tom.velocityX=0;
    tom.x=400;
    tom.changeAnimation("Collided",tomCollided);
    jerry.changeAnimation("Collided",jerryCollided);
  }
    
  drawSprites();
}
