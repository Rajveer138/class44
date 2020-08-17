class Boy {
    constructor() {
      /*var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);*/
      this.pos = createVector(width/2,height/2);
      this.side = 20;
      this.heading = 0;
      this.rotation = 0;
    }
    display(){
      noFill();
      stroke(255);
      translate(this.pos.x,this.pos.y);
      angleMode(RADIANS);
      rotate(this.heading);
      triangle(this.side,this.side,0,-this.side,-this.side,this.side);
    }
    turn(){
      this.heading+=this.rotation;
    }
    setRotation(angle){
      this.rotation = angle;
    }
  }