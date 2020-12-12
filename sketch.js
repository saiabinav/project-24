
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1,rect2,rect3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(63.012, 640,100,100);
	packageSprite.scale=0.2

	

	rect1=createSprite(699,655,100,10);
	

	rect2=createSprite(750,610,10,100);
	

	rect3=createSprite(650,610,10,100);
	



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //packageSprite.x= packageBody.position.x 
 // packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {

	packageSprite.x=700
	packageSprite.y= 620


    
  }
}
