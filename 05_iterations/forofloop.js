//for of loop


// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num); 
}
/*
result 
1
2
3
4
5
*/

//for in loop on array  basically for in loop used for object but try on array

for (const key in arr) {
    console.log(key);
}
/**
 * results
0
1
2
3
4
we get key of the arr . key of arr means their index
 */

//we can apply for of loop on string

const greetings='Hello world!'
for (const greet of greetings) {
    
    if(greet===" "){
        // console.log("");
        continue;
    }
    // console.log(`Each char is : ${greet}`);
}
/** result
 * 
Each char is : H
Each char is : e
Each char is : l
Each char is : l
Each char is : o

Each char is : w
Each char is : o
Each char is : r
Each char is : l
Each char is : d
Each char is : !
 */

//map
//bassically map is used to set unique key value
//we can not set dublicate key value pair in map
const map=new Map();
map.set('BR','Bihar')
map.set('DL','Delhi')
map.set('TN','Tamil nadu')
map.set('BR','Bihar')

for (const key of map) {
    // console.log(key);
     /**result 
    [ 'BR', 'Bihar' ]
    [ 'DL', 'Delhi' ]
    [ 'TN', 'Tamil nadu' ] 
    */
}

//for iterave the value from map we can use the syntax below
for (const [key,val] of map) { //[key,val] array distructuring
    // console.log(key ,':-',val);
}
/**
 * 
BR :- Bihar    //bihar can not print 2 times because in map duplicate not allowed
DL :- Delhi
TN :- Tamil nadu
 */


// for of loop on object
//we can not apply for of loop on object because object is not itretable when we use for of loop

const myObject={
    game1:"nfs",
    game2:"spiderman"
}
// for (const [key,val] of myObject) {
//     console.log(key,val); //TypeError: myObject is not iterable
//                           //at Object.<anonymous> (C:\Users\Jikesh\javascript\05_iterations\forofloop.js:85:25
// }