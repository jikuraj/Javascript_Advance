//singletone object

//const objn1= new Object(); // singletone object

//non singletone object
const objn1={}         

objn1.name='one'
objn1.email='one@gmail.com'
objn1.isLogedIn=false
// console.log(objn1);

const testObj={
    email:'tesst@gmail.com',
    fullname:{
        username:{
            fname:'x',
            yname:'y'
        }
    }
}
// console.log(testObj.fullname.username.fname);

//combined two object
 let obj1={1:'A',2:'B'}
 let obj2={3:'A',4:'B'}
 let obj3={5:'A',6:'B'}

 let obj4=Object.assign({},obj1,obj2,obj3)  //used to combined all obbj
 console.log(obj4);

 let obj5={...obj1,...obj2,...obj3} //spreed method
 console.log(obj5);

 const users=[
    {
        emai:'a@',
        id:'123abc'
    },
    {
        emai:'a@',
        id:'123abc'
    },
    {
        emai:'a@',
        id:'123abc'
    },
    {
        emai:'a@',
        id:'123abc'
    }
 ]
 console.log(users[1].emai)


 //results below
 console.log(objn1);
console.log(Object.keys(objn1));
console.log(Object.values(objn1));
console.log(Object.entries(objn1));
console.log(Object.hasOwnProperty('name'));

/*
{ name: 'one', email: 'one@gmail.com', isLogedIn: false }
[ 'name', 'email', 'isLogedIn' ]
[ 'one', 'one@gmail.com', false ]
[
  [ 'name', 'one' ],
  [ 'email', 'one@gmail.com' ],
  [ 'isLogedIn', false ]
]
true
*/


// object destructuring

const course={
    title:'javascript',
    owner:'jikesh',
    price:'$10000'
}

let {title:t,owner:o,price:p}=course
console.log(t);