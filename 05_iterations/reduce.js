//reduce 

const myNumbers=[1,2,3]

const myNums=myNumbers.reduce(function(acc,cur){
    console.log(`acc:-${acc} curr:-${cur}`);
  return acc+cur
},0)
console.log(myNums);

//by arrow function

const newNums=myNumbers.reduce((acc,cur)=>(acc+cur),0)
console.log(newNums);

//cart item price calculation
const ItemsInCart=[
    {
        course:"js",
        price:1999
    },
    {
        course:"node",
        price:2999
    },
    {
        course:"datasience",
        price:12999
    },
    {
        course:"py",
        price:999
    }
]

const totalPrice=ItemsInCart.reduce((acc,item)=>(acc+item.price),0)
console.log(totalPrice);