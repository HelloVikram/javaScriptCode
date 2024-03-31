const Employee=[
   {name:'Vikram',age:22},
   {name:'aman',age:21} ,
   {name:'priya',age:23},
   {name:'mohan',age:40},
   {
    name:'himesh',age:24
   }
]

let comparator = (a,b)=>{
    return b.age - a.age;
}
Employee.sort(comparator);
Employee.forEach(element => {
    console.log(element.name);
});