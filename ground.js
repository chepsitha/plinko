class ground{
    constructor(x,y,width,height){
        var options ={
            isStatic:true,
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
display(){
var posx = this.body.position.x;
var posy = this.body.position.y;
rectMode(CENTER);
fill(225);
rect(posx,posy,this.width,this.height);

}
};