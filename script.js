// ==========================
// Select Elements
// ==========================
const addBtn = document.querySelector(".btn");
const input = document.querySelector("input");
const taskList = document.querySelector(".task-list");

const totalCounter = document.querySelector("#total");
const completedCounter = document.querySelector("#completed");
const activeCounter = document.querySelector("#active");

const completedBtn = document.querySelector(".completed");
const activeBtn = document.querySelector(".active");
const allBtn = document.querySelector(".all");

// ==========================
// Counter Function
// ==========================
function updateCounters() {
    const total = taskList.children.length;
    const completed = document.querySelectorAll('.task input[type="checkbox"]:checked').length;
    const active = total - completed;

    totalCounter.textContent = total;
    completedCounter.textContent = completed;
    activeCounter.textContent = active;
}

// ==========================
// Create Task Function
// ==========================
function createTask(taskText, isCompleted = false) {

    const task = document.createElement('div');
    task.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isCompleted;

    const text = document.createElement('span');
    text.textContent = taskText;
    text.classList.add('task-text');

    if (isCompleted) {
        text.classList.add("completed");
    }

    checkbox.addEventListener('change', function () {

        if (checkbox.checked) {
            text.classList.add('completed');
        }
        else {
            text.classList.remove('completed');
        }

        updateCounters();
        saveTasks() ;
    });

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';

    const editInput = document.createElement('input');
    editInput.type = 'text';

    editBtn.addEventListener('click', function () {

        if (editBtn.textContent === 'Edit') {

            editInput.value = text.textContent;
            text.replaceWith(editInput);
            editBtn.textContent = 'Save';

        }

        else {

            text.textContent = editInput.value;
            editInput.replaceWith(text);
            editBtn.textContent = 'Edit';
            saveTasks() ;

        }

    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', function () {

        task.remove();
        updateCounters();
        saveTasks() ;

    });

    const actions = document.createElement('div');
    actions.classList.add('task-actions');

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    task.appendChild(checkbox);
    task.appendChild(text);
    task.appendChild(actions);

    taskList.appendChild(task);

    updateCounters();
}

// ==========================
// Add Task
// ==========================
addBtn.addEventListener("click", function () {

    if (input.value === "") {
        return;
    }

    createTask(input.value);
    saveTasks() ;

    input.value = "";

});

// ==========================
// Completed Filter
// ==========================
completedBtn.addEventListener('click', function () {

    const tasks = document.querySelectorAll('.task');

    tasks.forEach(task => {

        const checkBox = task.querySelector('input[type="checkbox"]');

        if (checkBox.checked) {
            task.style.display = "flex";
        }

        else {
            task.style.display = "none";
        }

    });

});

// ==========================
// Active Filter
// ==========================
activeBtn.addEventListener('click', function () {

    const tasks = document.querySelectorAll('.task');

    tasks.forEach(task => {

        const checkBox = task.querySelector('input[type="checkbox"]');

        if (!checkBox.checked) {
            task.style.display = "flex";
        }

        else {
            task.style.display = "none";
        }

    });

});

// ==========================
// All Filter
// ==========================
allBtn.addEventListener('click', function () {

    const tasks = document.querySelectorAll('.task');

    tasks.forEach(task => {

        task.style.display = "flex";

    });

});


function saveTasks() {
    const tasks = [] ;
    const allTasks = document.querySelectorAll('.task') 
    allTasks.forEach(task => {
        const text = task.querySelector(".task-text").textContent ;
        const completed = task.querySelector('input[type="checkbox"]').checked ;
        tasks.push({
            text : text ,
            completed : completed 
        })
    })
    localStorage.setItem("tasks" , JSON.stringify(tasks)) ;
}


function LoadTasks() {
    const savedTasks = localStorage.getItem("tasks") ; 
    if(savedTasks) {
        const savedTasksArray = JSON.parse(savedTasks) ;
        savedTasksArray.forEach(task => {
            createTask(task.text , task.completed) ;
        })}
}

LoadTasks() ;