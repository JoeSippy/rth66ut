
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var btn1;
var btn2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground (400,690,800,10)
ground1 = new Ground(450,650,10,100)
ground2 = new Ground (650,650,10,100)
ball = Bodies.circle(200,200,30,{restitution:0.9});
fill ("yellow")
World.add(world,ball)


ellipseMode(RADIUS);

btn1 = createImg('right.png');
btn1.position(700,30);
btn1.size(50,50);
btn1.mouseClicked(applyHforce);

btn2 = createImg('up.png');
btn2.position(20,30);
btn2.size(50,50);
btn2.mouseClicked(applyVforce);

function applyHforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
  }
  
  function applyVforce(){ 
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
  
}
Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.show();
 ground1.show();
 ground2.show();
 ellipse(ball.position.x,ball.position.y,30)
}



