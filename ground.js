class Ground {
    constructor(x,y,width){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=20;
    }
    display(){
        push()
        fill("brown")
        rectMode(CENTER)
        rect(this.x,this.yy,this.width,this.height)
        pop()
    }
} 