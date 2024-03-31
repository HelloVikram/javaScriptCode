class Deque{
    constructor()
    {   this.capacity=5;
        this.items=[this.capacity];
        this.size=0;
        this.front=-1;
        this.rear=-1;
    }
    Enqueuefront(val){
        if(this.isEmpty()){
            this.front=0;
            this.rear=0;
            this.items[this.front]=val;
            this.size++;
        }
       else if(this.front>0){
      this.front--;
      this.items[this.front]=val;
    }
    else{
        if(this.isFull()){
            console.log("Full...!");
        }
        
        else
        {
         for(let i=this.rear+1;i>0;i--){
            this.items[i]=this.items[i-1];
         }
         this.rear++;
         this.items[this.front]=val;
         this.size++;
        }
    } 
    }
    Enqueuerear(val){
    if(this.isFull()){
        console.log("Full!");
    }
    else{
        this.rear++;
        this.items[this.rear]=val;
        if(this.front=-1)
        this.front=0;
        this.size++;
    }
    }
    Dequeuefront(){
   if(this.isEmpty())
   return 'Empty';
   else{
    let p=this.items[this.front];
    this.items[this.front]=null;
    this.front++;
    this.size--;
    if(this.isEmpty()){
        this.front=-1;
        this.rear=-1;
    }
    return p;
   }
    }
    Dequeuerear(){
     if(this.isEmpty())
     return `Empty...`;
    else{
      let p=this.items[this.rear];
      this.items[this.rear]=null;
      this.rear--;
      this.size--;
      if(this.isEmpty()){
        this.front=-1;
        this.rear=-1;
      }
      return p;
    }
    }
    isEmpty(){
        return this.size==0
    }
    isFull(){
        return this.size==this.capacity;
    }
    peekfront(){
        return this.items[this.front];
    }
    peekrear(){
        return this.items[this.rear];
    }
    display(){
        let str="";
        if(this.isEmpty()){
            console.log("Empty");
        }
        else{
        for(let i=this.front;i<this.rear+1;i++){
            str+=this.items[i];
        }
        console.log(str);}
    }
}
let object=new Deque();
console.log(object.isEmpty());
console.log(object.isFull());
object.Enqueuerear(7);
object.Enqueuerear(8);
object.Enqueuerear(9);
object.Enqueuefront(10);
object.Enqueuefront(11);
object.display();
console.log(object.peekfront());
console.log(object.peekrear());
console.log(object.Dequeuerear());
console.log(object.Dequeuefront());
console.log(object.Dequeuerear());
console.log(object.Dequeuefront());
console.log(object.Dequeuefront());
object.display();
