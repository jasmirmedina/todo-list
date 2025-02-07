export default class Task {
  constructor(title) {
    this.title = title;
    this.complete = false;
  }

  toggleComplete() {
    this.complete = !this.complete;
  }
}
