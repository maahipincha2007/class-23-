class Ground{
    constructor(x,y,width,height){
     var opts={ 
         isStatic: true
     };
     this.body=Bodies.rectangle(x,y,width,height,opts);
     this.width=width;
     this.height=height;
     World.add(world,this.body);
    }
display(){
    var pos=this.body.position;
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
}

}
