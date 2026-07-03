const addBtn = document.querySelector('.btn')
const input = document.querySelector('input')
const taskList = document.querySelector('.task-list')
addBtn.addEventListener("click" , function() {
    console.log(input.value) ;

    if(input.value === "") {
        return ;
    }

const task = document.createElement('div') ;
task.classList.add('task') ;

const checkbox = document.createElement('input') ;
checkbox.type = 'checkbox';
checkbox.addEventListener('change',function() {
    if(checkbox.checked) {
        text.classList.add('completed') ;
    }
    else {
        text.classList.remove('completed') ;
    }
    updateCounters() ;
})

const text = document.createElement('span') ;
text.textContent = input.value ;
text.classList.add('task-text')

const editBtn = document.createElement('button')
editBtn.textContent = 'Edit' ;
const editInput = document.createElement('input') ;
editInput.type = 'text' ;
editBtn.addEventListener('click',function() {
    if(editBtn.textContent === 'Edit') {
    editInput.value = text.textContent ;
    text.replaceWith(editInput) ;
    editBtn.textContent = 'Save' ;
    }
    else {
        text.textContent = editInput.value ;
        editInput.replaceWith(text) ;
        editBtn.textContent = 'Edit' ;
    }
})

const deleteBtn = document.createElement('button') 
deleteBtn.textContent = 'Delete' ;
deleteBtn.addEventListener('click',function() {
    task.remove() ;
    updateCounters() ;
})

const actions = document.createElement('div')
actions.classList.add('task-actions')

actions.appendChild(editBtn)
actions.appendChild(deleteBtn)

task.appendChild(checkbox) ;
task.appendChild(text) ;
task.appendChild(actions) ;

taskList.appendChild(task) ;
updateCounters() ;

function updateCounters() {
const totalCounter = document.querySelector("#total");
const completedCounter = document.querySelector("#completed");
const activeCounter = document.querySelector("#active");
const total = taskList.children.length ;
// totalCounter.textContent = `Total : ${total}` ;
const completed = document.querySelectorAll('.task input[type="checkbox"]:checked').length ;
// completedCounter.textContent = `Completed : ${completed}` ;
const active = total - completed ; 
// activeCounter.textContent = `Active : ${active}` ;
totalCounter.textContent = total;
completedCounter.textContent = completed;
activeCounter.textContent = active;
}


const completedBtn = document.querySelector(".completed")
completedBtn.addEventListener('click',function() {

    const tasks = document.querySelectorAll('.task')
    tasks.forEach(task=> {
     const checkbox = task.querySelector('input[type="checkbox"]') ;
     if(checkbox.checked) {
        task.style.display = 'flex' ;
     }
     else {
        task.style.display = 'none' ;
     }
    })
})

const activeBtn = document.querySelector('.active') ;
activeBtn.addEventListener('click',function() {
    const tasks = document.querySelectorAll('.task') ;
    tasks.forEach(task=> {
        const checkBox = task.querySelector('input[type="checkbox"]') ;
        if(!checkBox.checked) {
            task.style.display = 'flex' ;
        }
        else {
            task.style.display = 'none' ;
        }
    })
})
}) 
