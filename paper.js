class Paper {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        } 
    this.body = Bodies.circle(x,y,radius,options);
    World.add(world, this.body);
    this.body=loadImage("paper.png");
    }

    display(){
        var pos = this.body.position;
        fill("pink");
        circle(pos.x, pos.y, this.radius);
    }
}