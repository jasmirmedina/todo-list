import projects from "./projects";

import Project from "./Project";
import Task from "./Task";

const initial = () => {
  const defaultProject = new Project("Default");
  const defaultTask = new Task("Default", "This is a description", 0);

  defaultProject.tasks.push(defaultTask);

  projects.push(defaultProject);

  console.log(projects);
};

export default initial;
