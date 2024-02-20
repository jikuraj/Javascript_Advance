const name='jikesh'
const value='raj'
console.log(name.substring(0,3));

// console.log(name + value + ' value'); outdated method to write instnace of these we can use below code

//bac tic is used for string interpolation i.e for used variable in string
console.log(`Hello my name is ${name} ${value}`); 

//another method to define string

const gameName=new String("jikesh-raj-1810")

console.log(gameName);
// console.log(gameName[0]); result j
// console.log(gameName.indexOf('r'));  7
// console.log(gameName.charAt(7));  r
// // /console.log(gameName[0]);
// console.log(gameName.toUpperCase());

const newString=gameName.substring(0,6)  //substring not use -ve value and last index is not included
// console.log(newString);
const str2=gameName.slice(-11,6) //slice use both negative and positive value  also in this last index is not included
// console.log(str2);

const newStr3='    jiku    '
// console.log(newStr3.trim())  trim is ussed for replace space form begning and end

const url='https://jikesh.com/jikesh%100raj'
console.log(url.replace('%100','_'));//used for the string with other one
console.log(url.includes('jikeshhh'));//used for search the string if find then return true else return false
console.log(gameName.split('-')); //convert it into array and split the string on the basis of - in the original string
