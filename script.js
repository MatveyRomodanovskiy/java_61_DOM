

// Ждём, когда всё загрузится
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('taskInput');       // поле ввода
    const list = document.getElementById('taskList');         // список задач
    const button = document.getElementById('addButton');      // кнопка

    function addTask() {
        const taskText = input.value.trim(); // убираем лишние пробелы

        if (taskText !== '') {
            const li = document.createElement('li'); // создаём <li>
            li.textContent = taskText;               // вставляем текст
            list.appendChild(li);                    // добавляем в список
            input.value = '';                        // очищаем поле
        }
    }
    // Навешиваем обработчик клика на кнопку
    button.addEventListener('click', () => {
        addTask();
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTask()
        }
    });
});
