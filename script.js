document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage on page load
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToList(task));

    // Function to add a task to the list
    function addTaskToList(task) {
        const li = document.createElement('li');
        li.textContent = task.content;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(li));

        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    }

    // Function to delete a task
    function deleteTask(taskElement) {
        taskElement.remove();
        saveTasks();
    }

    // Function to toggle task completion status
    taskList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const taskElement = event.target;
            taskElement.classList.toggle('completed');
            saveTasks();
        }
    });

    // Function to save tasks to localStorage
    function saveTasks() {
        const taskNodes = taskList.getElementsByTagName('li');
        const tasks = Array.from(taskNodes).map(node => ({
            content: node.textContent.trim(),
            completed: node.classList.contains('completed')
        }));
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add Task functionality
    addTaskBtn.addEventListener('click', () => {
        const taskContent = taskInput.value.trim();
        if (taskContent === '') {
            alert('Task cannot be empty!');
            return;
        }
        const newTask = {
            content: taskContent,
            completed: false
        };
        addTaskToList(newTask);
        taskInput.value = '';
        saveTasks();
    });
});