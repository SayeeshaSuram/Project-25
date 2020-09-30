var paperObject;
var trash1,trash2,trash3;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(600,200,2);
	

	trash1 = new Trash(555, 625, 200,20);
	trash2 = new Trash (450, 585,20,100);
	trash3 = new Trash (660, 585,20,100);

	ground = createSprite(400,645,width,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();

  trash1.display();
  trash2.display();
  trash3.display();

  paperObject.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
	}
}



