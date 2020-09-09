var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodsGroup, obstaclesGroup
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(400,400);
  monkey = createSprite(100, 340, 20, 50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;
  ground = createSprite(0, 382.5, 400, 45);
  ground.velocityX = -2;
  foodsGroup = new Group();
  obstaclesGroup = new Group();
}


function draw() {
  background(0);
  score = Math.ceil(frameCount/frameRate());
  if(keyDown("space") && monkey.y > 298){
    monkey.velocityY = -21;
  }
  else{
    monkey.collide(ground);
  }
  monkey.velocityY = monkey.velocityY + 1;
  if(ground.x = ground.width/2){
    ground.x < 0;
  }
  food();
  obstacles();
  drawSprites();
  text("Survival Time : " + score, 100, 50)
}


function food() {
  if (frameCount % 300 === 0) {
    banana = createSprite(400,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 200;
    foodsGroup.add(banana);
    }
}

function obstacles(){
  if (frameCount % 80 === 0){
     var obstacle = createSprite(450,320,10,40);
     obstacle.addImage(obstacleImage);
     obstacle.velocityX = -6;
     obstacle.scale = 0.25;
     obstacle.lifetime = 300;
     obstaclesGroup.add(obstacle);
 }
}


