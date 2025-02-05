import { $ } from "./utils";

const addDialogAnimations = (dialog, className, ...args) => {
  const btns = args;

  btns.forEach((element) => {
    element.addEventListener("click", () => {
      dialog.classList.toggle(className);
    });
  });
};

const dialogAnimations = () => {
  const projectsDialog = $(".projects-dialog");

  const sidebarAddProjectBtn = $(".sidebar__add-project-btn");
  const cancelProjectBtn = $(".projects-dialog__cancel-project-btn");

  addDialogAnimations(
    projectsDialog,
    "projects-dialog--is-hidden",
    sidebarAddProjectBtn,
    cancelProjectBtn,
  );
};

export default dialogAnimations;
