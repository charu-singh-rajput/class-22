
const Engine = Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;

var eng,wor;
var ground;
var ball;

function setup(){
  createCanvas(400,400);

  //create engine
  eng=Engine.create();
  //connecting
  wor=eng.world;

  var ground_options={
    isStatic : true
  }

  ground = Bodies.rectangle(0,390,400,20,ground_options);
  //adding both engine and object to world
  World.add(wor,ground);

  var ball_options={
    restitution : 1.0
  }

  ball = Bodies.rectangle(200,100,20,20,ball_options);
  World.add(wor,ball);

  //console.log(object);

}
function draw()
{
  background("black");
  
  Engine.update(eng);

  //rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  rect(ball.position.x,ball.position.y,20,20);

  drawSprites();
}
