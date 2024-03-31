strs=["hello","float","flee"];
let newstr="";
strs.sort();
console.log(strs);
for(let i=0;i<strs[0].length&&strs[strs.length-1];i++){
  if(strs[0][i]===strs[strs.length-1][i]){
      newstr+=strs[0][i];
  }
  else {
      break;
  }
}
