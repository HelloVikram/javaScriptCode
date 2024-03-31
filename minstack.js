let stack=[];
let minstack=[];
let Push=function(val){
    if(stack.length==0){
        stack.push(val);
        minstack.push(val);
    }
    else{
        if(val<=minstack[minstack.length-1])
        minstack.push(val);
        stack.push(val);
    }
}
let Pop=function(){
    if(stack.length==0){
        return -1;
    }
    else{
        if(stack[stack.length-1]==minstack[minstack.length-1])
        minstack.pop();
        stack.pop();
    }
}
let top=function(){
    if(stack.length==0)
    return -1;
    else
    return stack[stack.length-1];
}
let getMin=function(){
    if(minstack.length==0)
    return -1;
else
return minstack[minstack.length-1];
}
Push(5);
Push(6);
Push(7);
console.log(top());
console.log(getMin());
Push(3);
console.log(top());
console.log(getMin());
Pop();
console.log(top());
console.log(getMin());