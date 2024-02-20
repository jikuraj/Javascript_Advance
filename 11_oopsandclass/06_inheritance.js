class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USER ${this.username} is loged`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`js code is added by ${this.username}`);
    }
}

const teacher=new Teacher('jikesh','jikesh@fb.com','1234')
const user=new User('raj')
console.log(user);
// console.log(user.addCourse()); //cannot access user from teacher
console.log(teacher.addCourse());
console.log(teacher.logMe());  //access teacher from user

console.log(user===teacher); // false
console.log(teacher===Teacher); //false
console.log(teacher instanceof Teacher); //true
console.log(teacher instanceof User); //true

//Behind the scene

// function User(username){
//     this.username=username
// }
// User.prototype.logMe=function(){
//     console.log(`USER ${this.username} is loged`);
// }

// function Teacher(username,email,password){
//     User.call(this,username)
//     this.email=email
//     this.password=password
// }
// Teacher.prototype.addCourse=function(){
//     console.log(`js code is added by ${this.username}`);
// }
// const teachers=new Teacher('jikesh','jikesh@fb.com','1234')
// console.log(teachers.addCourse());
// console.log(teachers);