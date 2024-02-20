// immediately invoked function expression (iife)

//defination  ()()   first () for function defination and second () for execution

// what is iife   ;-
//global scope ke polution se problem hoti hai kai bar uss global scope ke jo variable hhai ya jo bhi declartaion hai
    // uske polution ko  hatane ke liye hamne iife a use kiya

(function jiku(){
    //named iife
    console.log(`jiku`);
})(); //whhen we write two iife then ; must in first iife

((name)=>{
    //unnamed iife
    console.log(`Db connected ${name}`);
})('jiku');