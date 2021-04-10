
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine,world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;


function preload(){
    polygon_img = loadImage("polygon.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(900,400);
    ground = new Ground();
    stand1 = new Stand(380,300,270,10);
    stand2 = new Stand(700,200,200,10);

    //level 1
    block1 = new Block(280,275,30,40);
    block2 = new Block(310,275,30,40);
    block3 = new Block(340,275,30,40);
    block4 = new Block(370,275,30,40);
    block5 = new Block(400,275,30,40);
    block6 = new Block(430,275,30,40);
    block7 = new Block(460,275,30,40);
    block8 = new Block(490,275,30,40);

    //level 2
    block9 = new Block(310,235,30,40);
    block10 = new Block(340,235,30,40);
    block11 = new Block(370,235,30,40);
    block12 = new Block(400,235,30,40);
    block13 = new Block(430,235,30,40);
    block14 = new Block(460,235,30,40);

    //level 3
    block15 = new Block(340,195,30,40);
    block16 = new Block(370,195,30,40);
    block17 = new Block(400,195,30,40);
    block18 = new Block(430,195,30,30);

    //level 4
    block19 = new Block(370,155,30,40);
    block20 = new Block(400,155,30,40);

    //level 5
    block21 = new Block(385,115,30,40);

    //set 2
    //level 1
    blocky1 = new Block(640,175,30,40);
    blocky2 = new Block(670,175,30,40);
    blocky3 = new Block(700,175,30,40);
    blocky4 = new Block(730,175,30,40);
    blocky5 = new Block(760,175,30,40);

    blocky6 = new Block(670,135,30,40);
    blocky7 = new Block(700,135,30,40);
    blocky8 = new Block(730,135,30,40);

    blocky9 = new Block(700,95,30,40);

    ball = Bodies.circle(50,200,20);
    World.add(world, this.ball);

    slingShot = new SlingShot(this.ball,{x:200,y:200})



}

function draw(){
    background("brown");
    Engine.update(engine);

    strokeWeight(2);
    stroke(15);
    fill("red")

    stand1.display();
    stand2.display();

    stroke(15);
    fill("cyan");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();

    stroke(15);
    fill("pink");
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();

    stroke(15);
    fill("turquoise")
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    stroke(15);
    fill("orange")
    block19.display();
    block20.display();

    stroke(15);
    fill("gray")
    block21.display();

    stroke(15);
    fill("cyan");
    blocky1.display();
    blocky2.display();
    blocky3.display();
    blocky4.display();
    blocky5.display();

    stroke(15);
    fill("pink");
    blocky6.display();
    blocky7.display();
    blocky8.display();

    stroke(15);
    fill("orange");
    blocky9.display();
    
    fill("yellow")
    slingShot.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}