class plinko {
    constructor(x,y){
        var options ={
            isStatic:true,
            restitution:1
        }
        
        this.radius = 5;
        this.body = Bodies.circle(x,y,this.radius,options);
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
};