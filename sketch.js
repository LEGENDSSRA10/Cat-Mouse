var tom, tomRunning, tomImage;
var jerry, jerryRunning, jerryImage;
var garden, gardenImage;

function preload() 
{
  tomRunning = loadAnimation("TomOne.png", "TomTwo.png", "TomThree.png", "TomFour.png",);
  jerryRunning = loadAnimation("jerryOne.png", "jerryTwo.png", "jerryThree.png", "jerryFour.png",);
  gardenImage = loadImage("garden.png");
}

function setup()
{
  createCanvas(1000,800);
  
  garden = createSprite(0, 300, 600, 600);
  garden.addImage(gardenImage);
  garden.scale = 1.5;
  garden.velocityX = -4;

  tom = createSprite(300, 550, 100, 100);
  tom.addAnimation("tom", tomRunning);
  tom.scale = 0.1;
  tom.x = 50;

  jerry = createSprite(600, 550, 100, 100);
  jerry.addAnimation("jerry", jerryRunning);
  jerry.scale = 0.1;
  jerry.x = 50;
}

function draw() 
{
  background("green");
  
  if(garden.x < 0)
  {
      garden.x = garden.width/2;
  }

  if(keyDown("space"))
  {
      tom.velocityY = -10;
  }

  tom.velocityY = tom.velocityY + 0.5;

  if(tom.isTouching(jerry))
   {
    jungle.velocityY = 0;
    tom.velocityY = 0;
    jerry.velocityY = 0;
   }
  
  drawSprites();
}

//function keyPressed()
//{}
