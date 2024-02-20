//function :-a set of statements that performs a task or calculates a value

function myName(){
  console.log('jikesh');
}
myName();  //myName refrence of function and () means executiion of function


function addTwoNumber(n1,n2){
  console.log(n1+n2);
}

// let results=addTwoNumber(2,3)
// console.log(results);  //undefined because we can not return any value from function


function addTwoNumber(n1,n2){
    return n1+n2
    console.log('jikesh'); //log not printed because after return statment nothing has been execute
}
let results=addTwoNumber(2,3)
console.log(results);   // resuts 5 because function return the value


function isLogedIn(username='sam'){
    if(!username){
        return console.log('please submit username');
    }
    return `${username} just logged in`
}
//isLogedIn('jikesh')  //nothiing is printed because we can not print any thing
console.log(isLogedIn('ji')); //when argument is empty then  parameter is undefined so we can use condtion in above function

let myArr=[1000,22,334,555,23]
let myObj={
    name:'ssam',
    price:100
}
function ojectDetail(obj){
   return `name is ${obj['name']} and price is ${obj['price']}`
}
console.log(ojectDetail(myObj));

function getSecondNuumber(arr){
   return arr[1]
}
// console.log(getSecondNuumber(myArr));


//rest operator   it is used in function parameter

function calculateCartPrice(...num){
    let sum=num.reduce((acc,curr)=>(acc+curr),0)
    return sum;
}
console.log(calculateCartPrice(100,2,45,67));

