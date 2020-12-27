const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
 const Events = Matter.Events;
const World = Matter.World;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;



function setup() {
  createCanvas(800,400);
background("grey");


engine = Engine.create();
world = World.create();
World.add(world,engine);

  Ground = new ground(width/2,height,width,20);


  for (var k = 0; k = 200; k = k + 80) {
    divisions.push(new division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var i = 75; i <=width; i=i+50) 
  {
       plinkos.push(new plinko(i,75));
  }

  for (var i = 50; i <=width-10; i=i+50) 
  {
       plinkos.push(new plinko(i,175));
  }
  
  for (var i = 75; i<=width; i=i+50) 
  {
       plinkos.push(new plinko(i,275));
  }

   for (var i = 50; i <=width-10; i=i+50) 
  {
       plinkos.push(new plinko(i,375));
  }

}

function draw() {
  background(255,255,255); 
  
  Engine.update(engine);
  Ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  
  drawSprites();
}