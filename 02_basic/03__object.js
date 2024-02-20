//obj singleton
    // created only when object is created by constructor method

 // obj literals

 const mySyn=Symbol('mykey1')

 const myUsers={
    name:'Jikesh',
    "full name":'Jikesh Raj',
    [mySyn]:'mykey2',  //for symbol key will be define in []
    email:'jikesh@google.com',
    location:'patna',
    islogedin:Boolean(),
    lastLogedin:['mon','sat']
 }
 

 myUsers.email='jikesh@facebook.com'
 console.log(myUsers[mySyn]);
//  Object.freeze(myUsers); // freez the object we can not change the after this.
 myUsers.email='hdcbdccb'
 myUsers.abc='abc'
//  console.log(myUsers);

 myUsers.greeting=function() {
    console.log('hello my users');
    // return "hello"
 }
//  console.log(myUsers.greeting());

 myUsers.greetngTwo=function(){
    console.log(`hello my user ${this.name}`) // this keyword is used because it refer the same obj 
    // string interpolation is used
 }
//  console.log(myUsers.greetngTwo());
//  console.log(myUsers);