function Subset(output,input,ans){
    if(input.length==0){
        ans.push([...output]);
        return;
    }
    else{
        let op1=[...output];
        let op2=input[0];
        input=input.slice(1);
        Subset(op1,input,ans);
        op1.push(op2);
        Subset(op1,input,ans);
    }
}
output=[];
input=[1,2,3];
ans=[];
Subset(output,input,ans);
ans.forEach(element => {
    console.log(element.join(''))
});