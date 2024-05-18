document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = '';
      taskInput.focus();
    }
  });
  
  function addTask(taskText) {
    const taskList = document.getElementById('task-list');
  
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
  
    const taskName = document.createElement('span');
    taskName.className = 'task-name';
    taskName.textContent = taskText;
  
    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';
  
    const completeButton = document.createElement('button');
    completeButton.className = 'complete-button';
    completeButton.addEventListener('click', function() {
      taskItem.classList.toggle('completed');
    });
  
    const editButton = document.createElement('button');
    editButton.className = 'edit-button';
    editButton.addEventListener('click', function() {
      editTask(taskItem, taskName);
    });
  
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(taskItem);
    });
  
    taskActions.appendChild(completeButton);
    taskActions.appendChild(editButton);
    taskActions.appendChild(deleteButton);
    
    taskItem.appendChild(taskName);
    taskItem.appendChild(taskActions);
    taskList.appendChild(taskItem);
  }
  
  function editTask(taskItem, taskName) {
    const newTaskText = prompt('Edit your task', taskName.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
      taskName.textContent = newTaskText.trim();
    }
  }
  