import { $, cleanCtn } from "./utils";

import MIL from "../../assets/icons/chevron-left.svg";
import MIR from "../../assets/icons/chevron-right.svg";

const sidebar = $(".sidebar");
const handleSidebarBtn = $(".main__handle-sidebar-btn");

const menuIconLeft = new Image();
const menuIconRight = new Image();

menuIconLeft.src = MIL;
menuIconRight.src = MIR;

const updateLayout = () => {
  if (sidebar.classList.contains("sidebar--is-hidden")) {
    document.body.style.gridTemplateColumns = "1fr";
    sidebar.style.position = "absolute";
  } else {
    document.body.style.gridTemplateColumns = "auto 1fr";
    sidebar.removeAttribute("style");
  }
};

const updateIcon = () => {
  cleanCtn(handleSidebarBtn);
  handleSidebarBtn.appendChild(
    sidebar.classList.contains("sidebar--is-hidden")
      ? menuIconRight
      : menuIconLeft,
  );
};

const handleSidebar = () => {
  handleSidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar--is-hidden");
    updateIcon();
    updateLayout();
  });

  updateIcon();
  updateLayout();
};

window.matchMedia("(max-width: 800px)").onchange = (media) => {
  if (media.matches && !sidebar.classList.contains("sidebar--is-hidden")) {
    sidebar.classList.add("sidebar--is-hidden");

    updateIcon();
    updateLayout();
  } else {
    sidebar.classList.remove("sidebar--is-hidden");

    updateIcon();
    updateLayout();
  }
};

export default handleSidebar;
