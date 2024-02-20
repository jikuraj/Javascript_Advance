const marvel_Heros=['ironman','aquaman','hulk']
const dc_Heros=['batman','superman','flash']

// marvel_Heros.push(dc_Heros) // push method apply on same array and change the value of same array
// console.log(marvel_Heros); //[ 'ironman', 'aquaman', 'hulk', [ 'batman', 'superman', 'flash' ] ]
const allheros=marvel_Heros.concat(dc_Heros) //concat method create new array and store in new variable
console.log(allheros); //[ 'ironman', 'aquaman', 'hulk', 'batman', 'superman', 'flash' ]

const Real_Heros=[...marvel_Heros,...dc_Heros];
console.log(Real_Heros); //[ 'ironman', 'aquaman', 'hulk', 'batman', 'superman', 'flash' ]


const newArr=[1,2,3,4,[5,6],7,[6,7,[8]],9]
const copyOfNewArr=newArr.flat(Infinity)  //flat is use to remove the inside array make singal array
console.log(copyOfNewArr); //[1, 2, 3, 4, 5,6, 7, 6, 7, 8, 9]

console.log(Array.isArray('jikesh')); //to check it's arry or not
let obj={ name: 'one', email: 'one@gmail.com', isLogedIn: false }
console.log(Array.from(Object.keys(obj)))
console.log(Array.from('jikesh'));// use to convert into array  result:[ 'j', 'i', 'k', 'e', 's', 'h' ]
console.log(Array.from({name:'jikesh'}));//result :[]
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  
  console.log(range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x),
));
let n1=100
let n2=200
let n3=300
console.log(Array.of(n1,n2,n3)); //result [ 100, 200, 300 ]