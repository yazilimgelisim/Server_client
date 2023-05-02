

const text = document.getElementById('text')
const button = document.getElementById('button')
const result = document.getElementById('result')



button.addEventListener('click', ()=>{
    let yazi = text.value
    let data = {request:yazi}
    fetch('/deneme', {
        method:'POST',
        body:JSON.stringify(data),
        headers:{"Content-type":"application/json; charset=UTF-8"}
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        let {response} = data 
        result.innerText = response 
    })

})