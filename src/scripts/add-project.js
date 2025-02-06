import Project from "./Project";
import projects from "./projects";

const formatProjectName = (projectName) => {
  return (
    projectName.trim().charAt(0).toUpperCase() +
    projectName.trim().slice(1).toLowerCase()
  );
};

const addProject = (projectName) => {
  if (projectName) {
    const pName = formatProjectName(projectName);
    const newProject = new Project(pName);

    projects.push(newProject);

    return true;
  }
};

export default addProject;
