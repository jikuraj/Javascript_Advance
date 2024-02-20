// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    
}
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(i===5){
        // console.log(`Best number is ${i}`);
    }
    // console.log(element);
    
}

for (let i = 2; i <3; i++) {
    // console.log(`table of ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}

//break and contenue
//break
for (let i = 0; i <=10; i++) {
    if(i===5){
        // console.log('best is 5');
        break;
    }
    // console.log(i);
    
}
for (let i = 0; i <=10; i++) {
    if(i===5){
        console.log('best is 5');
        continue;
    }
    console.log(i);  //in continue key word number 5 is not printed because once time continue ignor the condition
    
}
