// var isPalindrome = function(s) {
//     let str=""
//     for(let i=s.length-1;i>=0;i--){
//      if((s[i]>=65&&s[i]<=91)||(s[i]>=97&&s[i]<=122)){
//          str+=s[i].toLowerCase();
//      }
//     }
//     console.log(str.split('').reverse().join());
   
// }
isPalindrome = function(s) {
    for(let i=s.length-1;i>=0;i--){
     if((s.charCodeAt(i)>=65&&s.charCodeAt(i)<=91)||(s.charCodeAt(i)>=97&&s.charCodeAt(i)<=122)){
         console.log(s[i].toLowerCase());
     }
    }
    
   
}
isPalindrome("MY Name is $%ILakhan1");