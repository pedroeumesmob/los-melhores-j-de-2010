var estadoJogo = "JOGAR";
var ground,groundIMG;

function preload(){
groundIMG = loadImage("imagens/groundmelhor.png");
}

function setup(){
  createCanvas(displayWidth,displayHeight);

  ground = createSprite(displayWidth,displayHeight/2,1900,10);
  ground.velocityX = -10;
  ground.addImage("ground",groundIMG);
  ground.debug = true;
  //ground.x = ground.width /2;
  ground.shapeColor = "red"
  }

function draw(){
 background("gray");

 if (ground.x < 0){
  ground.x = ground.width/2;
}  

  drawSprites();
}