/**
 Promise
The Promise is an object which represents the eventual completion (or failure) of an asynchronous operation and
its resulting value.

explaination:-
promisses add the task in a task queue not execute the task instantly


A Promise is in one of these states:

1.pending: initial state, neither fulfilled nor rejected.
2.fulfilled: meaning that the operation was completed successfully.
3.rejected: meaning that the operation failed.


   //Do an async task
    // DB calls, cryptography, network
 */
// const fetch = require("node-fetch");


const promisOne=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('first promisses called')
        resolve()
    },1000)
})
promisOne.then(()=>{
    console.log('first is consumed');
})

//------------------------------//-------------------------------

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('second promisses executed');
        resolve()
    },1000)
}).then(()=>{
    console.log('second promisses consumed');
})

//---------------------------------//------------------
const promisThree=new Promise((resolve,reject)=>{
          setTimeout(()=>{
               resolve({userName:'abc',password:'12345'})
          })
},1000)

promisThree.then((user)=>{
console.log(user);
})

//--------------------------//---------------------------

const promisFour=new Promise((resovle,reject)=>{
    setTimeout(()=>{
        const err=false;
        if(!err){
            resovle({username:'raj',password:'123456'})
        }else{
            reject('error : Something went wrong')
        }
    },1000)
})

promisFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
  console.log(username);
}).catch((error)=>{
    console.log(error);
})

//---------------------------------//---------------------------------

const promisFive=new Promise((resovle,reject)=>{
    setTimeout(()=>{
        const err=false;
        if(!err){
            resovle({username:'jiku',password:'raj'})
        }else{
            reject('error : Something went wrong ! ! !')
        }
    },1000)
})

const   consumepromiseFive=async()=>{
          try {
            const result= await promisFive
             console.log(result.username);
          } catch (error) {
            console.log(error);
          }
}
consumepromiseFive()

//-------------------------------//---------------------------

// const getUserDetail=async()=>{
//     try {
//         const response=await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('err:- ',error);
//     }
// }
// getUserDetail()

//----------------------------------------//-------------------

//fetch()
/*
.fetch called two things one is data and second is web borwser or node api
web browser or node api call network and then network success and reject response send to the onfullfilled[] and onrejection[]
and this send to the data and data send to the memory of variable


.The global fetch() method starts the process of fetching a resource from the network, 
returning a promise that is fulfilled once the response is available.

.fetch() request execute fastly as compare to other async method 
.fetch() add the task on micro task queue or priority task queue or fetch task queue

*/

fetch('https://api.github.com/users/hiteshchoudhary')
     .then((response)=>{
          return response.json();
     })
     .then((data)=>{
        console.log(data);
     })
     .catch((error)=>{
   console.log('erro',error);
     }) 