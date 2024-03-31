let Data='old value';
class User{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }
    viewdata(){
    console.log(Data);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        Data='new value'
    }
}
 
let Userobj=new User('Vikram',"123@gmail.com");
let Adminobj=new Admin;
Userobj.viewdata();
Adminobj.editdata();
Userobj.viewdata();
