import projects from "./projects";

import Project from "./Project";
import Task from "./Task";

import { checkLocalStorage, getFromLocalStorage } from "./utils";

const initial = () => {
  if (checkLocalStorage("projects")) {
    const defaultProject = new Project("Default");
    const defaultTask = new Task("Default", 0);

    defaultProject.isDefault = true;
    defaultProject.isSelected = true;

    defaultProject.tasks.push(defaultTask);

    projects.push(defaultProject);
  } else {
    const lProjects = getFromLocalStorage("projects");

    lProjects.forEach((projectData) => {
      const project = new Project(projectData.name);

      project.isSelected = projectData.isSelected;
      project.isDefault = projectData.isDefault;

      projectData.tasks.forEach((taskData) => {
        const task = new Task(taskData.title);
        task.complete = taskData.complete;
        project.tasks.push(task);
      });

      projects.push(project);
    });
  }
};

export default initial;
