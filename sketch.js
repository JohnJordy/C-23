var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var shapestomakebox1, shapestomakebox2, shapestomakebox3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	shapestomakebox1=createSprite(400,655,100,10)
	shapestomakebox1.shapeColor=color(233,13,43)

	shapestomakebox2=createSprite(345,610,10,100)
	shapestomakebox2.shapeColor=color(233,13,43)

	shapestomakebox3=createSprite(455,610,10,100)
	shapestomakebox3.shapeColor=color(233,13,43)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  
  packageSprite.y= packageBody.position.y 
  
  text ("Nothing in the If loop works",10,15)

  packageSprite.collide(shapestomakebox1)
  packageSprite.collide(shapestomakebox2)
  packageSprite.collide(shapestomakebox3)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

  }
}



