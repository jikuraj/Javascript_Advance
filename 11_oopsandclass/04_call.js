function setUser(username){
   this.username=username;
   console.log('setuser');
}

function createUser(username,email,password){
    setUser.call(this,username)
    this.email=email
    this.password=password

    return this
}

const user=new createUser('jikesh','jikesh@google.com','12345')

console.log(user);

//call jo hai current execution context kissi or function ko pass kar deta hai