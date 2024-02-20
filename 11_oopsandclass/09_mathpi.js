const descriptor=Object.getOwnPropertyDescriptor(Math,'PI') //to describe the property of object
// console.log(descriptor);
const newObj={
    name:'raj',
    email:'raj@fb.com',
    isAvialable:true,

    present:function(){
        console.log('not present');
    }
}
const nameproperty=Object.getOwnPropertyDescriptor(newObj,'name')
// console.log(nameproperty);
// console.log('-------------------------');

Object.defineProperty(newObj,'name',{ // to define the property of object
    writable:false,
    enumerable:false
})
for (const [key,val] of Object.entries(newObj)) { //Object.entries(newObj) make the object iteratable
    if(typeof val!='function'){ // not want to print the  function 

        // console.log(`${key}:${val}`);
    }
}

//------------------------------------------------------------------------------------------------
