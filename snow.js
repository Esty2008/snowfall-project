class Snow{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(myWorld, this.body);
        this.image = loadImage("snow4.webp");
      }
      
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
}