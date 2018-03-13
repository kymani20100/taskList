// Define UI Vars
const form      = document.getElementById('task-form');
const taskList  = document.querySelector('.collection');
const clearBtn  = document.querySelector('.clear-tasks');
const filter    = document.getElementById('filter');
const taskInput = document.getElementById('task');

// Funtion to Load all eventt listeners
loadEventListeners();
// Load all event listeners
function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
}

// Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }

    // Create li element
    const li = document.createElement('li');
    // Add a class to li
    li.className = 'collection-item';
    // Create a text node and  append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to  li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
    // Clear Form input
    taskInput.value = '';
    //console.log(li);

    e.preventDefault();
}

// Function remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
       if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();
       }
        
    }
}

// Clear Task function
function clearTasks(){
    // taskList.innerHTML = '';
    // Faster Removal
    while(taskList.firstChild){
        taskListremoveChild();
    }
}