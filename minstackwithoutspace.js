let stack=[];
let minele;
let Push=function(val){
    if(stack.length==0){
        stack.push(val);
        minele=val;
    }
    else{
        if(val>minele)
        stack.push(val);
        else if(val<=minele){
            stack.push(2*val-minele);
            minele=val;
        }
    }
}
let Pop=function(){
    if(stack.length==0){
        return -1;
    }
    else{
        if(stack[stack.length-1]>minele)
        stack.pop();
       else if(stack[stack.length-1]<=minele){
        minele=2*minele-stack[stack.length-1];
        stack.pop();
       }
    }
}
let top=function(){
    if(stack.length==0)
    return -1;
    else{
        if(stack[stack.length-1]>minele){
            return stack[stack.length-1];
        }
        else{
            return minele;
        }
    }
    
}
let getMin=function(){
    if(stack.length==0)
    return -1;
else
return minele;
}
Push(5);
Push(6);
Push(7);
console.log(top());
Push(3);
console.log(top());
Pop();
console.log(top());
console.log(getMin());