class Paper{
    constructor(x,y,r){
        var options={
            restitution: 0.3,
            friction: 2.0,
            density: 6
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,this.r/2, options);
        
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        fill("deeppink");
        ellipseMode(CENTER);
        ellipse(0, 0, this.r+30,this.r+30);
        pop();

    }
}