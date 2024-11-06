class LocalTaskStorage {
    constructor() {
        this.storageKey = "tasks";
    }

    getTasks() {
        const tasksJson = localStorage.getItem(this.storageKey);
        return tasksJson ? JSON.parse(tasksJson) : [];
    }

    addTask(task) {
        const tasks = this.getTasks();
        task.id = Date.now(); 
        tasks.push(task);
        localStorage.setItem(this.storageKey, JSON.stringify(tasks));
        return task; 
    }

    deleteTask(taskId) {
        const tasks = this.getTasks();
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        localStorage.setItem(this.storageKey, JSON.stringify(updatedTasks));
        return taskId; 
    }

    updateTask(taskId, updatedTask) {
        const tasks = this.getTasks();
        const taskIndex = tasks.findIndex(task => task.id === taskId);

        if (taskIndex !== -1) {
            tasks[taskIndex].title = updatedTask.title;
            tasks[taskIndex].about = updatedTask.about;
            localStorage.setItem(this.storageKey, JSON.stringify(tasks));
        }
    }
}

const storage = new LocalTaskStorage();
export default storage;
