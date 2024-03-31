class a{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    show(){
        console.log(this.x);
        console.log(this.y);
        console.log("In class a");
    }
}
class b extends a{
    constructor(p,t,x,y){
      super(x,y);
      this.p=p;
      this.t=t;  
    }
    show(){
        console.log(this.p);
        console.log(this.t);
        console.log(this.x);
        console.log(this.y);
        console.log("In class b");
        super.show();
    }
}
var obj1=new a();

var obj=new b(4,5,6,7);
obj.show();