document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    const taskDetails = document.createElement('span');
    taskDetails.textContent = taskText;
    
    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';
    
    const completeButton = document.createElement('button');
    completeButton.className = 'complete';
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
    });
    
    taskActions.appendChild(completeButton);
    taskActions.appendChild(deleteButton);
    taskItem.appendChild(taskDetails);
    taskItem.appendChild(taskActions);
    
    document.getElementById('task-list').appendChild(taskItem);
    
    taskInput.value = '';
}
