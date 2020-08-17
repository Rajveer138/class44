
var flag = "invisible";

function setup() {
  createCanvas(windowWidth,windowHeight);
boy = new Boy();

}

function draw() {
  background(0);  
  boy.display();
  boy.turn();
}
function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    boy.setRotation(0.1);
  }else if(keyCode===LEFT_ARROW){
    boy.setRotation(-0.1);
  }
}
function keyReleased(){
  boy.setRotation(0);
}