class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
      return this._email.toUpperCase()
    }
    set email(val){
        this._email=val
    }
    get password(){
        return `${this._password}AbCd@`
    }
    set password(val){
        this._password=val
    }
}
const user=new User('j@db.com','12345')
console.log(user.password);