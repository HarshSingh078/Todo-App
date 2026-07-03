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

const text = document.createElement('span') ;
text.textContent = input.value ;

const editBtn = document.createElement('button')
editBtn.textContent = 'Edit' ;

const deleteBtn = document.createElement('button') 
deleteBtn.textContent = 'Delete' ;
deleteBtn.addEventListener('click',function() {
    task.remove() ;
})

const actions = document.createElement('div')
actions.classList.add('task-actions')

actions.appendChild(editBtn)
actions.appendChild(deleteBtn)

task.appendChild(checkbox) ;
task.appendChild(text) ;
task.appendChild(actions) ;

taskList.appendChild(task) ;



}) 
