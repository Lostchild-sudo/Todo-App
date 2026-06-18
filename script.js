const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {

    if (taskInput.value === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Task text
    const taskText = document.createElement("span");
    taskText.innerText = taskInput.value;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    // Mark complete when task is clicked
    taskText.addEventListener("click", function () {
        taskText.classList.toggle("completed");
    });

    // Delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}

taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});
