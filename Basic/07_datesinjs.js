// Date

const myDate= new Date()

// Typeof Date is an object
/*
JavaScript Date is an objects which represent a single moment in time in a platform-independent format.
Date objects encapsulate an integral number that represents milliseconds since
the midnight at the beginning of January 1, 1970, UTC (the epoch).


*/

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.getTime());

/*
results

2024-01-07T01:37:03.251Z
Sun Jan 07 2024 07:07:03 GMT+0530 (India Standard Time)
Sun Jan 07 2024
1/7/2024, 7:07:03 AM
1/7/2024
1704591423251
*/


const myAnotherDate=new Date(2023,11,11,10,57,43) //(year,month start with 0,date,hour,min,sec)
console.log(myAnotherDate.toLocaleString());
const createDate=new Date("01-29-2024");
console.log(createDate.toLocaleString());
const formateDate=myAnotherDate.toLocaleString('default',{
    weekday:"long"
})
console.log(formateDate);
/**
 * result
 * 12/11/2023, 10:57:43 AM
1/29/2024, 12:00:00 AM
 */

//TImestamp

const timeStamp=Date.now()
console.log(timeStamp);
console.log(myAnotherDate.getTime());

//convert into sec
console.log(Math.floor(timeStamp/1000));
