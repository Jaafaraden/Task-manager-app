const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.classList.add("complete-btn");
  completeBtn.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskContent);
  taskItem.appendChild(completeBtn);
  taskItem.appendChild(deleteBtn);

  taskList.appendChild(taskItem);

  taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
