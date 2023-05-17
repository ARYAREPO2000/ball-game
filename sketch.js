const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var barrierLeft, barrierRight, barrierBottom, barrierTop
var gameOver;
var gameOverImg

function preload(){
gameOverImg = loadImage("./assets/download.png");


}
function setup() {
   createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;


  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  barrierBottom = new Barrier(250,499,1000,10)
  barrierRight = new Barrier(499,250,10,1000)
  barrierTop = new Barrier(250,1,1000,10)
  barrierLeft = new Barrier(1,250,10,1000)

  gameOver = createSprite(width/2,height/2);
  gameOver.addImage("download.png",gameOverImg,);
  gameOver.scale=1
  gameOver.visible = false
  

  rectMode(CENTER);
  ellipseMode(RADIUS);


}

function draw() {
  background(59);
  Engine.update(engine);


  ball.show();
  barrierBottom.show();
  barrierRight.show();
  barrierTop.show();
  barrierLeft.show();
   
   

  if (keyIsDown(LEFT_ARROW)) {
    Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:-0.05, y:0});
  }

  if (keyIsDown(RIGHT_ARROW)) {
    Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.05, y:0});
  }

 if(keyIsDown(UP_ARROW)){
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05});
 }

}

