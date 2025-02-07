import addProject from "./add-project";
import addTask from "./add-task";
import render from "./render";

import { $, cleanInput } from "./utils";

const projectsDialog = $(".projects-dialog");
const sidebarAddProjectBtn = $(".sidebar__add-project-btn");
const cancelProjectBtn = $(".projects-dialog__cancel-project-btn");
const addProjectBtn = $(".projects-dialog__add-project-btn");
const projectName = $("#project-name");

const tasksDialog = $(".tasks-dialog");
const mainAddTaskBtn = $(".main__add-task-btn");
const cancelTaskBtn = $(".tasks-dialog__cancel-task-btn");
const taskTitle = $("#task-title");
const addTaskBtn = $(".tasks-dialog__add-task-btn");

const addDialogAnimations = (dialog, className, ...args) => {
  const btns = args;

  btns.forEach((element) => {
    element.addEventListener("click", () => {
      dialog.classList.toggle(className);
    });
  });
};

const handleAddProjectDialog = () => {
  addProjectBtn.addEventListener("click", () => {
    if (projectName.value) {
      addProject(projectName.value);
      projectsDialog.classList.toggle("projects-dialog--is-hidden");
      cleanInput(projectName);
      render();
    }
  });
};

const handleAddTaskDialog = () => {
  addTaskBtn.addEventListener("click", () => {
    if (taskTitle.value) {
      addTask(taskTitle.value);
      tasksDialog.classList.toggle("tasks-dialog--is-hidden");
      cleanInput(taskTitle);
      render();
    }
  });
};

const handleDialog = () => {
  addDialogAnimations(
    projectsDialog,
    "projects-dialog--is-hidden",
    sidebarAddProjectBtn,
    cancelProjectBtn,
  );

  addDialogAnimations(
    tasksDialog,
    "tasks-dialog--is-hidden",
    mainAddTaskBtn,
    cancelTaskBtn,
  );

  handleAddProjectDialog();
  handleAddTaskDialog();
};

export default handleDialog;
