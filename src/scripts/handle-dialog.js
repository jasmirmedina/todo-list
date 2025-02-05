import { $ } from "./utils";

const addDialogAnimations = (dialog, className, ...args) => {
  const btns = args;

  btns.forEach((element) => {
    element.addEventListener("click", () => {
      dialog.classList.toggle(className);
    });
  });
};

const handleDialog = () => {
  const projectsDialog = $(".projects-dialog");
  const sidebarAddProjectBtn = $(".sidebar__add-project-btn");
  const cancelProjectBtn = $(".projects-dialog__cancel-project-btn");

  addDialogAnimations(
    projectsDialog,
    "projects-dialog--is-hidden",
    sidebarAddProjectBtn,
    cancelProjectBtn,
  );

  const tasksDialog = $(".tasks-dialog");
  const mainAddTaskBtn = $(".main__add-task-btn");
  const cancelTaskBtn = $(".tasks-dialog__cancel-task-btn");

  addDialogAnimations(
    tasksDialog,
    "tasks-dialog--is-hidden",
    mainAddTaskBtn,
    cancelTaskBtn,
  );
};

export default handleDialog;
