const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height=(Number(document.querySelector('#height').value))/100
    const weight=Number(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if(height==='' || height<=0 || isNaN(height)){
        results.innerHTML='Please give a valid height'
    }else if(weight==='' || weight<=0 || isNaN(weight)){
        results.innerHTML='Please give a valid weight'
    }else{
        const result=(weight/(height*height)).toFixed(2)
        results.textContent=result
    } 
    

})