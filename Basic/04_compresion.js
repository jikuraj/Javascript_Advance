// console.log(2>1);//true
// console.log(2<1);//false
// console.log("2">1);//true     By default javascript convert it into number


console.log(null==0)
console.log(null>0);
console.log(null<0);
console.log(null>=0);  

//The reasion is that equality check == and compresion <,>,>=,<= work diffrently.
//comparesions convert null to number i.e 0 thats why result is true for >= or <= and  false for <,>,==


//strict operator (===) is used to compair both value and datatype