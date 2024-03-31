class circularqueue{
    constructor(val){
        //capacity=5        
        this.capacity=val;
        this.items=[];
        this.size=0;
        this.front=-1;
        this.rear=-1;
    }
    enqueue(val){
    if(this.isFull()){
        console.log("Queue is full");
    }
    else{
        this.rear=(this.rear+1)%this.capacity;
        this.items[this.rear]=val;
        this.size++;
        if(this.front===-1){
            this.front=0;
        }
    }
    }
    dequeue(){
        if(this.isEmpty()){
            return 'Queue is Empty';
        }
        else{
            let p= this.items[this.front];
            this.items[this.front]=null;
            this.front=(this.front+1)%this.capacity;
            this.size--;
            if(this.isEmpty()){
                this.front=-1;
                this.rear=-1;
            }
            return p;
        }
    }
    isFull(){
        if(this.size==this.capacity)
        return true;
        else
        return false;
    }
    isEmpty(){
        if(this.size==0){
            return true;
        }
        else
        return false;
    }
    isfront(){
        if(!this.isEmpty())
        return this.items[this.front];
    }
    isrear(){
        if(!this.isEmpty()){
            return this.items[this.rear];
        }
    }
    peek(){
        return this.items[this.front];
    }
    display(){
        let i=this.front;
        let str="";
        do{
            str+=this.items[i];
            i=(i+1)%this.capacity;
        }while(i!=(this.rear+1)%this.capacity);
        console.log(str);
    }
}



let obj=new circularqueue(5);
console.log(obj.isEmpty());
console.log(obj.isFull());
obj.enqueue(4);
obj.enqueue(5);
obj.enqueue(6);
obj.enqueue(7);
obj.enqueue(8);
console.log(obj.isEmpty());
console.log(obj.isFull());
obj.display();
console.log(`front value=${obj.isfront()} rear value=${obj.isrear()}`)
console.log(obj.peek());
 console.log(obj.dequeue());
 obj.display();
 obj.enqueue(9);
 obj.display();
console.log(obj.isEmpty());
console.log(obj.isFull())
console.log(`front value=${obj.isfront()} rear value=${obj.isrear()}`)
console.log(obj.peek());
console.log(obj.dequeue());
console.log(`front value=${obj.isfront()} rear value=${obj.isrear()}`)
console.log(obj.dequeue());
console.log(obj.peek());