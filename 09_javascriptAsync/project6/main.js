
const colors=()=>{
    const hexanumber='0123456789ABCDEF'

    let color='#'
    for(let i=1;i<=6;i++){
        color+=hexanumber[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalId;
document.querySelector('#start').addEventListener('click',(e)=>{
    intervalId= setInterval(()=>{
        document.querySelector('body').style.backgroundColor=colors()
    },1000)
})
document.querySelector('#stop').addEventListener('click',(e)=>{
    console.log('stop');
    clearInterval(intervalId)
    intervalId=null;
})