var boy1
var ground
var boy1img

function preload(){
boy1img = loadAnimation("boy1.png")
ground1img = loadAnimation("ground1.png")
Landmineimg = loadImage("Landmine.png")
spikeballimg = loadImage("Spikeball.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  ground = createSprite(windowWidth/2,windowHeight-20,windowWidth,50)
  boy1 = createSprite(50,windowHeight-110,60,60)
  boy1.addAnimation("boy1",boy1img)
  ground.velocityX = -3
  ground.addAnimation("ground1",ground1img)
  ground.scale = 2;
  boy1.scale = 2;
  //invisibleGround = createSprite(windowWidth/2,windowHeight-100,windowWidth,50);

}

function draw() {
  background(0);  
  drawSprites();
  if(ground.x < 350){
    ground.x = ground.width/2
  }
boy1.collide(ground);
spawnObstacles(); 
}

function spawnObstacles(){
  if(frameCount % 120 === 0){
    var obstacle = createSprite(displayWidth,windowHeight-150,40,40)
    obstacle.velocityX = -3;
  }
}
