class Tree {
    
    constructor(){
        this.tree=Bodies.rectangle(800,480,200,50,{isStatic:true})        
        World.add(world,this.tree)
      this.image = loadImage("tree.png");

        }
        
    display(){
        imageMode(CENTER);
       image(this .image,this.tree.position.x,this.tree.position.y,200,470)
        
        }
}