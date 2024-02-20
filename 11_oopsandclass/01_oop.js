/*
----oops--object orianted programming----
object   :-  collection of properties and method

their are four pillars of oops
1.abstraction
2.encapsulation
3.ploymorphisum
4.inheritance

need to study
Object literal

.Constructor function
.Prototypes
.Classes
.Instances (new, this)
*/

//Object literal

const obj={
    username:'Jikesh',
    attemptLogin:11,
    islogedin:true,
    detail: function(){
         console.log(this.username);
        //  console.log(this);  //return current context (means obj object)
    }
}
// console.log(obj.detail());
// console.log(this);  // return empty object

//-------------constructor object------------

function newobj(username,attemptlogin,islogedin){
    this.username=username;
    this.attemptlogin=attemptlogin;
    this.islogedin=islogedin;
    this.detail=function(){
        console.log(this.username);
    }

    return this;
}
const obj1=new newobj('raj',12,false)  //new keyword is a constructor function
const obj2=new newobj('jiku',13,true)
//when not use new key then obj1 replace with obj2
// constructor function is used to creste new instances means obj1 is 1 instance and obj2 is another instance
//constructor function allow to create multiple instances from one object
console.log(obj1.detail());
console.log(obj2.detail());


//javascript is primary prototype-based language and its classes are primilary syntectic sugar over existing prototype-based
// inheritance machenisum
