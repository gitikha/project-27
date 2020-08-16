const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

display()
{
	var ponitA=this.rope.bodyA.position;
	var pointB=this.rope.bodyB.position;

	strockeweight(2);

	var Anchor1x=pointA.x
	var Anchor1y=pointA.y

	var Anchor2x=pointB.x+this.offsetx
	var Anchor2y=pointB+this.offsety
	

	SVGPathSegLinetoAbs(Anchor1x,Anchor1y,Anchore2x,Anchor2y);
	}

{
	
}

function setup() {
	createCanvas(800, 700);

	constructor(body1,body2,offsetx,offsety)
	{
	  this.offsetx=this.offsetx
	  this.offsety = this.offsety
	  var options = {
					 bodyA:body1,
					 bodyA:body2,
					 pointB:{x:this.offsetx,y:this.offsety}
	  }
	}
	engine = Engine.create();
	world = engine.world;
   {
	//consol.log(options).
	this.rope=construct.create(options)
	World.add (world,this.rope)
}
rope=new rope(bobobject1.body,roofobject.body,bobdiameter*2,7)
function preload()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




