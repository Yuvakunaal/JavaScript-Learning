// Create a new class called Admin which inherits from User. Add a new method called edtData to admin that allows it to edit website data
data = "This is website data."
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Data =",data);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email); 
    }
    editData(){
        data = "some new value";
    }
}

let stud1 = new User("Kunaal","abc@gmail.com");
let stud2 = new User("name2 ","def@gmail.com");
console.log(stud1);
console.log(stud2);

let teacher1 = new User("HOD","hod@gmail.com");

let admin = new Admin("admin","ad@gmail.com");
console.log(admin);
admin.viewData();

admin.editData();
console.log(admin);
admin.viewData();