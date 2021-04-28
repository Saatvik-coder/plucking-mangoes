class Stone {
    constructor(){
       
        this.body = Bodies.circle(98,595,20,{isStatic:true});
        this.scale = 0.10;
        this.image = loadImage("stone.png");
        World.add(world,this.body)
    }
    display(){
        push();

        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        
     
        pop();
    }
}