//array

const arr1=[0,1,2,3,4,5,6]
/*
Description
array are object which is used to collction of data in program
In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

.JavaScript arrays are resizable and can contain a mix of different data types.
  (When those characteristics are undesirable, use typed arrays instead.)
.JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, 
  but must be accessed using nonnegative integers (or their respective string form) as indexes.
.JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, 
    and so on — and the last element is at the value of the array's length property minus 1.
.JavaScript array-copy operations create shallow copies. 
(All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
Array indices

     .A shallow copy of an object is a copy whose properties share the same references .
     .A deep copy of an object is a copy whose properties do not share the same references
*/


// Method

//note
// const arr2=arr1.push(7)
// console.log('arrr2',arr2)  //result arrr2 8   it gives length of array
arr1.push(7)  //add on last index
arr1.pop()  //remove from last index
arr1.unshift(8)  //add the element on 0 index / it has demarit to use because all ele need to be shift so memory utilisation high
arr1.shift()    // remove form 0 index

console.log(arr1);

console.log(arr1.includes(6));
console.log(arr1.indexOf(6));
console.log(arr1.findIndex((ele=>ele>2))); //doughtable not clear now

//slice and splice

console.log('Orignal',arr1);

const arrN1=arr1.slice(1,3) // in slice method array are not change and range are exclude
console.log('A',arr1);
console.log(arrN1);

const arrN2=arr1.splice(1,3)  //note   in splice method original array are changed and range are inclued
console.log('B',arr1);
console.log(arrN2);


