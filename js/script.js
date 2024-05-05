const taskNameInput = document.getElementById('taskName');
const taskCategorySelect = document.getElementById('taskCategory');
const taskDueDateInput = document.getElementById('taskDueDate');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

let tasks = [];

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const name = taskNameInput.value.trim();
    const category = taskCategorySelect.value;
    const dueDate = taskDueDateInput.value;

    if (name === '' || category === '' || dueDate === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, preencha todos os campos.',
        });
        return;
    }

    const task = {
        id: generateId(),
        name: name,
        category: category,
        dueDate: dueDate
    };

    tasks.unshift(task);
    renderTasks();
    resetForm();
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task');
        taskItem.innerHTML = `
            <h3>${task.name}</h3>
            <p><strong>Categoria:</strong> ${task.category}</p>
            <p><strong>Data de vencimento:</strong> ${dayjs(task.dueDate).format('DD/MM/YYYY HH:mm')}</p>
        `;
        taskList.appendChild(taskItem);
    });
}

function resetForm() {
    taskNameInput.value = '';
    taskCategorySelect.value = '';
    taskDueDateInput.value = '';
}

function generateId() {
    return Math.floor(Math.random() * 1000000);
}

renderTasks();
