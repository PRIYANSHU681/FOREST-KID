var ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10,ground11,ground12,ground13,ground14,ground15,ground16,ground17,ground18,ground19,ground20,ground21,ground22,ground23,ground24,ground25,ground26,ground27,ground28,ground29,ground30,ground31,ground32,ground33,ground34,ground35,ground36,ground37,ground38;

function preload(){
  forestImage=loadImage("forest background.jpg")
  groundImage=loadImage("GroundImage.png")
  kid_running=loadAnimation("kid1.png","kid2.png","kid3.png")
  pinImage=loadImage("pin.png")
}

function setup() {
  createCanvas(7400,600);
  ground1=createSprite(90,500,150,30);
 ground1.shapeColor="brown"
 ground1.addImage(groundImage)
 ground1.scale=0.4
  ground2=createSprite(320,420,150,30);
  ground2.shapeColor="brown"
  ground2.addImage(groundImage)
  ground2.scale=0.4

  ground3=createSprite(490,320,150,30);
  ground3.shapeColor="brown"
  ground3.addImage(groundImage)
  ground3.scale=0.4

  ground4=createSprite(660,450,150,30);
  ground4.shapeColor="brown"
  ground4.addImage(groundImage)
  ground4.scale=0.4

  ground5=createSprite(860,350,150,30);
  ground5.shapeColor="brown"
  ground5.addImage(groundImage)
  ground5.scale=0.4

  ground6=createSprite(1050,240,150,30);
  ground6.shapeColor="brown"
  ground6.addImage(groundImage)
  ground6.scale=0.4

  ground7=createSprite(1200,340,150,30);
  ground7.shapeColor="brown"
  ground7.addImage(groundImage)
  ground7.scale=0.4

  ground8=createSprite(1400,400,150,30);
  ground8.shapeColor="brown"
  ground8.addImage(groundImage)
  ground8.scale=0.4

  ground9=createSprite(1600,320,150,30);
  ground9.shapeColor="brown"
  ground9.addImage(groundImage)
  ground9.scale=0.4

  ground10=createSprite(1600,320,150,30);
  ground10.shapeColor="brown"
  ground10.addImage(groundImage)
  ground10.scale=0.4

  ground11=createSprite(1800,240,150,30);
  ground11.shapeColor="brown"
  ground11.addImage(groundImage)
  ground11.scale=0.4

  ground12=createSprite(2000,320,150,30);
  ground12.shapeColor="brown"
  ground12.addImage(groundImage)
  ground12.scale=0.4

  ground13=createSprite(2000,320,150,30);
  ground13.shapeColor="brown"
  ground13.addImage(groundImage)
  ground13.scale=0.4

  ground14=createSprite(2200,400,150,30);
  ground14.shapeColor="brown"
  ground14.addImage(groundImage)
  ground14.scale=0.4

  ground15=createSprite(2400,320,150,30);
  ground15.shapeColor="brown"
  ground15.addImage(groundImage)
  ground15.scale=0.4

  ground16=createSprite(2600,240,150,30);
  ground16.shapeColor="brown"
  ground16.addImage(groundImage)
  ground16.scale=0.4

  ground17=createSprite(2800,320,150,30);
  ground17.shapeColor="brown"
  ground17.addImage(groundImage)
  ground17.scale=0.4

  ground18=createSprite(3000,400,150,30);
  ground18.shapeColor="brown"
  ground18.addImage(groundImage)
  ground18.scale=0.4

  ground19=createSprite(3200,320,150,30);
  ground19.shapeColor="brown"
  ground19.addImage(groundImage)
  ground19.scale=0.4

  ground20=createSprite(3400,240,150,30);
  ground20.shapeColor="brown"
  ground20.addImage(groundImage)
  ground20.scale=0.4

  ground21=createSprite(3600,320,150,30);
  ground21.shapeColor="brown"
  ground21.addImage(groundImage)
  ground21.scale=0.4

  ground22=createSprite(3800,400,150,30);
  ground22.shapeColor="brown"
  ground22.addImage(groundImage)
  ground22.scale=0.4

  ground23=createSprite(4000,320,150,30);
  ground23.shapeColor="brown"
  ground23.addImage(groundImage)
  ground23.scale=0.4

  ground24=createSprite(4200,240,150,30);
  ground24.shapeColor="brown"
  ground24.addImage(groundImage)
  ground24.scale=0.4

  ground25=createSprite(4400,320,150,30);
  ground25.shapeColor="brown"
  ground25.addImage(groundImage)
  ground25.scale=0.4

  ground26=createSprite(4600,400,150,30);
  ground26.shapeColor="brown"
  ground26.addImage(groundImage)
  ground26.scale=0.4

  ground27=createSprite(4800,320,150,30);
  ground27.shapeColor="brown"
  ground27.addImage(groundImage)
  ground27.scale=0.4

  ground28=createSprite(5000,240,150,30);
  ground28.shapeColor="brown"
  ground28.addImage(groundImage)
  ground28.scale=0.4

  ground29=createSprite(5200,320,150,30);
  ground29.shapeColor="brown"
  ground29.addImage(groundImage)
  ground29.scale=0.4

  ground30=createSprite(5400,400,150,30);
  ground30.shapeColor="brown"
  ground30.addImage(groundImage)
  ground30.scale=0.4

  ground31=createSprite(5600,320,150,30);
  ground31.shapeColor="brown"
  ground31.addImage(groundImage)
  ground31.scale=0.4

  ground32=createSprite(5800,240,150,30);
  ground32.shapeColor="brown"
  ground32.addImage(groundImage)
  ground32.scale=0.4

  ground33=createSprite(6000,320,150,30);
  ground33.shapeColor="brown"
  ground33.addImage(groundImage)
  ground33.scale=0.4

  ground34=createSprite(6200,400,150,30);
  ground34.shapeColor="brown"
  ground34.addImage(groundImage)
  ground34.scale=0.4

  ground35=createSprite(6400,320,150,30);
  ground35.shapeColor="brown"
  ground35.addImage(groundImage)
  ground35.scale=0.4

  ground36=createSprite(6600,240,150,30);
  ground36.shapeColor="brown"
  ground36.addImage(groundImage)
  ground36.scale=0.4

  ground37=createSprite(6800,320,150,30);
  ground37.shapeColor="brown"
  ground37.addImage(groundImage)
  ground37.scale=0.4

  ground38=createSprite(7000,400,150,30);
  ground38.shapeColor="brown"
  ground38.addImage(groundImage)
  ground38.scale=0.4

  kid=createSprite(80,450,150,30)
 kid.addAnimation("running",kid_running)
 kid.scale=0.4

 ground1.setCollider("rectangle",0,35)

 
 
}

function draw() {
  background(forestImage);
  if(keyDown("space")){
    kid.velocityY=-4;
  }
  if(keyDown("right_arrow")){
    kid.x=kid.x+10;
  }
  if(keyDown("left_arrow")){
    kid.x=kid.x-10;
  }
  kid.velocityY=kid.velocityY+0.5;
 createObstacles();
 kid.collide(ground1)
  drawSprites()
}
function createObstacles(){
for(i=600;i<7000;i=i+600){
  pin=createSprite(i,320,50,30)
  pin.addImage(pinImage)
  pin.scale=0.2
}
}