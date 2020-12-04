var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var hero,flame,robot1,robot2,robot3,robot4,herofly,door,fillingBox;
var heroImg,flameImg,robotImg,doorImg,heroflyImg,fillingBoxImg;

function preload()
{
 heroImg = loadImage("images/heroNor.png");
 //heroFlyImg = loadImage("images/herofly.png");
 robotImg = loadImage("images/bot.png");
 doorImg = loadImage("images/door.png");
 //fillingBoxImg = loadImage("image/fuelbox.png");
 //flameImg = loadImage("image/")
}


function setup() {
  createCanvas(1400,700);
  
  block1 = createSprite(10,430,30,850);
  block1.shapeColor = "lightblue";
  block2 = createSprite(700,690,1400,30);
  block2.shapeColor = "lightblue";
  block3 = createSprite(265,500,500,30);
  block4 = createSprite(500,340,30,300);
  block5 = createSprite(800,440,30,500);
  block6 = createSprite(700,10,1400,30);
  block7 = createSprite(1390,430,30,850);
  block8 = createSprite(935,200,300,30);
  block9 = createSprite(1400,500,300,30);
  block10 = createSprite(100,100,200,30);
  block3.shapeColor = "lightblue";
  block4.shapeColor = "lightblue";
  block5.shapeColor = "lightblue";
  block6.shapeColor = "lightblue";
  block7.shapeColor = "lightblue";
  block8.shapeColor = "lightblue";
  block9.shapeColor = "lightblue";
  block10.shapeColor = "lightblue";

  door = createSprite(1305,600,50,05);
  door.addImage(doorImg);
  door.scale = 0.45


  hero = createSprite(80,630,50,100);
  hero.addImage(heroImg);
  hero.scale = 0.5;
  
  robo1();
  robo2();
  robo3();
  robo4();
  
}

function draw() {
 background("black")
 fill("white");
 text(mouseX+","+mouseY,mouseX,mouseY);
 
 

  drawSprites();
}
function robo1 (){
  robot1 = createSprite(650,500,50,50);
  robot1.addImage(robotImg);
  robot1.scale = 0.4;
  //robot1.velocityY  =3;
  console.log("1")
  //robot1.bounceOff(block2);
  console.log("2")
}
function robo2 (){
  robot2 = createSprite(240,300,50,50);
  robot2.addImage(robotImg);
  robot2.scale = 0.4;
}
function robo3 (){
  robot3 = createSprite(1300,165,50,50);
  robot3.addImage(robotImg);
  robot3.scale = 0.4;
}
function robo4 (){
  robot4 = createSprite(1000,620,50,50);
  robot4.addImage(robotImg);
  robot4.scale = 0.4;
}

