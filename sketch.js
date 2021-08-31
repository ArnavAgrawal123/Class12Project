var garden,rabbit,apple,greeLeaf,redLeaf;
var gardenImg,rabbitImg,apple_img,green_Leaf_img,red_Leaf_img;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_img = loadImage("apple.png");
  green_Leaf_img = loadImage("leaf.png");
  red_Leaf_img = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function draw() {
  background(0);

  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  preload()
  spawnApple()
  spawnleaf()
  spawnRedleaf()
  drawSprites();
}
 function spawnApple() {
  
  if(frameCount%80===0){
  apple = createSprite(100,50);
  apple.addImage(apple_img);
  apple.scale = 0.09;
  apple.velocityY = 2;
  apple.x = Math.round(random(10, 390));
  apple.depth = rabbit.depth;
  rabbit.depth = rabbit.depth+1;
  }
 }

 function spawnleaf() {

  if (frameCount%50===0){
    greenLeaf = createSprite(150,50);
    greenLeaf.addImage(green_Leaf_img);
    greenLeaf.scale = 0.09;
    greenLeaf.velocityY = 2;
    greenLeaf.x = Math.round(random(10, 350));
    greenLeaf.depth = rabbit.depth;
    rabbit.depth = rabbit.depth+1;
  }
 }

 function spawnRedleaf() {

  if (frameCount%60===0){
    redLeaf = createSprite(150,50);
    redLeaf.addImage(red_Leaf_img);
    redLeaf.scale = 0.09;
    redLeaf.velocityY = 2;
    redLeaf.x = Math.round(random(20, 300));
    redLeaf.depth = rabbit.depth;
    rabbit.depth = rabbit.depth+1;
  }
 }