const taskSectionRef = document.querySelector('.task-section');
const addActionRef = document.querySelector('.actions .add');
const modalRef = document.querySelector('.add-task-modal');
const newTaskTextAreaRef = document.querySelector('.add-task-modal .left-section textarea')
const prioritySelections = document.querySelectorAll('.add-task-modal .right-section .box');
const disabledEditButtonRef = document.querySelector('.actions .remove.box');
const taskWrapperRef = document.querySelector('.task-section');
const filterBoxesRef = document.querySelectorAll('.filter .box');
const inputRef = document.querySelector('.search input');

const tasks = [{
    id: 323131,
    title: 'Task 1',
    priority: 'p1'
}, {
    id: 43534534,
    title: 'Task 2',
    priority: 'p1'
}, {
    id: 12313,
    title: 'Task 3',
    priority: 'p3'
}, {
    id: 234324,
    title: 'Task 4',
    priority: 'p2'
}];

function renderTasks(finalTasks){
    taskSectionRef.innerHTML = '';
    finalTasks.forEach(task => {
        createTask(task.title, task.priority, task.id);
    })
}

renderTasks(tasks);

function updateTask(ref, key, value) {
    const taskRef = ref.closest('.task');
    const taskId = taskRef.querySelector('.task-id')?.innerText;
    if (key) {
        const selectedTask = tasks.find(task => task.id == taskId);
        selectedTask[key] = value;
    } else {
        const taskIdx = tasks.findIndex(task => task.id == taskId);
        tasks.splice(taskIdx, 1);
    }
}

function createTask(title, priority, newTaskId) { 
    const newTaskContent = `
        <div class="task-priority" data-priority="${priority}">${priority}</div>
        <div class="task-id">${newTaskId}</div>
        <div class="task-title">
            <span>${title}</span>
            <div class="task-remove"><i class="fa-solid fa-trash"></i></div>
        </div>
    `;

    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = newTaskContent;

    taskSectionRef.append(newTask);

    // change priority
    newTask.querySelector('.task-priority').addEventListener('click', function(e) {
        const newPriority = getNextPriority(e.target.dataset.priority);
        e.target.dataset.priority = newPriority;
        // Update my tasks data.
        updateTask(e.target, 'priority', newPriority);
        console.log(tasks);
    });

    // Edit Task
    newTask.querySelector('.task-title span').addEventListener('click', function(e) {
        if (!taskWrapperRef.classList.contains('non-editable')) {
            e.target.setAttribute('contenteditable', true); 
            e.target.addEventListener('input', function(e) {
                console.log(e.target.innerText);
                // Update my tasks data.
                updateTask(e.target, 'title', e.target.innerText);
                console.log(tasks);
            });
        }
    });

    // Remove Task
    newTask.querySelector('.task-remove').addEventListener('click', function(e) {
        e.target.closest('.task').remove();
        // Update my tasks data.
        updateTask(e.target);
        console.log(tasks);
    });
}

addActionRef.addEventListener('click', function() {
    const isHidden = modalRef.classList.contains('hide');
    toggleModal(isHidden);
});

function toggleModal(isHidden) {
    if (isHidden) {
        modalRef.classList.remove('hide');
    } else {
        modalRef.classList.add('hide');
    }
}

function addTask(title, priority, id) {
    tasks.push({
        id,
        title,
        priority
    });
    renderTasks(tasks);
}

newTaskTextAreaRef.addEventListener('keyup', function(e) {
    if(e.key === 'Enter') {
        const title = e.target.value;
        const selectedPriortyRef = document.querySelector('.add-task-modal .right-section .box.selected');
        const priority = selectedPriortyRef.dataset.priority;
        const newTaskId = Math.random();
        addTask(title, priority, newTaskId);
        toggleModal(false);
        e.target.value = '';
        
    }
})

prioritySelections.forEach((priorityBoxRef) => {
    priorityBoxRef.addEventListener('click', function(e) {
        removeSelectedState(prioritySelections);
        e.target.classList.add('selected');
    })
})

function removeSelectedState(boxesRef) {
    boxesRef.forEach((boxRef) => {
        boxRef.classList.remove('selected');
    });
}

function getNextPriority(currentPriority) {
    const priorities = ['p1', 'p2', 'p3', 'p4'];
    let newPriority = (priorities.findIndex(item => item === currentPriority) + 1) % priorities.length;
    return `p${newPriority + 1}`;
}
    
disabledEditButtonRef.addEventListener('click', function(e){
    if (e.target.classList.contains('selected')) {
        e.target.classList.remove('selected');
        taskWrapperRef.classList.add('non-editable');
        removeContentEditable();
    } else {
        e.target.classList.add('selected');
        taskWrapperRef.classList.remove('non-editable');
    }
})

function removeContentEditable() {
    document.querySelectorAll('.task .task-title span').forEach((ref) => {
        ref.removeAttribute('contenteditable');
    })
}

filterBoxesRef.forEach(boxRef => {
    boxRef.addEventListener('click', function(e) {
        removeSelectedState(filterBoxesRef);
        e.target.classList.add('selected');
        const selectedPriority = e.target.dataset.priority;
        showFilteredTask(selectedPriority);
    })
});

function showFilteredTask (selectedPriority) {
    const filteredTasks = tasks.filter(task => task.priority === selectedPriority);
     renderTasks(filteredTasks);
}

function showSearchedTask (searchText) {
    const filteredTasks = tasks.filter(task => {
        return String(task.id).includes(searchText) || task.title.includes(searchText);
    });
    renderTasks(filteredTasks);
}


inputRef.addEventListener('keyup', function(e) {
    const searchText = e.target.value;
    showSearchedTask(searchText);
});