import projects from "./projects";

import { $ } from "./utils";

const updateCurrentProjectName = () => {
  const actualProjectName = $(".main__actual-project-name");

  projects.forEach((element) => {
    if (element.isSelected) {
      actualProjectName.textContent = element.name;
    }
  });
};

export default updateCurrentProjectName;
