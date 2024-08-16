// You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data :-

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

let stud1 = new User("Kunaal","abc@gmail.com");
let stud2 = new User("name2 ","def@gmail.com");
console.log(stud1);
console.log(stud2);

let teacher1 = new User("HOD","hod@gmail.com");
teacher1.viewData();
