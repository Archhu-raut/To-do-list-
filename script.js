

var listcontainer=document.getElementById('list-container')
var inputbox = document.getElementById('input-box')
function addTask(){
    if(inputbox.value === ''){
      alert("add your task")  
    }
    else{
        var task = document.createElement('li')
        task.textContent = inputbox.value;
        listcontainer.appendChild(task)

        var span = document.createElement('span');
        span.textContent= 'x';
        task.appendChild(span)
    }
    inputbox.value=''

}

listcontainer.addEventListener('click',(parameter)=>{
    if(parameter.target.tagName =='LI'){
        parameter.target.classList.toggle('checked')
        
    }
    else if(parameter.target.tagName == 'SPAN'){
        parameter.target.parentElement.remove()
   
    }
})

