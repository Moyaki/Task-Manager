function addTask() {
      const taskInput = document.getElementById('newTask');
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }

      const taskList = document.querySelector('#taskList ul');
      const newTaskItem = document.createElement('li');

      const taskTextElement = document.createElement('span');
      taskTextElement.textContent = taskText;

      const editButton = document.createElement('button');
      editButton.textContent = "Edit";
      editButton.addEventListener('click', function () {
        const updatedTask = prompt("Edit task:", taskTextElement.textContent);
        if (updatedTask !== null) {
          taskTextElement.textContent = updatedTask;
        }
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener('click', function () {
        if (confirm("Are you sure you want to delete this task?")) {
          newTaskItem.remove();
        }
      });

      newTaskItem.appendChild(taskTextElement);
      newTaskItem.appendChild(editButton);
      newTaskItem.appendChild(deleteButton);
      taskList.appendChild(newTaskItem);

      taskInput.value = "";
    }