var bird ;
var pipes = [];
var pipeGroup
var score ;
function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
// pipeGroup = new Group();
// pipeGroup.add(pipes = [i])
  score = 0 ;
}

function draw() {
  background(0);

  for (var  i = pipes.length-1; i >= 0; i--){
    pipes[i].show();
    pipes[i].update();

if (pipes[i].hits(bird)){
  console.log("hh")
}

  // score = sc       ore + getframeRate()

  if(pipes[i].offscreen()){
    pipes.splice(i,1)
  }
  
  }

  bird.update();
  bird.show();
  
//  text("SCORE:" + score , 200 , 30)

if(frameCount  % 100 == 0){
  pipes.push(new Pipe());

}







}

function keyPressed(){
  
  if (keyCode === UP_ARROW||key == ' ') {
   bird.up();
   console.log("SPACE")
 }

}


