const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//creating a var for Box class object
var box1;
var box2;
var ground;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   
     //need to make box1 an object of Box class
     //this will call the constructor
     box1 = new Box(210,200,50,60)
     box2 = new Box(200,150,60,60 )
    ground=new Ground(200,380,400,20)
   

    
}

function draw(){
    background(0);
    Engine.update(engine);
    //display box1 
    box1.display();
    box2.display();
    ground.display();
}