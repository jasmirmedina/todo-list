import projects from "./projects";
import updateCurrentProjectName from "./update-current-project-name";

import { $, createElement, cleanCtn } from "./utils";

import { saveToLocalStorage } from "./utils";

const sidebarProjects = $(".sidebar__projects");
const mainTasks = $(".main__tasks-ctn");

const deselectAllProjects = () => {
  projects.forEach((project) => {
    project.isSelected = false;
  });
};

const updateProjectSelection = (index) => {
  deselectAllProjects();
  projects[index].isSelected = true;
  render();
};

const deleteProject = (index) => {
  projects.splice(index, 1);
  updateProjectSelection(0);
};

const deleteTask = (projectIndex, taskIndex) => {
  projects[projectIndex].tasks.splice(taskIndex, 1);
  render();
};

const deleteCompletedTasks = (projectIndex) => {
  const project = projects[projectIndex];
  project.tasks = project.tasks.filter((task) => !task.complete);
  render();
};

const deleteAllTasks = (projectIndex) => {
  const project = projects[projectIndex];
  project.tasks = [];
  render();
};

const createProjectElement = (project, index) => {
  const sidebarProjectDiv = createElement("div", "sidebar__project");
  const sidebarProjectP = createElement("p", "sidebar__project-name");

  const sidebarProjectSpan = createElement(
    "span",
    "sidebar__delete-project-btn",
  );

  if (!project.isDefault) {
    sidebarProjectSpan.textContent = "X";
  }

  if (project.isSelected) {
    sidebarProjectDiv.style.backgroundColor = "rgba(41, 41, 41, 0.4)";
  }

  sidebarProjectDiv.addEventListener(
    "click",
    () => updateProjectSelection(index),
    updateCurrentProjectName(),
  );

  sidebarProjectSpan.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteProject(index);
  });

  sidebarProjectP.textContent = project.name;
  sidebarProjectDiv.append(sidebarProjectP, sidebarProjectSpan);

  return sidebarProjectDiv;
};

const renderTasks = () => {
  projects.forEach((project, projectIndex) => {
    if (project.isSelected) {
      project.tasks.forEach((task, taskIndex) => {
        const mainTaskDiv = createElement("div", "main__task");
        const mainTaskInnerDiv = createElement("div");
        const mainTaskCheckComplete = createElement(
          "input",
          "",
          "",
          "checkbox",
        );

        const mainTaksTitleP = createElement("p", "main__task-title");

        const mainDeleteTaskBtn = createElement(
          "span",
          "main__delete-task-btn",
        );

        mainDeleteTaskBtn.textContent = "X";

        mainTaksTitleP.textContent = task.title;

        mainTaskCheckComplete.checked = task.complete;
        mainTaskCheckComplete.addEventListener("click", () => {
          task.toggleComplete();
          render();
        });

        mainDeleteTaskBtn.addEventListener("click", (event) => {
          event.stopPropagation();
          deleteTask(projectIndex, taskIndex);
        });

        if (task.complete) {
          mainTaskDiv.style.opacity = "0.5";
        }

        mainTaskInnerDiv.append(mainTaskCheckComplete, mainTaksTitleP);
        mainTaskDiv.append(mainTaskInnerDiv, mainDeleteTaskBtn);
        mainTasks.appendChild(mainTaskDiv);
      });
    }
  });
};

const render = () => {
  cleanCtn(sidebarProjects);
  cleanCtn(mainTasks);

  projects.forEach((project, index) => {
    sidebarProjects.appendChild(createProjectElement(project, index));
  });

  renderTasks();

  saveToLocalStorage(projects);
};

const addEventListeners = () => {
  const deleteCompletedBtn = $(".main__dc-task-btn");
  const deleteAllBtn = $(".main__da-task-btn");

  deleteCompletedBtn.addEventListener("click", () => {
    const selectedProject = projects.find((project) => project.isSelected);
    if (selectedProject) {
      deleteCompletedTasks(projects.indexOf(selectedProject));
    }
  });

  deleteAllBtn.addEventListener("click", () => {
    const selectedProject = projects.find((project) => project.isSelected);
    if (selectedProject) {
      deleteAllTasks(projects.indexOf(selectedProject));
    }
  });
};

addEventListeners();

export default render;
