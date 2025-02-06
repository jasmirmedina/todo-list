import projects from "./projects";
import updateActualProjectName from "./update-actual-project-name";

import { $, createElement, cleanCtn } from "./utils";

const sidebarProjects = $(".sidebar__projects");

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
    updateActualProjectName(),
  );

  sidebarProjectSpan.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteProject(index);
  });

  sidebarProjectP.textContent = project.name;
  sidebarProjectDiv.append(sidebarProjectP, sidebarProjectSpan);

  return sidebarProjectDiv;
};

const render = () => {
  cleanCtn(sidebarProjects);

  projects.forEach((project, index) => {
    sidebarProjects.appendChild(createProjectElement(project, index));
  });
};

export default render;
