function user(username,email,password){
  this._username=username
  this.email=email
  this.password=password

  Object.defineProperty(this,'username',{
      get:()=>{
        return this._username.toUpperCase()
      },
      set:(val)=>{
        this._username=val
      }
  })
}


const u1=new user('abc','a@a.com','123456')
console.log(u1.username);