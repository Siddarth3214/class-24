const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,500,50,50);
    box2 = new Box(850,500,50,50);
    box3 = new Box(1000,400,50,50)
    box4 = new Box(850,400,50,50)
    box5 = new Box(925,325,50,50)
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(925,500)
    pig2 = new Pig(925,400)
    log1 = new Log(925,480,200,PI/2);
    log2 = new Log(925,380,200,PI/2);
    log3 = new Log(880,300,125,PI/6)
    log4 = new Log(950,300,125,-PI/6)
    bird = new Bird(30,400,20,20)
}
 
function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}