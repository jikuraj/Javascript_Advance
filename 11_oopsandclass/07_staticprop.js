class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USER ${this.username} is loged`);
    }
    static cerateId(){  //when we use static key word then after we can not access createid any where
        console.log(`USER Id is created by ${this.username}`);
    }
}
//note
//jab static key lagta hai uske bad hum use chij ko kahi or access nahi kar sakte hai
//jaise createid ko or kahi access nahi kar sakte




class Teacher extends User{
constructor(username,email){
    super(username)
    this.email=email
}
}

const myUser=new Teacher('myuser','myuser@user.com')
// console.log(myUser.cerateId());
const user=new User('jikesh')
console.log(user.cerateId()); //createId is not a fuction error occure due to static key