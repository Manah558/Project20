var ground
var jerry
var tom

 
function preload() {
    //load the images here
groundImage=loadImage("images/garden.png")
toma =loadAnimation("images/tomOne.png")
tomb=loadAnimation("images/tomTwo.png","images/tomThree.png")
tomc=loadAnimation("images/tomFour.png") 

rata=loadAnimation("images/jerryOne.png")
ratb=loadAnimation("images/jerryTwo.png","images/jerryThree.png")
ratc=loadAnimation("images/jerryFour.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     jerry= createSprite (72,700,20,20);
    jerry.addAnimation ("mouse",rata);
    jerry.addAnimation ("teasing",ratb);
    jerry.addAnimation ("glass",ratc);
  
    jerry.scale =0.1;


    
   tom=createSprite(600,700,20,20);
   tom.addAnimation("cat",toma);
   tom.addAnimation("runningcat",tomb);
   tom.addAnimation("sitting",tomc);
  
   tom.scale= 0.1;
   
    

}

function draw() {

    background(groundImage);
    //Write condition here to evalute if tom and jerry collide

   if(tom.x-jerry.x<70){
        tom.velocityX=0
        tom.changeAnimation("sitting",tomc);
        jerry.changeAnimation ("glass",ratc);
   }

    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        tom.velocityX=-5
        tom.changeAnimation("runningcat",tomb); 
        jerry.frameDelay = 25;
        jerry.changeAnimation ("teasing",ratb);
    }
  

  //For moving and changing animation write code here


}
