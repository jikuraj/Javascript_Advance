const clock=document.querySelector('#clock')

//use setInterval to run the code every interval    
setInterval(()=>{
    const time=new Date()
    clock.innerHTML=time.toLocaleTimeString();
},1000)