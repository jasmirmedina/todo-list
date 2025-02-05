export default class Task {
  constructor(title, priority) {
    this.title = title;
    this.priority = this.setPriority(priority);
    this.complete = false;
    this.remove = false;
  }

  toggleComplete() {
    this.complete = !this.complete;
  }

  setRemove() {
    this.remove = true;
  }

  setPriority(priority) {
    if (priority === 0) {
      return { High: 0 };
    }

    if (priority === 1) {
      return { Normal: 1 };
    }

    if (priority === 2) {
      return { Low: 2 };
    }
  }
}
