// Get references to elements in the DOM
const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.querySelector('ul');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  // Create new task list item
  const newTask = document.createElement('li');
  
  // Create a div to hold the checkbox and task text
  const taskDiv = document.createElement('div');
  
  // Create checkbox input
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', toggleTask); // Add event listener for toggling completeness
  
  // Create span to hold the task text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  
  // Append checkbox and task text to the div
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(taskSpan);

  // Create delete button with trash icon
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.addEventListener('click', deleteTask); // Add event listener for delete
  
  // Append div and delete button to the list item
  newTask.appendChild(taskDiv);
  newTask.appendChild(deleteBtn);
  
  // Add new task to the task list
  taskList.appendChild(newTask);

  // Clear input field
  taskInput.value = '';
}

// Function to toggle task completeness
function toggleTask(event) {
  const taskItem = event.target.parentElement.parentElement; // Get the task <li> element
  taskItem.classList.toggle('completed'); // Toggle the 'completed' class to add/remove strikethrough
}

// Function to delete a task
function deleteTask(event) {
  const taskItem = event.target.closest('li'); // Get the closest <li> to the clicked delete button
  taskList.removeChild(taskItem); // Remove the task item from the list
}

// Event listener for the add button
addTaskButton.addEventListener('click', addTask);

// Event listener for pressing Enter key to add a task
taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
