const colors=()=>{
    const hexaNumbers='0123456789ABCDEF'
    let color='#'

    for(let i=1;i<=6;i++){
        color+=hexaNumbers[Math.floor(Math.random()*16)]
    }
    return color;
}
console.log(colors());
const start=()=>{
    document.body.style.backgroundColor=colors()
}

let intervalId;
document.querySelector('#start').addEventListener('click',(e)=>{
    intervalId=setInterval(start,1000)
})

document.querySelector('#stop').addEventListener('click',(e)=>{
     clearInterval(intervalId);
     intervalId=null
})