//javascript is a prototypal behaviour
//javascript har nahi manti hai jab tak ki usse null value na mil jaye 
//value dhunhne ke liye o parent grand parent tak chali jati jabtak usse null na mil jaye yahi hai prototype behaviour

const user={
    username:'jiku',
    email:'jiku@google.com'
}
const techer={
    available:true
}

const assistent={
    parmanent:true
}

const techer1=Object.setPrototypeOf(techer,user)
//Object.setPrototypeOf(techer,user) is used to acces the all property of user in teacher
// console.log(techer1.username);

const myHero=['a','b']
Array.prototype.addElement=function(){
    console.log(this);
}
// myHeros.addElement()

const obj={
    a:'a',
    b:'b'
}

Object.prototype.aAndb=()=>{
    return `${this.a='c'}`
}

console.log(obj.aAndb());
console.log(obj);


//--------------------------------------------------------//-----------------------------------------

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()