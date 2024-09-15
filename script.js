// Add task to the to-do list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

// Test submission for lessons
function submitTest() {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    const scoreDiv = document.getElementById('score');

    if (selectedOption && selectedOption.value === 'correct') {
        scoreDiv.innerHTML = "<p>Correct! Your score: 100%</p>";
    } else {
        scoreDiv.innerHTML = "<p>Wrong answer! Your score: 0%</p>";
    }
}

