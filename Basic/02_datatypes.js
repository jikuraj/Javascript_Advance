"use strict"; // treat all js code as a newer version

//alert(3+3)  //we are using node js not a browser

// console.log(3
//     +3) // code readablity should be high

let name="jikesh"
let age=18
let islogedin=true

//number=>  2 to power 53
//bigint
//string => ""
//boolean=> true/false
//null =>standalone value    it return as a oject in typeof
//undefined=>
//symbol =>unique   use for uniquness


//object

// console.log(typeof undefined);  //undefined
// console.log(typeof null); //object


/*
Datatypes
type of datatype 
datatype categories on the basis of memory i.e  how the data is stored in memory and how to trived it.
on the basis of these their are two types of data
1.  primitive type(value type)
   .number , string, BigInt,boolean,undefined ,null , Symbol
2.  non primitive type(refrence type)
   .array  , object ,function
*/

const id=Symbol('123');
const anotherid=Symbol('123')
console.log(id===anotherid);


/* 
        +++++++++++++++++++++++++++++++++++Memory++++++++++++++++++++++++++++++++++
        Type of memory
        Their are two type of memory
        1.stack memory (primitive) give a copy of same variable to another variable
        2.heap memory (refrence type) give a refrence of same value to two diffrent variable
*/