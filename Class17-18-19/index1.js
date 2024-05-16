const taskSectionRef = document.querySelector('.task-section');
const addActionRef = document.querySelector('.actions .add');
const modalRef = document.querySelector('.add-task-modal');
const newTaskTextAreaRef = document.querySelector('.add-task-modal .left-section textarea')
const prioritySelections = document.querySelectorAll('.add-task-modal .right-section .box');
const disabledEditButtonRef = document.querySelector('.actions .remove.box');
const taskWrapperRef = document.querySelector('.task-section');
const filterBoxesRef = document.querySelectorAll('.filter .box');
const inputRef = document.querySelector('.search input');

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
    newTask.querySelector('.task-priority').addEventListener('click', function(e) {
        const newPriority = getNextPriority(e.target.dataset.priority);
        e.target.dataset.priority = newPriority;
    });

    newTask.querySelector('.task-title span').addEventListener('click', function(e) {
        if (!taskWrapperRef.classList.contains('non-editable')) {
            e.target.setAttribute('contenteditable', true); 
        }
    });

    newTask.querySelector('.task-remove').addEventListener('click', function(e) {
        e.target.closest('.task').remove();
    });
}

createTask('Task 1', 'p1', 323131);
createTask('Task 2', 'p1', 43534534);
createTask('Task 3', 'p3', 12313);
createTask('Task 4', 'p2', 234324);


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

newTaskTextAreaRef.addEventListener('keyup', function(e) {
    if(e.key === 'Enter') {
        const title = e.target.value;
        const selectedPriortyRef = document.querySelector('.add-task-modal .right-section .box.selected');
        const priority = selectedPriortyRef.dataset.priority;
        const newTaskId = Math.random();
        createTask(title, priority, newTaskId);
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
    const taskPrioritiesRef = document.querySelectorAll('.task .task-priority');
    taskPrioritiesRef.forEach(ref => {
        const task = ref.closest('.task');
        if (ref.dataset.priority !== selectedPriority) {
            task.style.display = 'none';
        } else {
            task.style.display = 'flex';
        }
    })
}

function showSearchedTask (searchText) {
    const tasksRef = document.querySelectorAll('.task');
    tasksRef.forEach(ref => {
        const taskId = ref.querySelector('.task-id');
        const taskName = ref.querySelector('.task-title span');
        if (taskId.innerText.includes(searchText) || taskName.innerText.includes(searchText)) {
            ref.style.display = 'flex';
        } else {
            ref.style.display = 'none';
        }
    })
}


inputRef.addEventListener('keyup', function(e) {
    const searchText = e.target.value;
    showSearchedTask(searchText);
});