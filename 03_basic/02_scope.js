
//globle variable 
// let a=100
// const b=20
// var c=30

//block scope variable
// if(true){
//     let a=10
//     const b=20
//     var c=30
    
// }
// console.log(a);  //we get error because a is a block scope
// console.log(b);  //we get error because b is a block scope
// console.log(c);  //we get 30 because c is not a scope variable i.e problem with var key word

let a=300 //global scope
if(true){
    let a=10 // block scope
    const b=20
    console.log('inner',a);  //inner 10
    
}
console.log(a); // 300


//------------------------------------nasted--------------------------//
 
function one(){
    const username='jikesh'

    function two(){   //note in nested scope or function child function can access the parrent variable but parent can not. 
        const website='youtube'
        console.log(`${username} ${website}`);
    }
    // console.log(website);
    two();
}
one()

// ----------------------intresting----------------------//
// we can call addone above the function as well addone()
function addone(num){
    return num + 1;
}
addone(5)


//in this we can not call addTwo() above the function
const addtwo=function(num){  //when we declair the like this called expression
    return num+2
}
addtwo(6)