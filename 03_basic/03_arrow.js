// this key word refer current context . 
// current context means current value of scope

// in the browser global object is windows  object
// on node environment this key return {} and on browser enviornment this key return windows object

//we can not use this in arrow function



//--------------------------this in object-----------//

const users={
    username:'jikesh',
    price:999,

    welcomemssg: function(){
        // console.log(`${this.username}, welcome to my page`);
        // console.log(this); //return current context or value
    }

}
users.welcomemssg()
users.username='ssam'
users.welcomemssg()

// console.log(this); //return {} obbbject

/*
result
jikesh, welcome to my page
{
  username: 'jikesh',
  price: 999,
  welcomemssg: [Function: welcomemssg]
}
ssam, welcome to my page
{ username: 'ssam', price: 999, welcomemssg: [Function: welcomemssg] }
{}  liine 27 ressult
*/


//------------this in function----------------------//

function one(){
    const usr='raj'
    // console.log(this); //return object of [global] value in functon
    // console.log(this.usr); // undefined
}
one()

const two=function(){
    const usr='raj'
    //  console.log(this); //return object of [global] value in functon
    //  console.log(this.usr); // undefined
}
two()

//------------------arrow fuunction-------------//

const three=()=>{
    const usr='raj'
    // console.log(this) // in arrow function this return {} object buut not in genral function
    // console.log(this.usr); // undefined
}
three();
//explicit return arrow fuunction
 const addTwo=(num1,num2)=>{
    return num1+num2
 }
 console.log(addTwo(33,4));
 //note when we use {} then return keyword must to return the value

// implicit return arrow function
const addNum=(num1,num2)=>(num1+num2);
console.log(addNum(5,2));
// note when we not use {} then we need to () to return the value else write return num1+num2 in above code

//when return object
const returnObj=(obj)=>({names:'raj'})
console.log(returnObj().names);

