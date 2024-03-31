class queue{
    constructor(){
        this.front=-1;
        this.rear=-1;
        this.size=5
        this.arr=[this.size];
    }
    isempty(){
        if(this.rear==this.front)
        return true
        else
        return false
    }
    isfull(){
    if(this.rear==this.size-1)
    return true
    else 
    return false
    }
    enqueue(ele){
     if(this.isfull())
     console.log("overflow")
    else{
        this.rear++;
        this.arr[this.rear]=ele;
    }
    }
    dequeue(){
        if(this.isempty()){
            console.log("underflow")
        }
        else{
            
           let k= this.arr[this.front];
           this.front++;
           return k;
        }
    }
    display(){
        for(let i=this.front+1;i<=this.rear;i++)
        {
            console.log(this.arr[i])
        }
    }
}
obj=new queue();
obj.enqueue(5);
obj.enqueue(6);
obj.enqueue(7);
obj.enqueue(8);
obj.enqueue(9);
console.log(obj.isempty());
console.log(obj.isfull());
obj.display();
obj.dequeue();
obj.display();