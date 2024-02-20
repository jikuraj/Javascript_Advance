// forEach() method iis used to itrete the value of array

const coding=['js','java','cpp','py']

// coding.forEach( function name(){} ) //whhen we remove the name of function then this is called call back function
coding.forEach( function (item){
    // console.log(item);
} )// call back function

//uusing arrow function
coding.forEach((val)=>{
//  console.log(val);
})

//using function as refrence
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)

//we can pass index and complete array also as a parameter

coding.forEach((item,index,arr)=>{
//   console.log(item,index,arr);
})


//retrive the value form object in arr

const languageDetails=[
    {
        language:'javascript',
        fileName:'js'
    },
    {
        language:'java',
        fileName:'java'
    },
    {
        language:'python',
        fileName:'py'
    },
]

languageDetails.forEach((item)=>{
    console.log(`${item.language} their file name is ${item.fileName}`);
})