function Pipe(){

  this.top = random(height/2.4,height/3.5);
  this.bottom = random(height/2.4,height/3.5);
  this.x = width;
  this.w = 20;
  this.speed = 2;
  
this.highlight = false;





this.hits = function(bird){
if (bird.y < this.top || bird.y > height - this.bot){
  
 if (bird.x > this.x && bird.x +this.w) {
     this.highlight = true
     return true
 }


}
this.highlight = false;
return false;

}


  this.show = function(){
      fill(155,255,115)
      if(this.highlight){
          fill(222,0,0)
      }
      rect(this.x , 0 ,this.w , this.top);
      rect(this.x , height-this.bottom ,this.w , this.bottom);
  }

  this.update = function(){
      this.x -= this.speed;
  }

  this.offscreen = function() {
      if (this.x < -this.w) {
          return true;
      }else{
          return false;
      }
  }

}