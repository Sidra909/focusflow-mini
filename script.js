window.onload = function () {
  loadTasks();
};

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) return;

  createTaskElement(task);
  saveTask(task);
  input.value = "";
}

function createTaskElement(task) {
  const li = document.createElement("li");
  li.textContent = task;

  // Add delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "🗑";
  delBtn.classList.add("deleteBtn");
  delBtn.onclick = function () {
    li.remove();
    deleteTask(task);
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => createTaskElement(task));
}

function deleteTask(taskToDelete) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskToDelete);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

