class Ball {
  constructor(x, y, w, h) {
    let options = {
      restitution: 0.8
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;

    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    ellipse(0, 0, this.w, this.h);
    pop();
  }

  barrierDetection(){
   

    if(Matter.Collision.collides(this.body, barrierBottom, [pairs])){
      gameOver.visible = true
      
     }else{
      collision|Null
     }

     if(Matter.Collision.collides(this.body, barrierRight, [pairs])){
      gameOver.visible = true
     }else{
      collision|Null
     }


     if(Matter.Collision.collides(this.body, barrierLeft, [pairs] )){
      gameOver.visible = true
     }else{
      collision|Null
     }

     if(Matter.Collision.collides(this.body, barrierTop, [pairs])){
      gameOver.visible = true
     }else{
      collision|Null
     }
  }

  
}
