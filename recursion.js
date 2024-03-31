sum=function(i,n){
    if(i>=10||i==n)
 return 0
 return i+sum(i+2,n);
}
console.log(sum(0,5));