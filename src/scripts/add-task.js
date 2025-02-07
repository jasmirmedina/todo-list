import Task from "./Task";
import projects from "./projects";

const addTask = (taskName, priority) => {
  const newTask = new Task(taskName, priority);

  projects.forEach((element, index) => {
    if (element.isSelected) {
      projects[index].tasks.push(newTask);
    }
  });
};

export default addTask;
