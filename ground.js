class Ground{
    constructor(){
        this.body=Bodies.rectangle(400,680,1100,40,{isStatic:true});
        this.image = loadImage("gr.png");
        World.add(world,this.body);

    }
    display(){
        imageMode(CENTER);
        fill("grey");
        image(this.image,400,700,1200,50);
    }
}