class TaskView {
  constructor() {
      this.taskInput = document.getElementById('taskInput');
      this.addTaskButton = document.getElementById('addTaskButton');
      this.taskList = document.getElementById('taskList');
  }
  // Mostrar la lista de tareas
  renderTasks(tasks) {
      this.taskList.innerHTML = ''; 
       
    };
  
  
    // Obtener la tarea del input
    getTaskInput() {
      return this.taskInput.value;
  }

  // Limpiar el input
  clearTaskInput() {
      this.taskInput.value = '';
  }

  // Método para manejar el evento de eliminar tarea
  bindDeleteTask(handler) {
      this.onDeleteTask = handler;
  }

  // Método para manejar el evento de añadir tarea
  bindAddTask(handler) {
      this.addTaskButton.addEventListener('click', handler);
  }
}


  