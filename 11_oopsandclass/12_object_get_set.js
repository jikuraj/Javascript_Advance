const User={
    _email:'jiku@fb.com',
    _password:'12345'
}

Object.defineProperty(User,'email',{
    get:function(){
        return this._email.toUpperCase()
    },
    set:function(val){
        this._email=val
    }
})
Object.defineProperty(User,'password',{
    get:function(){
        return `${this._password}abcd`
    },
    set:function(val){
        this._password=val
    }
})
console.log(User.password);