var path_moving,path
var runner,runner_running
var boundary,boundary1
var Edges
function preload(){
  //pre-load images
path_moving=loadAnimation("path.png")
runner_running=loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addAnimation("moving",path_moving)
  path.velocityY = 15;
  path.scale=1.2
  runner=createSprite(200,200,100,100)
  runner.addAnimation("running",runner_running)
  runner.scale=0.1
  boundary=createSprite(375,190,20,400)
  boundary1=createSprite(30,190,20,400) 
  boundary.visible=false 
  boundary1.visible=false
}


function draw() {
  background(0)
Edges=createEdgeSprites()
  runner.collide(Edges[3])
  runner.collide(boundary);
  runner.collide(boundary1);
  if(path.y > 350){
path.y=height/2
  }
  runner.x = World.mouseX;
  console.log(runner.x)
  drawSprites()

}
