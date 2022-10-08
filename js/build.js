class build
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.buildWidth=700;
		this.buildHeight=600;
		this.buildThickness=10;
		
		this.image=loadImage("images/apartment.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.buildWidth, this.buildThickness, {isStatic:true})
		World.add(world, this.bottomBody)

	}
	
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.buildHeight/2,this.buildWidth, this.buildHeight)
			pop()
			
	}

}