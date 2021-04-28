
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var boy;
var tree;
var stone;
var mango1,mango2,mango3,mango4,mango5;
var sling;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();
	boy = new Boy();
	tree =new Tree();
	stone = new Stone();
	sling = new Slingshot(stone.body,{x:250,y:595}); 
	mango1 = new Mango(800,300,18);
	mango2 = new Mango(800,300,18);
	mango3 = new Mango(730,390,18);
	mango4 = new Mango(700,390,18);
	mango5 = new Mango(830,390,18);
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);

  
	background("white")
	fill('red');
	textSize(24);
	text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 200,200);
	ground.display();
	tree.display();
	boy.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	
	sling.display();
    detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
	

	drawSprites();
   
  }
  
  function mouseDragged(){

    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
  function mouseReleased(){
	  sling.fly();
  }
  function keyPressed(){
	if(keyCode === 32){
	 
	  sling.attach(stone.body);
	  Matter.Body.setPosition(stone.body, {x:250  , y:595 });
	
	}
  }
  
   function detectollision(lstone,lmango){
	
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
     
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
