var road1,road2,road3,road4,bgImg,path1,path2,boy,boyImg,boy2,shop,shopImg,potionImage,potionsGroup;
var bus,bus2,car1,car1a,car2,car2a,car3,car3a;

function preload(){
  bgImg=loadImage("images/road.jpg");

  boyImg=loadAnimation("images/Runner-1.png","images/Runner-2.png");
  boy2=loadAnimation("images/Runner-1.png");

  shopImg=loadImage("images/Shop.png");

  potionImage=loadImage("images/potion.png");

  bus=loadImage("images/bus.png");
  bus2=loadImage("images/bus2.png");
  car1=loadImage("images/car1.png");
  car1a=loadImage("images/car1a.png");
  car2=loadImage("images/car2.png");
  car2a=loadImage("images/car2a.png");
  car3=loadImage("images/car3.png");
  car3a=loadImage("images/car3a.png");
}

function setup() {
  createCanvas(1365,620);

  road1=createSprite(320,162.5,10,10);
  road1.addImage(bgImg);
  road1.scale=2.8
  road2=createSprite(960,162.5,10,10);
  road2.addImage(bgImg);
  road2.scale=2.8
  road3=createSprite(320,500,10,10);
  road3.addImage(bgImg);
  road3.scale=2.8
  road4=createSprite(960,500,10,10);
  road4.addImage(bgImg);
  road4.scale=2.8

  path1=createSprite(700,45,1400,90);
  path1.shapeColor="saddlebrown";
  path2=createSprite(700,580,1400,70);
  path2.shapeColor="saddlebrown";

  boy = createSprite(640,590,20,20);
  boy.addAnimation("Running",boy2);
  boy.scale=0.06;

  shop=createSprite(640,38.5,1280,75);
  shop.addImage(shopImg);
  shop.scale=0.25;

  potionsGroup = new Group();
}

function draw() {
  background(255,255,255);  

  
if(keyWentDown(LEFT_ARROW)){
    boy.velocityX-=3;
    boy.addAnimation("Running",boyImg);
}
if(keyWentUp(LEFT_ARROW)){
  boy.velocityX=0;
  boy.addAnimation("Running",boy2);
}
if(keyWentDown(RIGHT_ARROW)){
  boy.velocityX+=3;
  boy.addAnimation("Running",boyImg);
}
if(keyWentUp(RIGHT_ARROW)){
  boy.velocityX=0;
  boy.addAnimation("Running",boy2);
}

if(keyWentDown(DOWN_ARROW)){
  boy.velocityY+=3;
  boy.addAnimation("Running",boyImg);
}
if(keyWentUp(DOWN_ARROW)){
boy.velocityY=0;
boy.addAnimation("Running",boy2);
}
if(keyWentDown(UP_ARROW)){
boy.velocityY-=3;
boy.addAnimation("Running",boyImg);
}
if(keyWentUp(UP_ARROW)){
boy.velocityY=0;
boy.addAnimation("Running",boy2);
}

spawnPotion();
spawnVehiclesLeft();
spawnVehiclesRight();

  drawSprites();
}

function spawnPotion() {
  //write code here to spawn the potions
  if (frameCount % 800 === 0) {
    var potion = createSprite(Math.round(random(150,1220)),Math.round(random(200,550)),40,10);
    potion.addImage(potionImage);
    potion.scale = 0.05;

    potion.lifetime = 400;
    
    potionsGroup.add(potion);
  }
  
}

function spawnVehiclesLeft(){
  if(frameCount % 200 === 0){
    var leftVehicle  = createSprite(1400,Math.round(random(200,550)),100,50);

    leftVehicle.velocityX = -3;
    leftVehicle.scale = 2;
    leftVehicle.lifetime = 500;
    
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(bus2);
              break;
      case 2: obstacle.addImage(car1a);
              break;
      case 3: obstacle.addImage(car2a);
              break;
      case 4: obstacle.addImage(car3a);
              break;
      default: break;
    }
  }
}

function spawnVehiclesRight(){
  if(frameCount % 100 === 0){
    var rightVehicle  = createSprite(-50,Math.round(random(200,550)),100,50);

    rightVehicle.velocityX = +3;
    rightVehicle.scale = 2;
    rightVehicle.lifetime = 500;

    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(bus1);
              break;
      case 2: obstacle.addImage(car1);
              break;
      case 3: obstacle.addImage(car2);
              break;
      case 4: obstacle.addImage(car3);
              break;
      default: break;
    }
  }
}