class stack{
 constructor(){
    this.top=-1;
    this.a=[];
 }
 Push(val){
  this.top++;
  this.a[this.top]=val;
 }
 Pop(){
    var t= this.a[this.top];
    this.top--;
    return t;
 }
 Peek(){
    console.log(this.a[this.top]);
 }
 isFull(){
    if(this.top==this.a.length-1)
    return true
    else 
    return false
 }
 isEmpty(){
    if(this.top==-1){
        return true;
    }
    else
    return false;
 }
}
obj=new stack();
obj.Push(5);
obj.Push(3);
obj.Push(1)
console.log(obj.a);
obj.Peek();
obj.Pop();
obj.Pop();
obj.Peek();