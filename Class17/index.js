const taskSectionRef = document.querySelector('.task-section');
const addActionRef = document.querySelector('.actions .add');
const modalRef = document.querySelector('.add-task-modal');
const newTaskTextAreaRef = document.querySelector('.add-task-modal .left-section textarea')

function createTask(title) {
    const newTaskContent = `
        <div class="task-priority"></div>
        <div class="task-id">123456</div>
        <div class="task-title">
            <span>${title}</span>
            <div class="task-remove">x</div>
        </div>
    `;

    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = newTaskContent;

    taskSectionRef.append(newTask);
}

createTask('Task 1');
createTask('Task 2');
createTask('Task 3');
createTask('Task 4');


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
        createTask(title);
        toggleModal(false);
        e.target.value = '';
    }
})
