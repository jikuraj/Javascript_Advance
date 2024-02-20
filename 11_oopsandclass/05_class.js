// class

class User {
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUser(){
        return `${this.username.toUpperCase()}`
    }
}
const jiku=new User('jiku','jiku@google.com','123')
console.log(jiku);
console.log(jiku.encryptPassword());
console.log(jiku.changeUser());

//Behind the scene

function User(username,email,password){
        this.username=username
        this.email=email
        this.password=password
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User.prototype.changeUser=function(){
    return `${this.username.toUpperCase()}`

}
const jikku=new User('jiku','jiku@google.com','123')
console.log(jikku);

console.log(jikku.encryptPassword());
console.log(jikku.changeUser());