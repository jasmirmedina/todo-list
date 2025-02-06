import projects from "./projects";

import Project from "./Project";
import Task from "./Task";

import { checkLocalStorage } from "./utils";

const initial = () => {
  if (checkLocalStorage("projects")) {
    const defaultProject = new Project("Default");
    const defaultTask = new Task("Default", "This is a description", 0);

    defaultProject.tasks.push(defaultTask);

    projects.push(defaultProject);
  }
};

export default initial;
