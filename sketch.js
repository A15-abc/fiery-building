
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var buildObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,house;

function preload(){
	house=loadImage("images/house.png");
	backgroundImg = loadImage("images/R.jpg");
	//stoneObj=loadImage("images/stone.png");
  }

function setup() {
	createCanvas(1300, 750);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(940,250,30);
	mango2=new mango(1170,250,30);
	mango3=new mango(1070,250,30);
	mango4=new mango(1000,250,30);
	mango5=new mango(1170,380,30);
	

	buildObj=new build(1050,630);
	groundObject=new ground(width/2,700,width,240);
	
	stoneObj=new stone(258,450,30);
	
	launcherObject=new Launcher(stoneObj.body,{x:235,y:350});
	
	//Engine.run(engine);

}

function draw() {
	
	image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);
  image(house ,50,310,450,320);

  buildObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();

  stoneObj.display();
  launcherObject.display();

detectcollision(stoneObj,mango1);
detectcollision(stoneObj,mango2);
detectcollision(stoneObj,mango3);
detectcollision(stoneObj,mango4);
detectcollision(stoneObj,mango5);
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
		
		launcherObject.attach(stoneObj.body);

	
	}
}

function detectcollision(stone, mango){


	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position
	

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	
	if(distance<=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
	}

}

function mouseDragged(){
Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
	launcherObject.fly();
}