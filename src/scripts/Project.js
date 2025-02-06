export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.isSelected = false;
    this.isDefault = false;
  }
}
