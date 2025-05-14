
function addTask() {
    const input = document.getElementById('taskInput');
    const list = document.getElementById('taskList');
    const taskText = input.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        list.appendChild(li);
        input.value = '';
    }
}