class Box{
    //creates and sets properties for all objects 
    constructor(x,y,width,height){

         var opts = {
             restitution: 1,
             friction: 0.5,
             density: 0.8
         }
        this.body = Bodies.rectangle(x,y,width,height,opts);
        this.width = width;
        this.height = height ;

        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        //push all objects properties to a stack 
        push();
        //move rect as per pos in physics world
        translate(pos.x,pos.y);
        //roate the rect
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        //getback properties of all other objects from the stack
        pop();
    }
}